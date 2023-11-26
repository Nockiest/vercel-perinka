import Hero from "../components/global/Hero";
import PageDescripiton from "../components/home/PageDescripiton";
import CTA from "../components/home/CTA";
import React from "react"
import Section from "../components/global/Section";
export default function Home() {
  return  <main>

      <Hero firstHeading={" STUDENTSKÝ<br />ČASOPIS"} secondHeading={"GYMNÁZIUM OPATOV"}
      showReadButton={true} />
      <Section >
        <h1>ARCHIV</h1>
        <p><a href='/read/květen-červen.pdf'>Test Odkazu</a></p>
      </Section>
      <PageDescripiton />
      <CTA />

    </main>
}
