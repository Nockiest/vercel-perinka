import React from "react";
import Section from "../global/Section";
import Image from "next/image";

const PageDescripiton = () => {
  return (
    <Section  classNames=" px-8 flex flex-col-reverse sm:flex-row-reverse justify-center     indent-1 mx-auto m-3" >
        <Image src={'/randomPics/pen2d11.png'} className='mx-auto'alt={'pen'} width={140} height={65} />
         <p className="text-base  leading-6  " >
        Vítáme Vás na stránkách Peřinky, oficiálního studentského časopisu Gymnázia Opatov! Jsme moc rádi, že jste sem zabloudili.
        <br />


        Časopis bude vycházet každé dva měsíce. V kmenových učebnách naleznete jeden výtisk pro třídu, několik dalších jich leží po škole, kde do nich můžete nahlédnout o přestávkách či poledních pauzách. Pro ty, kdo na naši školu nechodí i pro takové, kteří by si raději v klidu početli doma, přinášíme ovšem i PDF verzi.
      </p>
    </Section>


  );
};


export default PageDescripiton;
