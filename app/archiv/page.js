import React from 'react'
import Hero from '@/components/Hero'
import ArchiveMagazinePreview from '@/components/ArchiveMagazinePreview'
export const Archiv = () => {
  return (
    <div>
        <Hero firstHeading={"STÁRÁ ČÍSLA"} secondHeading={"STÁRÁ ČÍSLA"}  d/>
        <ArchiveMagazinePreview name={"Květen/Červen"}color="text-pink-400" border="border-pink-400" pdfSrc={"květen-červen.pdf"} />
        <ArchiveMagazinePreview name={"Břetzen/Duben"}color="text-red-400" border="border-red-400" bgColor="bg-red-100" pdfSrc={"březen-duben.pdf"} />
        <ArchiveMagazinePreview name={"Leden/Únor"}color="text-blue-400" border="border-blue-400" pdfSrc={"leden-únor.pdf"}/>
    </div>
  )
}
export default Archiv