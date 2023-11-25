import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="bg-primary-color-40 p-12 flex flex-col items-center justify-center">
  {/* <div className="flex px-auto mx-auto flex-col-reverse md:flex-row md:justify-center space-x-4 items-center gap-4 mb-2"> */}


        <div className=" w-2/3">
          <h1 className="mb-4 text-center mx-auto">PŘIPOJ SE K NÁM!</h1>

         <p  className="text-base leading-8">
            Časopis Peřinka volá o pomoc! Hledáme veškeré kreativní lidi na Opatově, kteří mají chuť a čas podílet se na školním časopise.
              <br />
            Převážně teď sháníme grafika. Někoho, kdo všechny články naháže do programu a vykouzlí z pár textových dokumentů to, co můžou všichni studenti i profesoři nakonec vidět hotové před sebou.
              <br />

            Stále ale hledáme i redaktory a přispěvatele. Jaký je mezi tím rozdíl? Redaktor je někdo, kdo se k nám přidá na "plný úvazek" - přidáme ho do skupiny, bude pomáhat se skládáním obsahu a podobně. Přispěvatel je kdokoliv, kdo nám na e-mail nebo tellonym pošle svůj příspěvek.
              <br />
            Pokud se chcete přidat, napište nám na e-mail.
              <br />
            Těšíme se na vás!
          </p>
          <div className="p-4 mx-auto">
          <Image src={"/books.jpg"} alt="WE NEED YOU" width={300} height={150} />
        </div>
        {/* </div> */}
      </div>
       
    </div>
  );
};


export default CTA;
