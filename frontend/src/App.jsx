import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./pages/landingPage.jsx";
import LoginPage from "./pages/login.jsx";
import ClientPortal from "./pages/clientportal.jsx";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
});

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/ClientPortal" element={<ClientPortal />} />
            </Routes>
        </Router>
    );
}
