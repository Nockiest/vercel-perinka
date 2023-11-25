import Hero from "../components/global/Hero";
import PageDescripiton from "../components/home/PageDescripiton";
import CTA from "../components/home/CTA";
import React from "react"
export default function Home() {
  return  <main>

      <Hero firstHeading={" STUDENTSKÝ<br />ČASOPIS"} secondHeading={"GYMNÁZIUM OPATOV"}
      showReadButton={true} />
      <PageDescripiton />
      <CTA />

    </main>
}