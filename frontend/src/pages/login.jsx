import HeaderBar from "../components/HeaderBar";
import Login from "../styles/login.module.scss";
import key from "../assets/Key.png";
import Input1 from "../components/Input1";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
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
                console.error(data.error);
            }
            if (data.status == "Logged In") {
                console.log(data.token);
                localStorage.setItem("token", data.token);
                alert("logged in");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={Login.Background}>
            {/* Navbar/HeaderBar */}
            <HeaderBar />
            {/* White background */}
            <div className={Login.Wrapper}>
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
            </div>
        </div>
    );
}
