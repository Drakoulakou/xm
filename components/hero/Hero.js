import Image from "next/image";
import styles from "./styles";
import Subtitle from "../subtitle/Subtitle";
import Button from "../button/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles}>
      <p>TRADE WITH</p>
      <h1>
        <strong>Zero Swaps </strong>
        on All XM Ultra Low Accounts for more than 25 instruments!
      </h1>
      <Subtitle subtitle="Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on" />
      <Subtitle subtitle="instruments like EURUSD, USDJPY, EURJPY, GBPUSD, and Gold." />
      <Button title="OPEN ACOUNT" />
      <p className="hero-subtitle-link">
        New to trading? Try a
        <Link href="/" style={{ color: "white", textDecoration: "underline" }}>
          Demo account.
        </Link>
      </p>
      <p className="hero-subtitle-link">
        Terms and Conditions apply <span className="asterisk">*</span>. To read
        the full T&Cs, <Link href="/">click here.</Link>
      </p>
    </section>
  );
}
