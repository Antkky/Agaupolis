import UserModel from "../models/user.js";
import { registerChecks } from "../helpers/checks.js";
import { comparePassword } from "../helpers/encrypt.js";
import { EncryptPWD } from "../helpers/encrypt.js";
import { authJWT } from "../helpers/auth.js";

export function test(req, res) {
    return res.json({
        status: "server is working correctly",
    });
}

// register new user
export async function registerUser(req, res) {
    try {
        // parse request body
        const { admin, firstName, lastName, email, password } = req.body;

        // run checks on inputs
        registerChecks(admin, firstName, lastName, email, password);

        // encrypt password
        const encyptedPWD = await EncryptPWD(password);

        // create user in database
        await UserModel.create({
            admin,
            firstName,
            lastName,
            email,
            password: encyptedPWD,
            totalWithdrawals: 0,
            totalDeposits: 0,
            netProfit: 0,
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
        const token = authJWT(user._id);

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
