import * as crypto from "crypto";
import { promisify } from "util";
import querystring from "querystring";

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

// gets the hashIterations and salt from the hash param, then hashes the string
// with the same iterations/salt then compares the results
async function compareStringToHash(string, hash) {
    if (!string || !hash) return false;
  
    const hashArr = hash.split("|");
    if (hashArr.length !== 4) {
      return Promise.reject("Server error: Hash not formatted correctly");
    }
    const [algorithm, hashIterations, hashedString, hashedSalt] = hashArr;
  
    if (algorithm !== "pbkdf2") {
      return Promise.reject("Server error: Wrong hash algorithm");
    }
  
    // pass in the string with the iterations/salt from the existing hash to see if they match
    const newHash = await hashString(string, Number(hashIterations), hashedSalt);
    return newHash === hash;
}

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