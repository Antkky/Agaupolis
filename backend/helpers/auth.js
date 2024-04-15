import jwt from "jsonwebtoken";
import "dotenv/config";

export function authJWT(user) {
    // create a token and sign it to a variable
    const token = jwt.sign(user.toJSON(), process.env.JWTsecret);

    // returns generated token
    return token;
}

export function decodeJWT(token) {
    // verifies and returns token
    return jwt.verify(token, process.env.JWTsecret);
}
