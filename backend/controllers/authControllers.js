import UserModel from "../models/user.js";
import { registerChecks } from "../helpers/checks.js";
import { comparePassword } from "../helpers/encrypt.js";
import { EncryptPWD } from "../helpers/encrypt.js";
import { authJWT, decodeJWT } from "../helpers/auth.js";

export function test(res) {
    return res.json({
        status: "server is working correctly",
    });
}

// register new user
export async function registerUser(req, res) {
    try {
        // parse request body
        const { firstName, lastName, email, password } = req.body;

        // run checks on inputs
        registerChecks(firstName, lastName, email, password);

        // encrypt password
        const encyptedPWD = await EncryptPWD(password);

        // create user in database
        await UserModel.create({
            firstName,
            lastName,
            email,
            password: encyptedPWD,
        });

        // return status
        return res.json({
            status: "account created",
        });
    } catch (error) {
        console.error(error);
    }
}

// Login User
export async function loginUser(req, res) {
    try {
        // parse data
        const { email, password } = req.body;

        // find account
        const user = await UserModel.findOne({ email });

        // check if user is valid
        if (!user)
            return res.json({
                error: "invalid user",
            });

        // match inputted password with encrypted password
        const match = await comparePassword(password, user.password);
        if (!match)
            return res.json({
                error: "invalid password",
            });

        // generate JWT token
        const token = authJWT(
            user._id,
            user.firstName,
            user.lastName,
            user.email
        );

        // return status
        return res.json({
            status: "Logged In",
            token: token,
        });
        //
    } catch (error) {
        console.error(error);
    }
}

// get user data using jwt token
export async function userData(req, res) {
    try {
        // get JWT token from request header
        const token = req.headers["token"];

        // decode JWT token
        const decoded = decodeJWT(token);

        // find user by ID
        const user = await UserModel.findById(decoded.id);

        // checks if user exists
        if (!user) {
            return res.json({
                error: "invalid user",
            });
        }

        // returns user data
        return res.json(decoded);

        //
    } catch (error) {
        console.log(error);
        res.json({
            error: "invalid token",
        });
    }
}
