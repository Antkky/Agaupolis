import Header from "./styles/HeaderBar.module.scss";

export default function HeaderBar() {
    return (
        <div className={Header.Wrapper}>
            <div className={Header.NavButtons}></div>
        </div>
    );
}
