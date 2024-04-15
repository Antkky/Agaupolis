import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./pages/landingPage.jsx";
import LoginPage from "./pages/login.jsx";
import ClientPortal from "./pages/clientportal.jsx";

export default function App() {
    return (
        <Router>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/ClientPortal" element={<ClientPortal />} />
            </Routes>
        </Router>
    );
}
