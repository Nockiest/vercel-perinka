"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import BigGallery from "../../../components/bonuspagecomponents/BigGallerry";
import BonusPost from "../../../components/bonuspagecomponents/BonusPost";
import ShareBtn from "../../../components/buttons/ShareBtn";
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
    title: "Letní filmy",
    textContent: `
    <h2><strong>1. Jumanji: Dobrodružství v Hře</strong></h2>
    <p>Pokud máte rádi akční filmy, první díl Jumanji je pro vás ideální letní volbou. Martha, Bethany, Spencer a Fridge se ocitnou uvězněni ve hře Jumanji a musí plnit úkoly s omezeným počtem životů. I když mě film z počátku moc nezaujal, rozhodla jsem se mu dát šanci a nelitovala jsem. Několik scén mě opravdu velmi pobavilo.</p>

    <h2><strong>2. Avatar: Epické Putování na Planetě Pandora</strong></h2>
    <p>Dvoudílný film Avatar je skvělou volbou pro milovníky sci-fi a fantasy. Kmen Na’vi bojuje o svou planetu Pandoru s lidmi z Země. Originální děj a úžasná tvorba planety a jejích obyvatelů zaručují velký úspěch. Film sice může odradit délkou, ale zejména druhý díl obsahuje pár zbytečných minut.</p>

    <h2><strong>3. Rychlý jako Vítr: Příběh o Lásce k Koním</strong></h2>
    <p>Milovníci koní si jistě oblíbí tento příběh. Mika, poslaná na farmu k babičce, objeví hřebce Vichr. I když ho nikdo nedokázal zkrotit, Mika je výjimka. Film je napínavý s promyšleným příběhem a krásným prostředím. Jediné, co bych vytkla, je nekonzistence v překladu jména koně, které se mění v každém dílu.</p>

    <h2><strong>4. Piráti z Karibiku: Na Vlnách Podivna</strong></h2>
    <p>Jack Sparrow se vydává do Londýna zachránit přítele Gibbse, ale je zatčen britským králem. Ten ho přinutí získat Pramen mládí a přidat se k posádce lodi Pomsta královny Anny. Film nabízí akční, vtipné i napínavé scény a přináší skvělé dobrodružství na moři.</p>  `,

    imageContent: [
      { src: "/svg/instagram.svg", alt: "Image X" },
      { src: "/logo/logo copy.png", alt: "Image Y" },
      { src: "/logo/logofull.png", alt: "Image Z" },
      { src: "/svg/instagram.svg", alt: "Image Z" },
      { src: "/logo/logo copy.png", alt: "Image Z" },
      { src: "/randomPics/pic1.jpg", alt: "Image X" },
    ],
    author: "Valérie Swaczynová, 1.E",
  },
  {
    textContent: `Jedním (respektive dvěma) z výjezdů, které naše škola pořádá, jsou LiHiVy a ZeCheBi čili Literárně-historicko-výtvarný a Zeměpisno-chemicko-biologický výjezd. Zní to možná děsivě, ale já se vás pokusím přesvědčit, že tato septimová akce opravdu stojí za to.

    Prvním úkolem je vybrat si, na který z výjezdů pojedete. Já osobně jsem si vybrala LiHiVy, protože preferuji návštěvy zámků, hradů a podobně před bádáním v přírodě. Lidé se ale často řídí nejen náplní kurzu, ale i tím, kdo z jejich přátel (případně z kantorů) pojede. To rozhodně není špatně a v žádném případě to není tak, že pokud maturujete z OSZ a dějepisu, nesmíte jet na ZeCheBi nebo naopak. Jak jsem nicméně zmínila, mou volbou byly LiHiVy, a proto bych ráda napsala něco o nich.

    Kurz trval dohromady 5 dní, z toho jsme čtyři strávili na Kutnohorsku a jeden v Praze. Bylo nás asi 40 čili polovina ročníku a musím říct, že to je ideální počet. Dokázali jsme tak například každý den sestavit dva volejbalové týmy, ale na druhou stranu jsme se vešli k táboráku i do vlaku. Velkou část dne jsme navíc netrávili se všemi dalšími spolužáky, ale v malých skupinkách, ve kterých jsme se věnovali fotoprojektu od pana profesora Šacha. Naším úkolem bylo během pobytu pořídit 6-10 fotografií tiskové kvality, a to na konkrétní téma (na výběr bylo např. z cedulí či dopravních prostředků). Pokud jsme zrovna čas netrávili právě plněním tohoto úkolu nebo na dobrém obědě, procházeli jsme si např. Kostnici či zámek Zruč nad Sázavou.

    LiHiVy se letos opravdu vydařily, o čemž doufám svědčí i mé přiložené fotografie (jejich autorem jsem já, popř. paní prof. Lukášová).`,
    title: "LIHIVY",
    imageContent: [
      { src: "/randomPics/pic1.jpg", alt: "Image X" },
      { src: "/logo/logo copy.png", alt: "Image Y" },
      { src: "/logo/logofull.png", alt: "Image Z" },
    ],
    author: "Ester Zientková, 7.C",
    reversed: true
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
          <div className="flex flex-row  ">
            <ShareBtn />
            {/* <button className="action-button">SDÍLET</button> */}
          </div>


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
