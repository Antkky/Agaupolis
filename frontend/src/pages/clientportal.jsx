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

export default function ClientPortal() {
    return (
        <>
            <Template>
                <div className={page.Content}>
                    <section className={page.Welcome}>
                        <div className={page.WelcomeText}>
                            <h1>Welcome Back,</h1>
                            <h1 className={page.name}>Anthony</h1>
                        </div>
                        <h1 className={page.missed}>Here's what you missed.</h1>
                    </section>
                    <hr className={page.rounded} />
                    <section className={page.Stats}>
                        <StatsModule
                            amount="25,000$"
                            label="total deposit"
                            image={deposit}
                        />
                        <StatsModule
                            amount="5,000$"
                            label="net profit"
                            image={money}
                        />
                        <StatsModule
                            amount="5,000$"
                            label="total withdrawals"
                            image={withdrawal}
                        />
                    </section>
                    <section className={page.EquityChart}>
                        <EquityChart />
                    </section>
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
