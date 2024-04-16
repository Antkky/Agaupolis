import StatsModule from "../components/stats-module";
import page from "../styles/clientportal.module.scss";
import deposit from "../assets/deposit.svg";
import money from "../assets/money.svg";
import withdrawal from "../assets/withdrawal.svg";
import Template from "./template";

export default function ClientPortal() {
    const firstName = "Anthony";
    return (
        <Template>
            <div className={page.Content}>
                <section className={page.Welcome}>
                    <div className={page.WelcomeText}>
                        <h1>Welcome Back,</h1>
                        <h1 className={page.name}>{firstName}</h1>
                    </div>
                    <h1 className={page.missed}>Here's what you missed.</h1>
                </section>
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
                        label="total deposit"
                        image={withdrawal}
                    />
                </section>
            </div>
        </Template>
    );
}
