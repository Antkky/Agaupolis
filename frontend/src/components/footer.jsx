import footer from "./styles/footer.module.scss";

export default function Footer() {
    return (
        <div className={footer.Wrapper}>
            <div className={footer.Title_Wrapper}>
                <h1 className={footer.Title}>Invest With</h1>
                <h1 className={footer.Title2}>Confidence</h1>
            </div>
            <div className={footer.Link_Wrapper}>
                <div className={footer.Link_Section_Left}>
                    <label>Contact Us</label>
                    <label>SiteMap</label>
                </div>
                <div className={footer.Link_Section_Middle}>
                    <label>Learn More</label>
                    <label>About Us</label>
                </div>
                <div className={footer.Link_Section_Right}>
                    <label>Terms of Services</label>
                    <label>Privacy Policy</label>
                </div>
            </div>
        </div>
    );
}
