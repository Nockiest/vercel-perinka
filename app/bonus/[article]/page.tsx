"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import BigGallery from "../../../components/bonuspagecomponents/BigGallerry";
import BonusPost from "../../../components/bonuspagecomponents/BonusPost";
export type URLwithAlt = {
  src: string;
  alt: string;
};
type BonusPost = {
  reversed?: boolean;
  title: string;
  textContent: string;
  imageContent: Array<URLwithAlt>;
  author: string;
};
const contents: Array<BonusPost> = [
  {
    reversed: false,
    title: 'Letní filmy',
    textContent: `
    <h3><strong>1. Jumanji: Dobrodružství v Hře</strong></h3>
    <p>Pokud máte rádi akční filmy, první díl Jumanji je pro vás ideální letní volbou. Martha, Bethany, Spencer a Fridge se ocitnou uvězněni ve hře Jumanji a musí plnit úkoly s omezeným počtem životů. I když mě film z počátku moc nezaujal, rozhodla jsem se mu dát šanci a nelitovala jsem. Několik scén mě opravdu velmi pobavilo.</p>

    <h3><strong>2. Avatar: Epické Putování na Planetě Pandora</strong></h3>
    <p>Dvoudílný film Avatar je skvělou volbou pro milovníky sci-fi a fantasy. Kmen Na’vi bojuje o svou planetu Pandoru s lidmi z Země. Originální děj a úžasná tvorba planety a jejích obyvatelů zaručují velký úspěch. Film sice může odradit délkou, ale zejména druhý díl obsahuje pár zbytečných minut.</p>

    <h3><strong>3. Rychlý jako Vítr: Příběh o Lásce k Koním</strong></h3>
    <p>Milovníci koní si jistě oblíbí tento příběh. Mika, poslaná na farmu k babičce, objeví hřebce Vichr. I když ho nikdo nedokázal zkrotit, Mika je výjimka. Film je napínavý s promyšleným příběhem a krásným prostředím. Jediné, co bych vytkla, je nekonzistence v překladu jména koně, které se mění v každém dílu.</p>

    <h3><strong>4. Piráti z Karibiku: Na Vlnách Podivna</strong></h3>
    <p>Jack Sparrow se vydává do Londýna zachránit přítele Gibbse, ale je zatčen britským králem. Ten ho přinutí získat Pramen mládí a přidat se k posádce lodi Pomsta královny Anny. Film nabízí akční, vtipné i napínavé scény a přináší skvělé dobrodružství na moři.</p>  `,

    imageContent: [
      { src: "/svg/instagram.svg", alt: "Image X" },
      { src: "/logo/logo copy.png", alt: "Image Y" },
      { src: "/logo/logofull.png", alt: "Image Z" },
      { src: "/svg/instagram.svg", alt: "Image Z" },
      { src: "/logo/logo copy.png", alt: "Image Z" },
      { src: "/randomPics/pic1.jpg", alt: "Image X" },
    ],
    author: 'Valérie Swaczynová, 1.E'
  },
  {
    textContent: "y",
    title: 'LIHIVY',
    imageContent: [
      { src: "/randomPics/pic1.jpg", alt: "Image X" },
      { src: "/logo/logo copy.png", alt: "Image Y" },
      { src: "/logo/logofull.png", alt: "Image Z" },
    ],
    author: 'Ester Zientková, 7.C'
  },
];

function Article() {
  const [showFullScreenGallery, setShowFullScreenGallery] = useState(false);
  const router = useRouter();
  const [selectedArticle, setSelectedArticle] = useState<BonusPost | null>(
    null
  );
  const pathname = usePathname();

  // Sync the state with the URL when the component mounts or when the URL changes
  useEffect(() => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    if (lastSegment && typeof Number(lastSegment) === "number") {
      setSelectedArticle(contents[Number(lastSegment)]);
    }
  }, [router]);

  const closeFullScreenGallery = () => {
    setShowFullScreenGallery(false);
  };

  if (!selectedArticle) {
    return <></>;
  }

  return (
    <div>
      {showFullScreenGallery ? (
        <BigGallery
          pics={selectedArticle.imageContent}
          closeFullScreenGallery={closeFullScreenGallery}
        />
      ) : (
        <>
          <button
            className="z-10 btn background-primary-100"
            onClick={() => alert("hello")}
          >
            OHODNOTIT
          </button>
          <BonusPost
            title={selectedArticle.title}
            reversed={selectedArticle?.reversed || false}
            pictures={selectedArticle?.imageContent}
            setShowFullScreenGallery={setShowFullScreenGallery}
            textContent={selectedArticle.textContent}
            author={selectedArticle.author}
          />
        </>
      )}
    </div>
  );
}
export default Article;
