import { hashString, createId } from "./helpers/crypto";
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
} from "./helpers/keys";
import * as contentfulDelivery from "contentful";
import * as contentfulManagement from "contentful-management";

exports.handler = async event => {
  // instantiate the deliveryClient (client used for querying and displaying content)
  // we will use this to check and see if any users for a given email exist
  const deliveryClient = contentfulDelivery.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: CONTENTFUL_DELIVERY_ACCESS_TOKEN
  });

  // instantiate the managementClient (client used for creating and otherwise managing content)
  // we will use this to create and publish an entry for the the user
  var managementClient = contentfulManagement.createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
  });

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  // get the data from the request body
  const params = JSON.parse(event.body);

  // validation; ensure that a email and password are provided, otherwise return error
  if (!params.email || !params.password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Must include email and password params" })
    };
  }

  // validation; check if user already exists for provided email, otherwise return error
  const userCheck = await deliveryClient.getEntries({
    content_type: "testUser",
    "fields.email": params.email
  });

  if (userCheck.items.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "An account with the provided email already exists."
      })
    };
  }

  // contentful is all about locality, so everything we do will be in 'en-US' by default
  const createInput = {
    userId: { "en-US": createId() },
    email: { "en-US": params.email },
    password: { "en-US": await hashString(params.password, 10) }
  };

  // create the user object
  const space = await managementClient.getSpace(CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment("master");
  const newEntry = await environment.createEntry("testUser", {
    fields: createInput
  });
  // automatically publish; users shouldn't be drafts
  await newEntry.publish();

  // return info to the user
  return {
    statusCode: 200,
    body: JSON.stringify(createInput)
  };
};
