import footer from "./styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={footer.Wrapper}>
      <div className={footer.Title_Wrapper}>
        <h1 className={footer.Title}>Invest With</h1>
        <h1 className={footer.Title2}>Confience</h1>
      </div>
      <div className={footer.Link_Wrapper}>
        <div className={footer.Link_Section_Left}>
          <p>Contact Us</p>
          <p>SiteMap</p>
        </div>
        <div className={footer.Link_Section_Middle}>
          <p>Learn More</p>
          <p>About Us</p>
        </div>
        <div className={footer.Link_Section_Right}>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
