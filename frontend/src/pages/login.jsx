import HeaderBar from "../components/HeaderBar";
import Login from "../styles/login.module.scss";
import key from "../assets/Key.png";
import Input1 from "../components/Input1";
import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();

        if (data.user) {
            localStorage.setItem("token", data.user);
            window.location.href = "/ClientPortal";
        } else {
            alert("invalid login");
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
                                name="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        {/* Password Input */}
                        <div className={Login.Input}>
                            <Input1
                                name="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
