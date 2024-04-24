import Header from "./styles/HeaderBar.module.scss";
import Menu from "../assets/Menu.svg";
import pfp from "../assets/pfp.svg";
import bell from "../assets/bell.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles/buttonStyle.scss";

export default function HeaderBar() {
    const navigate = useNavigate();
    function deposit() {
        navigate("/deposit", { replace: true });
    }
    function dashboard() {
        navigate("/dashboard", { replace: true });
    }
    function withdrawal() {
        navigate("/withdrawal", { replace: true });
    }
    useEffect(() => {
        if (window.location.pathname === "/dashboard") {
            document.getElementById("dashboardButton").classList.add("Active");
        }
        if (window.location.pathname === "/deposit") {
            document.getElementById("depositButton").classList.add("Active");
        }
        if (window.location.pathname === "/withdrawal") {
            document.getElementById("withdrawalButton").classList.add("Active");
        }
    });
    return (
        <div className={Header.Wrapper}>
            <div className={Header.LeftElements}>
                <img src={Menu} />
            </div>
            <div className="NavButtons">
                <ul>
                    <li onClick={deposit} id="depositButton">
                        Deposit
                    </li>
                    <li onClick={dashboard} id="dashboardButton">
                        Dashboard
                    </li>
                    <li onClick={withdrawal} id="withdrawalButton">
                        Withdrawal
                    </li>
                </ul>
            </div>
            <div className={Header.RightElements}>
                <img src={pfp} />
                <img src={bell} />
            </div>
        </div>
    );
}
