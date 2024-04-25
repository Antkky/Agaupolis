import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landingPage.jsx";
import LoginPage from "./pages/login.jsx";
import ClientPortal from "./pages/clientportal.jsx";
import Deposit from "./pages/deposit.jsx";
import Withdrawal from "./pages/withdrawal.jsx";
import axios from "axios";
import Template from "./pages/template.jsx";

axios.defaults.baseURL = "http://localhost:8000/api";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Dashboard" element={<ClientPortal />} />
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/Withdrawal" element={<Withdrawal />} />
            <Route path="/Research" element={<Template />} />
        </Routes>
    );
}
