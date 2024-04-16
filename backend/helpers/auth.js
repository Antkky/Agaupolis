import jwt from "jsonwebtoken";
import "dotenv/config";

export function authJWT(id, firstName, lastName, email) {
    // create a token and sign it to a variable
    const token = jwt.sign(
        {
            id,
            firstName,
            lastName,
            email,
        },
        process.env.JWTsecret
    );

    // returns generated token
    return token;
}

export function decodeJWT(token) {
    // verifies and returns token
    return jwt.verify(token, process.env.JWTsecret);
}
