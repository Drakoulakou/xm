import Image from "next/image";
import styles from "./styles";
import Subtitle from "../subtitle/Subtitle";
import Button from "../button/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles}>
      <p>TRADE WITH</p>
      <div className="title">
        <h1>
          <strong>Zero Swaps </strong>
          on All XM Ultra Low
        </h1>
        <h1>Accounts for more than 25 instruments!</h1>
      </div>
      <Subtitle subtitle="Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on" />
      <Subtitle subtitle="instruments like EURUSD, USDJPY, EURJPY, GBPUSD, and Gold." />
      <Button title="OPEN ACOUNT" />
      <div className="hero-subtitle-link-first">
        <p>New to trading? Try a </p> <Link href="/">Demo account.</Link>
      </div>
      <div className="hero-subtitle-link-second">
        <p>Terms and Conditions apply</p>
        <p className="asterisk">*</p>
        <p>. To read the full T&Cs, </p>
        <Link href="/">click here.</Link>
      </div>
    </section>
  );
}
