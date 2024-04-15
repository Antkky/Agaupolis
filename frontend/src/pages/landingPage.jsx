import { useNavigate } from "react-router-dom";
import Sphere from "../components/blurred-spheres";
import Button1 from "../components/button1";
import Button2 from "../components/button2";
import Page from "../styles/LandingPage.module.scss";
import Footer from "../components/footer";

export default function LandingPage() {
  /* Define Navigate Function */
  const Navigate = useNavigate();

  /* Navigate to Client Portal Login */
  const NavigateToLogin = () => {
    Navigate("/Login");
  };
  /* Navigate to Learn More page */
  const NavigateToLearnMore = () => {
    Navigate("/Learn-More");
  };

  return (
    <div className={Page.Attributes_Holder}>
      <div className={Page.Wrapper}>
        {/* Page Title */}
        <h1 className={Page.Title}>Agaupolis</h1>

        {/* Slogan Text Wrapper */}
        <div className={Page.Slogan}>
          <h3>Invest with </h3>
          <h3 className={Page.Confidence}>Confidence</h3>
        </div>

        {/* Learn More Button */}
        <div className={Page.LearnMore} onClick={NavigateToLearnMore}>
          <Button1 text="Learn More" />
        </div>

        {/* Client Portal Button */}
        <div className={Page.ClientButton} onClick={NavigateToLogin}>
          <Button2 text="Client Portal" />
        </div>

        {/* Start Background Spheres */}
        <div className={Page.SphereWrapper}>
          <div className={Page.Sphere1}>
            <Sphere />
          </div>
          <div className={Page.Sphere2}>
            <Sphere />
          </div>
        </div>
        {/* End Background Spheres */}
      </div>
      <div className={Page.Footer_Wrapper}>
        <Footer />
      </div>
    </div>
  );
}
