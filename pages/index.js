import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import CryptoCards from "@/components/crypto-cards/CryptoCards";
import TraderAdvantages from "@/components/trader-advantages/TraderAdvantages";
import Registration from "@/components/registration/Registration";

export default function Home() {
  return (
    <>
      <Head>
        <title>XM</title>
        <meta name="description" content="XM meta description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <div className="main-background">
        <CryptoCards />
        <TraderAdvantages />
        <Registration />
      </div>
    </>
  );
}
