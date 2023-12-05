import Image from "next/image";
import styles from "./styles";

export default function CryptoCard({
  icon,
  symbol,
  name,
  priceUSD,
  percentChange24h,
  caret,
  down,
}) {
  return (
    <div className={styles}>
      <div className="cryptocard-uper-section">
        <Image
          className="padding"
          src={icon}
          width={31.22}
          height={30}
          alt="Icon"
        />
        <div className="padding">{symbol}</div>
        <div className="cryptoCard-name padding ">{name}</div>
      </div>
      <hr className="horizontal"></hr>
      <div>
        <div className="cryptoCard-priceUSD">$ {priceUSD}</div>
        {/* <Image
          className="padding"
          src={down ? "/assets/up-caret.svg" : "/assets/up-caret.svg"}
          width={30}
          height={30}
          alt="caret-icon"
        /> */}
        <div className={`cryptoCard-percentChange24h ${down ? "red" : ""}`}>
          {percentChange24h}%
        </div>
      </div>
    </div>
  );
}
