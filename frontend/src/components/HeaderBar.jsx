import Header from "./styles/HeaderBar.module.scss";
import Menu from "../assets/Menu.svg";
import pfp from "../assets/pfp.svg";
import bell from "../assets/bell.svg";

export default function HeaderBar() {
    return (
        <div className={Header.Wrapper}>
            <div className={Header.LeftElements}>
                <img src={Menu} />
            </div>
            <div className={Header.NavButtons}>
                <ul>
                    <li>Deposit</li>
                    <li className={Header.Active}>Dashboard</li>
                    <li>Withdrawal</li>
                </ul>
            </div>
            <div className={Header.RightElements}>
                <img src={pfp} />
                <img src={bell} />
            </div>
        </div>
    );
}
