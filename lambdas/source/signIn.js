
import { hashString, compareStringToHash } from "./helpers/crypto";

exports.handler = async (event, context) => {
    // Only allow POST
    // if (event.httpMethod !== "POST") {
    //     return { statusCode: 405, body: "Method Not Allowed" };
    // }

    // const params = JSON.parse(event.body);

    // if (!params.email || !params.password) {
    //     return { statusCode: 400, body: "Must include email and password params" };
    // }

    // if (!(await compareStringToHash(password, user.password))) {
    //     throw Error(`Invalid email or password`);
    // }

    // all good

    // TODO: all of this
}