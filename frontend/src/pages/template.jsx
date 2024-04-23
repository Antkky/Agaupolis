import page from "../styles/template.module.scss";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/footer";

export default function Template({ children }) {
    return (
        <div className={page.Background}>
            <HeaderBar />
            <div className={page.Content}>{children}</div>
        </div>
    );
}
