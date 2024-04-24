import Login from "../styles/login.module.scss";
import key from "../assets/Key.svg";
import Input1 from "../components/Input1";
import Template from "./template";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function LoginPage() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["name"]);
    // Get the user's input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/login", {
                email,
                password,
            });
            if (data.error) {
                toast.error(data.error);
            }
            if (data.status == "Logged In" && data.token) {
                toast.success(data.status);
                setCookie("JWT", data.token);
                navigate("/dashboard", { replace: true });
            }
        } catch (error) {
            console.error(error);
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
                <form className={Login.Form} onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className={Login.Input}>
                        <Input1
                            name="Email"
                            type="text"
                            value={email}
                            change={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* Password Input */}
                    <div className={Login.Input}>
                        <Input1
                            name="Password"
                            type="password"
                            value={password}
                            change={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* Submit Button */}
                    <button className={Login.Button} type="submit" style={{}}>
                        <p>Submit</p>
                    </button>
                    {/* End of Elements */}
                </form>
            </div>
        </Template>
    );
}
