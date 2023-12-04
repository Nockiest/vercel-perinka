import React from "react";
import Image from "next/image";
import Section from "../global/Section";

const CTA = () => {

  return (
    <Section classNames={"flex bg-primary-color-40 flex-col sm:flex-row    px-auto mx-auto"}>
      <div className=" mt-8  sm:w-2/3 mx-auto    ">
      <h2 className="mb-4   text-center  ">PŘIPOJ SE K NÁM!</h2>


        <p className="text-base leading-8  ">
          Časopis Peřinka volá o pomoc! Hledáme veškeré kreativní lidi na
          Opatově, kteří mají chuť a čas podílet se na školním časopise.
          <br />
          Převážně teď sháníme <i className="text-base">grafika</i>. Někoho, kdo všechny články naháže do
          programu a vykouzlí z pár textových dokumentů to, co můžou všichni
          studenti i profesoři nakonec vidět hotové před sebou.
          <br />
          Stále ale hledáme i  <i className="text-base">redaktory</i> a  <i className="text-base">přispěvatele</i>. Jaký je mezi tím rozdíl?
          Redaktor je někdo, kdo se k nám přidá na "plný úvazek" - přidáme ho do
          skupiny, bude pomáhat se skládáním obsahu a podobně. Přispěvatel je
          kdokoliv, kdo nám na <b><a href='mailto:casopisgo@gopat.cz'>e-mail</a>  </b>  nebo <b><a href='https://tellonym.me/perinka_go'>tellonym pošle svůj příspěvek.</a></b>
          <br />
          Pokud se chcete přidat, napište nám na <b><a href='mailto:casopisgo@gopat.cz'>e-mail</a></b>.
          <br />
          <b className='text-lg underline'><a href='mailto:casopisgo@gopat.cz'> Těšíme se na vás!</a> </b>
        </p>
        </div>
        <div className="sm:w-1/3 h-64 p-0 mx-auto md:my-auto"  >
        <Image
            src={"/randomPics/help.png"}
            alt="WE NEED YOU"
            width={300}
            height={150}
            className="p-4  mx-auto"
          />
        </div>




    </Section>

    // </div>
  );
};

export default CTA;
