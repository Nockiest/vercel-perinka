import React from 'react'
import Hero from '@/components/Hero'
import ArchiveMagazinePreview from '@/components/ArchiveMagazinePreview'
export const Archiv = () => {
  return (
    <div>
        <Hero firstHeading={"STÁRÁ ČÍSLA</br> STUDENTSKÉHO ČASOPISU"} secondHeading={""} />
        <ArchiveMagazinePreview color="text-pink-400" border="border-pink-400"/>
        <ArchiveMagazinePreview color="text-red-400" border="border-red-400" bgColor="bg-red-100" />
        <ArchiveMagazinePreview color="text-blue-400" border="border-blue-400"/>
    </div>
  )
}
export default Archiv