import Hero from "../components/global/Hero";
import PageDescripiton from "../components/home/PageDescripiton";
import CTA from "../components/home/CTA";
import React from "react"
import Section from "../components/global/Section";
export default function Home() {
  return  <main>

      <Hero firstHeading={" STUDENTSKÝ<br />ČASOPIS"} secondHeading={"GYMNÁZIUM OPATOV"}
      showReadButton={true} />
      <h1>Peřinka Gymnazium Opatov</h1>
      <h2>Peřinka Gymnazium Opatov</h2>
      <h3>Peřinka Gymnazium Opatov</h3>
      <h4>Peřinka Gymnazium Opatov</h4>
      <h5>Peřinka Gymnazium Opatov</h5>
      <h6>Peřinka Gymnazium Opatov</h6>
      <PageDescripiton />
      <Section classNames="flex flex-column justify-center">
        {/* <h1 className="text-center">ARCHIV</h1> */}
        <button className="action-button mx-auto px-auto"><a href='/read/květen-červen.pdf'>Přejít do archivu</a></button>
      </Section>
      <CTA />

    </main>
}
