import { compareStringToHash, generateToken } from "./helpers/crypto";
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN
} from "./helpers/keys";
import * as contentfulDelivery from "contentful";
console.log("Real beginning test");
exports.handler = async event => {
  // instantiate the deliveryClient (client used for querying and displaying content)
  // we will use this to check and see if any users for a given email exist
  const deliveryClient = contentfulDelivery.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: CONTENTFUL_DELIVERY_ACCESS_TOKEN
  });

  // Only allow POST
  console.log("lambda function start");
  if (event.httpMethod !== "POST") {
    console.log(event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed, ya dummy" })
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

  // validation; ensure user exists for provided email, otherwise return error
  const userCheck = await deliveryClient.getEntries({
    content_type: "testUser",
    "fields.email": params.email
  });

  if (
    !userCheck ||
    !userCheck.items ||
    userCheck.items.length !== 1 ||
    !userCheck.items[0] ||
    !userCheck.items[0].fields.email ||
    userCheck.items[0].fields.email !== params.email
  ) {
    // return an error. We don't want to be too descriptive in our response so that
    // wrong-doers aren't given any hints or clues on how to continue breaking into the system
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Invalid credentials!"
      })
    };
  }
  // email is good
  const contenfulUser = userCheck.items[0];

  // validation; check and see if the password provided matches the hash saved on the user object
  if (
    !(await compareStringToHash(params.password, contenfulUser.fields.password))
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Invalid credentials."
      })
    };
  }

  let { token, expiration } = generateToken(contenfulUser.fields.id);

  const userToReturn = {
    userId: contenfulUser.fields.userId,
    email: contenfulUser.fields.email
  };

  // all good; return user
  // TODO: jwt token
  return {
    statusCode: 200,
    body: JSON.stringify({
      user: userToReturn,
      token,
      expiration
    })
  };
};
