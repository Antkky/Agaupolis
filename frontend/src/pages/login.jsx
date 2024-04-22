import Login from "../styles/login.module.scss";
import key from "../assets/Key.png";
import Input1 from "../components/Input1";
import Template from "./template";
import { useState, useEffect } from "react";

export default function LoginPage() {
    // Get the user's input
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Send a POST request to the API server with the user's input
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/login", {
                username,
                password,
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Template>
            {/* Main Form */}
            <div className={Login.Content}>
                {/* Key Icon */}
                <div className={Login.Icon_Wrapper}>
                    <img src={key} />
                </div>
                {/* Authenticate Text */}
                <h1>Authenticate</h1>
                <form className={Login.Form}>
                    {/* Username Input */}
                    <div className={Login.Input}>
                        <Input1 name="Email" type="text" />
                    </div>
                    {/* Password Input */}
                    <div className={Login.Input}>
                        <Input1 name="Password" type="password" />
                    </div>
                    {/* Submit Button */}
                    <button className={Login.Button}>
                        <p>Submit</p>
                    </button>
                    {/* End of Elements */}
                </form>
            </div>
        </Template>
    );
}
