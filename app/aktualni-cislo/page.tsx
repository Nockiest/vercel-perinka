import ArticleSummary from '../../components/ArticleSummary'
import Hero from '../../components/global/Hero'
import React from 'react'
import Section from '../../components/global/Section'
import InfoPost from './InfoPost'

const NewNumber = () => {

  return (
    <div>
      <Hero firstHeading={"AKTUÁLNÍ <br />ČÍSLO"} secondHeading={"AKTUÁLNÍ ČÍSLO"}   />
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
          textContent="Rubriku aktuality jsme tentokrát věnovali oznámení nového instagramového feedu, který vytvořila Tereza Kryšpínová a také připomenutí toho, že zde na webu máme i bonusové počteníčko, které si určitě můžete přečíst."

          image={{
            src: '/randomPics/pic1.jpg',
            position: 'left' ,
            alt: 'randompic',
            size: {x:600, y:300}
          }}
         />

      </Section>
 
    </div>
  )
}

export default NewNumber