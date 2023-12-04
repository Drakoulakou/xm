import Image from "next/image";
import styles from "./styles";

export default function Footer() {
  return (
    <footer className={styles}>
      <Image
        src="/assets/rectangle.svg"
        width={250}
        height={156}
        alt="Rectangle image"
      />
    </footer>
  );
}
