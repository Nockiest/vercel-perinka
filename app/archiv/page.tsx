import React from 'react'
import Hero from '../../components/global/Hero';
import ArchiveMagazinePreview from '../../components/ArchiveMagazinePreview';
export const Archiv = () => {
  return (
    <div>
      <Hero firstHeading={"STÁRÁ ČÍSLA"} secondHeading={"STÁRÁ ČÍSLA"} />
      <div className="grid grid-cols-1 lg:grid-cols-2      ">
        <ArchiveMagazinePreview
          name={"Květen/Červen"}
          color="text-leden-color-2"
          border="border-leden-color-2"
          bgColor="bg-leden-color"
          pdfSrc={"květen-červen.pdf"}
        />
        <ArchiveMagazinePreview
          name={"Březen/Duben"}
          color="text-březen-color-2"
          border="border-březen-color-2"
          bgColor="bg-březen-color"
          pdfSrc={"březen-duben.pdf"}
        />
        <ArchiveMagazinePreview
          name={"Leden/Únor"}
          color="text-květen-color-2"
          border="border-květen-color-2"
          bgColor="bg-květen-color"
          pdfSrc={"leden-únor.pdf"}
        />
         <ArchiveMagazinePreview
          name={"Komiks"}
          color="text-květen-color-2"
          border="border-květen-color-2"
          bgColor="bg-květen-color"
          pdfSrc={"komiks.pdf"}
        />
      </div>
    </div>
  );
};
export default Archiv