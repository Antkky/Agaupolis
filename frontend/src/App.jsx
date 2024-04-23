import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import LandingPage from "./pages/landingPage.jsx";
import LoginPage from "./pages/login.jsx";
import ClientPortal from "./pages/clientportal.jsx";
import Template from "./pages/template.jsx";
const queryClientRef = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClientRef}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/ClientPortal" element={<ClientPortal />} />
                <Route path="/Test" element={<Template />} />
            </Routes>
        </QueryClientProvider>
    );
}
