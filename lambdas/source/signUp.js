import { hashString, createId, generateToken } from "./helpers/crypto";
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
} from "./helpers/keys";
import * as contentfulDelivery from "contentful";
import * as contentfulManagement from "contentful-management";

console.log("testing the beginning of signUp");

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

function response(dataObj) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(dataObj)
  };
}

exports.handler = async event => {
  // handle preflight; Ughhhhhhhhhhhhhhhh
  // Non-simple requests (POST, PUT, or DELETE requests, ones with many headers,
  // etc) will first preflight requests that check with the server to see which
  // kinds of requests are allowed. In this instances, `event.httpMethod` will equal
  // 'OPTIONS'. When we get that request, it's important to response with a status
  // code of 200, and the headers that are allowed to come in on the next request!
  if (event.httpMethod !== "POST") {
    return response({ message: "This was not a POST request!" });
  }

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

  // get the data from the request body
  const params = JSON.parse(event.body);

  // validation; ensure that a email and password are provided, otherwise return error
  if (!params.email || !params.password || !params.firstName || !params.lastName) {
    return response({
      error: "Please fill out all the fields."
    });
  }

  // validation; check if user already exists for provided email, otherwise return error
  const userCheck = await deliveryClient.getEntries({
    content_type: "testUser",
    "fields.email": params.email
  });

  if (userCheck.items.length > 0) {
    return response({
      error: "An account with the provided email already exists."
    });
  }

  // TODO: add some kind of email validation???

  // contentful is all about locality, so everything we do will be in 'en-US' by default
  const createInput = {
    userId: { "en-US": createId() },
    email: { "en-US": params.email },
    password: { "en-US": await hashString(params.password, 10) },
    firstName: { "en-US": params.firstName },
    lastName: { "en-US": params.lastName },
    approved: { "en-US": params.approved }
  };

  // create the user object
  const space = await managementClient.getSpace(CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment("master");
  const newEntry = await environment.createEntry("testUser", {
    fields: createInput
  });
  // automatically publish; users shouldn't be drafts
  await newEntry.publish();

  let { token, expiration } = generateToken(newEntry.fields.userId["en-US"]);

  const userToReturn = {
    userId: newEntry.fields.userId["en-US"],
    email: newEntry.fields.email["en-US"],
    name: newEntry.fields.firstName["en-US"] + " " + newEntry.fields.lastName["en-US"]
  };

  // return info to the user
  return response({
    user: userToReturn,
    token,
    expiration
  });
};
