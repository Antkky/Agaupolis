import Header from "./styles/HeaderBar.module.scss";
import Menu from "../assets/Menu.svg";
import pfp from "../assets/pfp.svg";
import bell from "../assets/bell.svg";
import close from "../assets/X.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/buttonStyle.scss";
import SideMenu from "./styles/menu.module.scss";

export default function HeaderBar() {
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);

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

    function OpenMenu() {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className={Header.Wrapper}>
                <div className={Header.LeftElements}>
                    <img src={Menu} onClick={OpenMenu} />
                </div>
                <div className="NavButtons">
                    <ul>
                        <li
                            onClick={() => {
                                navigate("/deposit", { replace: true });
                            }}
                            id="depositButton"
                        >
                            Deposit
                        </li>
                        <li
                            onClick={() => {
                                navigate("/dashboard", { replace: true });
                            }}
                            id="dashboardButton"
                        >
                            Dashboard
                        </li>
                        <li
                            onClick={() => {
                                navigate("/withdrawal", { replace: true });
                            }}
                            id="withdrawalButton"
                        >
                            Withdrawal
                        </li>
                    </ul>
                </div>
                <div className={Header.RightElements}>
                    <img src={pfp} />
                    <img src={bell} />
                </div>
            </div>
            <div
                className={sidebar ? "background-opened" : "background-closed"}
            >
                <div className={sidebar ? "nav-opened" : "nav-closed"}>
                    <div className={SideMenu.Wrapper}>
                        <img
                            className={SideMenu.Close}
                            src={close}
                            onClick={OpenMenu}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
