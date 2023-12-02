import Image from "next/image";
import styles from "./styles";
import Subtitle from "../subtitle/Subtitle";

export default function Hero() {
  return (
    <section className={styles}>
      <Subtitle subtitle="TRADE WITH" />
      <h1>
        <strong>Zero Swaps </strong>
        on All XM Ultra Low
      </h1>
      <h1>Accounts for more than 25 instruments!</h1>
    </section>
  );
}
