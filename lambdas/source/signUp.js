import * as crypto from "crypto";
import { promisify } from "util";

// When hashing a string, only provide the string param.
// The rest of the params are used internally when we compare a string to a hash
async function hashString(string, iterations = 100000, salt = null) {
    if (!string) {
        return Promise.reject("Server error: No string provided to hash");
    }
  
    const generateSalt = promisify(crypto.randomBytes);
    const pbkdf2Hash = promisify(crypto.pbkdf2);
    const keyLength = 64;
    const digest = "sha512";
    const encoding = "hex";
  
    if (salt && typeof salt === "string") {
        salt = await Buffer.from(salt, encoding);
    }
    if (!salt) {
        salt = await generateSalt(keyLength);
    }
  
    return pbkdf2Hash(string, salt, iterations, keyLength, digest).then(key => {
        const hashedString = key.toString(encoding);
        const hashedSalt = salt.toString(encoding);
        const hash = `pbkdf2|${iterations}|${hashedString}|${hashedSalt}`;
        return hash;
    });
}

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

    return {
        statusCode: 200,
        body: JSON.stringify(createInput)
    };
};