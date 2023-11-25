import React from "react";
import Image from "next/image";
 
const CTA = () => {
  return (
    <div className="bg-primary-color-40 p-12 flex flex-col items-center justify-center">
      <div className="flex px-auto mx-auto flex-col-reverse md:flex-row md:justify-center space-x-4 items-center gap-4 mb-2">
        <div className="p-4 mx-auto">
          <Image src={"/books.jpg"} alt="WE NEED YOU" width={300} height={150} />
        </div>

        <div className="max-w-xl">
          <h1 className="mb-4">PŘIPOJ SE K NÁM!</h1>
         <div  className="text-base leading-8">    
         <p >
            Časopis Peřinka volá o pomoc! Hledáme veškeré kreativní lidi na Opatově, kteří mají chuť a čas podílet se na školním časopise.
          </p>
          <p>
            Převážně teď sháníme grafika. Někoho, kdo všechny články naháže do programu a vykouzlí z pár textových dokumentů to, co můžou všichni studenti i profesoři nakonec vidět hotové před sebou.
          </p> 
          <p>
            Stále ale hledáme i redaktory a přispěvatele. Jaký je mezi tím rozdíl? Redaktor je někdo, kdo se k nám přidá na "plný úvazek" - přidáme ho do skupiny, bude pomáhat se skládáním obsahu a podobně. Přispěvatel je kdokoliv, kdo nám na e-mail nebo tellonym pošle svůj příspěvek.
          </p>
          <p>
            Pokud se chcete přidat, napište nám na e-mail.
          </p>
          <p>
            Těšíme se na vás!
          </p>
          </div>
           
        </div>
      </div>
      <button className="mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
        ODESLAT SVŮJ ČLÁNEK
      </button>
    </div>
  );
};

 
export default CTA;
