import Hero from "../components/global/Hero";
import PageDescripiton from "../components/home/PageDescripiton";
import CTA from "../components/home/CTA";
import React from "react";
import Section from "../components/global/Section";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Hero
        firstHeading={" STUDENTSKÝ<br />ČASOPIS"}
        secondHeading={"GYMNÁZIUM OPATOV"}
        showReadButton={true}
      />

      <PageDescripiton />
      <Section classNames="leading-8 px-8 bg-primary-color-40 flex flex-col sm:flex-row justify-center       ">
      <Image src={'/randomPics/pen2d11.png'} className='mx-auto'alt={'pen'} width={140} height={65} />
        <p className="   text-base    ">
          Těšte se můžete na rozhovory s učiteli, aktuality ve světě, nebo na
          zajímavosti z prostředí gymnázia! Můžete se zapojit do publikací
          zaslíním svého vlastního článku. Nejlepší práce se objeví v novém
          čísle.
        </p>
      </Section>

      <Section classNames="flex leading-8  flex-col sm:flex-row gap-x-0  justify-center">
        {/* <h1 className="text-center">ARCHIV</h1> */}
        <button className="action-button   px-auto">
          <a href="/read/květen-červen.pdf">Přejít do archivu</a>
        </button>
        <Image
          src={"/randomPics/book.png"}
          className="mx-auto sm:mx-0"
          alt={"book"}
          width={140}
          height={65}
        />

      </Section>
      <CTA />
    </main>
  );
}
