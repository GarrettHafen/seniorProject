import { hashString } from "./helpers/crypto";

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    // if the method was GET, then we can retrieve params like so:
    // const name = event.queryStringParameters.name || "World";
    // BUT
    // When the method is POST, the name will no longer be in the event’s
    // queryStringParameters – it’ll be in the event body encoded as a query string

    const params = JSON.parse(event.body);

    if (!params.email || !params.password) {
        return { statusCode: 400, body: "Must include email and password params" };
    }

    const createInput = {
        email: params.email,
        password: await hashString(params.password, 10),
    };

    // TODO: save as user obj in contentful

    return {
        statusCode: 200,
        body: JSON.stringify(createInput)
    };
};