import Login from "../styles/login.module.scss";
import key from "../assets/Key.png";
import Input1 from "../components/Input1";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Template from "./template";

export default function LoginPage() {
    const navigate = useNavigate();

    // gets input data and assigns to "data" object
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    // login function
    async function loginUser(e) {
        // prevents page from reloading
        e.preventDefault();
        // assigns input to data variable
        const { email, password } = data;
        try {
            // post request and assign response to data object
            const { data } = await axios.post("/api/login", {
                email,
                password,
            });
            // check for errors
            if (data.error) {
                // log errors
                console.error(data.error);
            }
            // if server status = logged in
            if (data.status == "Logged In") {
                // store token in localstorage
                localStorage.setItem("token", data.token);
                // navigate to client portal with new token
                navigate("/clientportal", { replace: true });
            }
        } catch (error) {
            console.error(error);
        }
    }

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
                <form className={Login.Form} onSubmit={loginUser}>
                    {/* Username Input */}
                    <div className={Login.Input}>
                        <Input1
                            name="Email"
                            type="text"
                            value={data.email}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Password Input */}
                    <div className={Login.Input}>
                        <Input1
                            name="Password"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    password: e.target.value,
                                })
                            }
                        />
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
