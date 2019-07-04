import { compareStringToHash, generateToken } from "./helpers/crypto";
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN
} from "./helpers/keys";
import * as contentfulDelivery from "contentful";

// Ot looks like with lambdas you'll always want to
// return a status code of 200, else everything breaks.
// Same with the headers. So here's a helper function
// that returns the same format for every return, only
// the body content differs.
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

// for preflight responses // POST, PUT,
exports.handler = async (event, context) => {
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

  // // get the data from the request body
  const params = JSON.parse(event.body);

  // validation; ensure that a email and password are provided, otherwise return error
  if (!params.email || !params.password) {
    return response({
      error: "Must include email and password params"
    });
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
    return response({
      error: "Invalid credentials!"
    });
  }
  // email is good
  const contenfulUser = userCheck.items[0];

  // validation; check and see if the password provided matches the hash saved on the user object
  if (
    !(await compareStringToHash(params.password, contenfulUser.fields.password))
  ) {
    return response({
      error: "Invalid credentials!"
    });
  }

  let { token, expiration } = generateToken(contenfulUser.fields.id);

  const userToReturn = {
    userId: contenfulUser.fields.userId,
    email: contenfulUser.fields.email
  };

  // all good; return user
  // TODO: jwt token
  return response({
    user: userToReturn,
    token,
    expiration
  });
};
