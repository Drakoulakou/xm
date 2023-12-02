import Image from "next/image";
import Link from "next/link";
import styles from "./styles";

export default function Navbar() {
  return (
    <nav className={styles}>
      <Image src="/assets/logo.svg" width={139.21} height={48.25} alt="Logo" />
      <ul>
        <li>
          <Link href="/">XM Homepage</Link>
        </li>
        <li>
          <Link href="/">Support</Link>
        </li>
      </ul>
    </nav>
  );
}
