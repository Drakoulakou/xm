import Image from "next/image";
import Subtitle from "../subtitle/Subtitle";
import AdvantageCard from "./components/advantage-card/AdvantageCard";
import Horizontal from "./components/horizontal/Horizontal";
import styles from "./styles";

export default function TraderAdvantages() {
  return (
    <section className={styles}>
      <h1>
        Why <strong>Trade</strong> with XM?
      </h1>
      <Horizontal />
      <Subtitle subtitle="We have been providing traders around the world with the same premium experience for over a decade. As an industry-leader, we know what the modern trader needs to be successful in the markets." />
      <div className="inline">
        <AdvantageCard
          title="Superior Trade"
          titleSecond="Execution"
          subtitle="99% of trades are executed in less than a second, with no requotes or rejections."
          icon="/assets/fast-execusion-icon.svg"
          vertical
          largeImage
        />
        <div>
          <AdvantageCard
            title="Competitive"
            titleSecond="Pricing"
            subtitle="We offer some of the lowest spreads and we don’t charge commissions."
            icon="/assets/competitive-pricing-icon.svg"
          />
          <div className="inline">
            <AdvantageCard
              title="Advanced"
              titleSecond="Technology"
              subtitle="Trade on MT4 or MT5, with expert tools, across desktop, web and mobile."
              icon="/assets/tech-icon.svg"
            />
            <AdvantageCard
              title="Start with $5"
              subtitle="Start trading your preferred instruments with as little as a $5 minimum deposit."
              icon="/assets/dollar-icon.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
