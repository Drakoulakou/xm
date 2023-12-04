import Image from "next/image";
import Subtitle from "../subtitle/Subtitle";
import styles from "./styles";
import Horizontal from "../horizontal/Horizontal";

export default function AdvantageCard({
  icon,
  width,
  height,
  title,
  titleSecond,
  subtitle,
  vertical,
  largeImage,
}) {
  const imageDimensions = largeImage
    ? { width: 205, height: 205 }
    : { width: 90, height: 90 };

  return (
    <section
      className={styles}
      style={{
        flexFlow: vertical ? "column" : "row",
      }}
    >
      <div>
        <h1 className="advantageCard-title">{title}</h1>
        <h1 className="advantageCard-title-second">{titleSecond}</h1>
        <Horizontal />
        <Subtitle className="advantageCard-subtitle" subtitle={subtitle} />
      </div>
      <Image
        className="advantageCard-image"
        src={icon}
        width={imageDimensions.width}
        height={imageDimensions.height}
        alt="Icon"
      />
    </section>
  );
}
