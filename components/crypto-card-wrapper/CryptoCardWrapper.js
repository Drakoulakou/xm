import { useState, useEffect } from "react";
import CryptoCard from "../crypto-card/CryptoCard";
import styles from "./styles";

const allowedSymbols = ["BTC", "ETH", "XRP", "LTC", "BCH"];

export default function CryptoCardWrapper() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        const result = await response.json();
        setData(
          result?.data?.filter((item) => allowedSymbols.includes(item.symbol))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!data) {
      fetchData();
    }
  }, [data]);
  console.log("data", data);
  return (
    <section className={styles}>
      {data &&
        data?.map((ticker) => (
          <CryptoCard
            key={ticker.id}
            name={ticker.nameid.toUpperCase()}
            priceUSD={Number(ticker.price_usd).toLocaleString()}
            symbol={ticker.symbol}
            percentChange24h={ticker.percent_change_24h}
            icon={`/assets/${ticker.symbol}.svg`}
            caret={"/assets/green-caret.svg"}
            down={ticker.percent_change_24h[0] === "-"}
            title="caaaaaaard"
          />
        ))}
    </section>
  );
}
