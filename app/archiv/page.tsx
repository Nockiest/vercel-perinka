import React from 'react'
import Hero from '../../components/global/Hero';
import ArchiveMagazinePreview from '../../components/ArchiveMagazinePreview';
export const Archiv = () => {
  const contents1 = [
    'Lorem ipsum',
    'Dolor sit amet',
    'Consectetur',
    'Adipiscing elit',
    'Sed do eiusmod',
    'Lorem ipsum Lorem ipsum',
    'Dolor sit amet',
    'Consectetur',
    'Adipiscing elit',
    'Sed do eiusmod',
    'Consectetur',
    'Adipiscing elit',
    'Sed do eiusmod',
  ];

  const contents2 = [
    'Voluptate velit',
    'Esse cillum',
    'Fugiat nulla',
    'Pariatur',
    'Excepteur sint',
  ];

  const contents3 = [
    'Occaecat cupidatat',
    'Non proident',
    'Sunt in culpa',
    'Qui officia',
    'Deserunt mollit',
  ];

  const contents4 = [
    'Anim id est',
    'Laborum et',
    'Dolore magna',
    'Ut enim ad',
    'Minim veniam',
  ];
  return (
    <div>
      <Hero firstHeading={"STÁRÁ ČÍSLA"} secondHeading={"STÁRÁ ČÍSLA"} />
      <div className="grid grid-cols-1">
        <ArchiveMagazinePreview
          name={"Květen/Červen"}
          color="text-leden-color-2"
          border="border-leden-color-2"
          bgColor="bg-leden-color"
          pdfSrc={"květen-červen.pdf"}
          contents={contents1}
        />
        <ArchiveMagazinePreview
          name={"Březen/Duben"}
          color="text-březen-color-2"
          border="border-březen-color-2"
          bgColor="bg-březen-color"
          pdfSrc={"březen-duben.pdf"}
          contents={contents2}
        />
        <ArchiveMagazinePreview
          name={"Leden/Únor"}
          color="text-květen-color-2"
          border="border-květen-color-2"
          bgColor="bg-květen-color"
          pdfSrc={"leden-únor.pdf"}
          contents={contents3}
        />
        <ArchiveMagazinePreview
          name={"Komiks"}
          color="text-květen-color-2"
          border="border-květen-color-2"
          bgColor="bg-květen-color"
          pdfSrc={"komiks.pdf"}
          contents={contents4}
        />
      </div>
    </div>
  );
};
export default Archiv