import page from "../styles/template.module.scss";
import HeaderBar from "../components/HeaderBar";

export default function Template({ children }) {
    return (
        <div className={page.Background}>
            <HeaderBar />
            <div className={page.Wrapper}>
                <div className={page.Content}>{children}</div>
            </div>
        </div>
    );
}
