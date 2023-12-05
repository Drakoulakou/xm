import Image from "next/image";
import Subtitle from "@/components/subtitle/Subtitle";
import Horizontal from "../horizontal/Horizontal";
import styles from "./styles";

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
        <h3 className="advantageCard-title">{title}</h3>
        <h3 className="advantageCard-title-second">{titleSecond}</h3>
        <Horizontal />
        <Subtitle className="advantageCard-subtitle" subtitle={subtitle} />
      </div>
      <Image
        className="advantageCard-image"
        src={icon}
        width={imageDimensions.width}
        height={imageDimensions.height}
        alt={title}
      />
    </section>
  );
}
