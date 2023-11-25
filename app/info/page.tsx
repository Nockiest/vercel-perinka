import React from "react";
import Hero from "../../components/global/Hero";
import Section from "../../components/global/Section";
import InfoPost from "./InforPost";

const Informace = () => {
  return (
    <div>
      <Hero firstHeading={"INFORMACE"} secondHeading={"NEJNOVĚJŠÍ UDÁLOSTI"} />
      <Section classNames={"brown"}>
        <InfoPost  textContent="První letošní číslo je tady! A podíleli se na něm i noví členové
          redakce ze tříd 1.J a 2.E. Papírové časopisy opět najdete v celé
          škole, nově jsme ale do studovny, knihovny a před řiditelnu přidali
          barevné archivy, ve kterých budou umístěna i starší čísla. Přeji vám
          krásné počtení a níže samozřejmě najdete stručný přehled toho, co jsme
          si pro vás připravili ve čtvrtém čísle Peřinky."
         />
      </Section>
      <Section classNames={"bg-stone-300"}>
      <InfoPost
          title={'NOVÝ FEED A POČTENÍČKO'}
          textContent="První letošní číslo je tady! A podíleli se na něm i noví členové
          redakce ze tříd 1.J a 2.E. Papírové časopisy opět najdete v celé
          škole, nově jsme ale do studovny, knihovny a před řiditelnu přidali
          barevné archivy, ve kterých budou umístěna i starší čísla. Přeji vám
          krásné počtení a níže samozřejmě najdete stručný přehled toho, co jsme
          si pro vás připravili ve čtvrtém čísle Peřinky."

          image={{
            src: '/randomPics/pic1.jpg',
            position: 'left' ,
            alt: 'randompic'
          }}
         />

      </Section>
    </div>
  );
};






export default Informace;
