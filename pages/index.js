import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>XM</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
    </>
  );
}