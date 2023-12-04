'use client'
import React, { useEffect, useState } from 'react'
import Hero from '../../components/global/Hero';
import ArchiveMagazinePreview from '../../components/ArchiveMagazinePreview';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
export const Archiv = () => {
  const [titles, setTitles] = useState<Array<string> |null>(null)
  useEffect(() => {

    const fetchArticles = async () => {
      try {
        const articlesCollection = collection(db, 'articleSummaries');
        const articlesSnapshot = await getDocs(articlesCollection);

        const titles = articlesSnapshot.docs.map((doc) => doc.data().title);
        setTitles(titles);
        console.log('set articles', titles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  // const contents1 = [
  //   'Lorem ipsum',
  //   'Dolor sit amet',
  //   'Consectetur',
  //   'Adipiscing elit',
  //   'Sed do eiusmod',
  //   'Lorem ipsum Lorem ipsum',
  //   'Dolor sit amet',
  //   'Consectetur',
  //   'Adipiscing elit',
  //   'Sed do eiusmod',
  //   'Consectetur',
  //   'Adipiscing elit',
  //   'Sed do eiusmod',
  // ];

  // const contents2 = [
  //   'Voluptate velit',
  //   'Esse cillum',
  //   'Fugiat nulla',
  //   'Pariatur',
  //   'Excepteur sint',
  // ];

  // const contents3 = [
  //   'Occaecat cupidatat',
  //   'Non proident',
  //   'Sunt in culpa',
  //   'Qui officia',
  //   'Deserunt mollit',
  // ];

  // const contents4 = [
  //   'Anim id est',
  //   'Laborum et',
  //   'Dolore magna',
  //   'Ut enim ad',
  //   'Minim veniam',
  // ];
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
          contents={titles }
        />
        <ArchiveMagazinePreview
          name={"Březen/Duben"}
          color="text-březen-color-2"
          border="border-březen-color-2"
          bgColor="bg-březen-color"
          pdfSrc={"březen-duben.pdf"}
          contents={titles}
        />
        <ArchiveMagazinePreview
          name={"Leden/Únor"}
          color="text-květen-color-2"
          border="border-květen-color-2"
          bgColor="bg-květen-color"
          pdfSrc={"leden-únor.pdf"}
          contents={titles}
        />
        <ArchiveMagazinePreview
          name={"Komiks"}
          color="black"
          border="border-black"
          bgColor="bg-stone-100"
          pdfSrc={"komiks.pdf"}
          contents={titles}
        />
      </div>
    </div>
  );
};
export default Archiv