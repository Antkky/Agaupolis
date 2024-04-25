import StatsModule from "../components/stats-module";
import page from "../styles/clientportal.module.scss";
import deposit from "../assets/deposit.svg";
import money from "../assets/money.svg";
import withdrawal from "../assets/withdrawal.svg";
import Template from "./template";
import EquityChart from "../components/EquityChart";
import Account_history from "../components/account-history";
import Footer from "../components/footer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // remove for production
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function ClientPortal() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["name"]);

    useEffect(() => {
        if (!cookies.JWT) {
            navigate("/login", { replace: true });
        }
    });

    const { data, status, error } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await axios({
                method: "get",
                url: "/userData",
                headers: {
                    Authorization: "Bearer " + cookies.JWT,
                },
            });
            return response.data;
        },
        staleTime: 1000 * 60,
    });

    if (status === "pending") {
        return (
            <>
                <h1>Loading</h1>
            </>
        );
    }
    if (status === "success")
        return (
            <>
                <Template>
                    <div className={page.Content}>
                        <section className={page.Welcome}>
                            <div className={page.WelcomeText}>
                                <h1>Welcome Back,</h1>
                                <h1 className={page.name}>{data.firstName}</h1>
                            </div>
                            <h1 className={page.missed}>
                                Here's what you missed.
                            </h1>
                        </section>
                        <hr className={page.rounded} />
                        <section className={page.Stats}>
                            <StatsModule
                                amount={data.totalDeposits}
                                label="total deposit"
                                image={deposit}
                            />
                            <StatsModule
                                amount={data.netProfit}
                                label="Current Equity"
                                image={money}
                            />
                            <StatsModule
                                amount={data.totalWithdrawals}
                                label="total withdrawals"
                                image={withdrawal}
                            />
                        </section>
                        <h1 className={page.sectionHeaders}>Account Equity</h1>
                        <section className={page.EquityChart}>
                            <EquityChart />
                        </section>
                        <h1 className={page.sectionHeaders}>
                            Transaction History
                        </h1>
                        <section className={page.History}>
                            <Account_history />
                        </section>
                        <section className={page.Footer}>
                            <Footer />
                        </section>
                    </div>
                </Template>
                <ReactQueryDevtools /> {/* remove for prduction */}
            </>
        );
}
