import Image from "next/image";
import Hero from "../components/Hero";
import PageDescripiton from "@/components/PageDescripiton";
import CTA from "@/components/CTA";

export default function Home() {
  return  <main>
 
      <Hero firstHeading={" STUDENTSKÝ<br />ČASOPIS"} secondHeading={"GYMNÁZIUM OPATOV"}
      showReadButton={true} />
      <PageDescripiton />
      <CTA />
    
    </main>
}
  {/* <h1  >Heading 1</h1>
      <h2 > Heading 2</h2>
      <h3  >Heading 3</h3>
      <h4  >Heading 4</h4>
      <h5  >Heading 5</h5>
      <h6  >Heading 6</h6>
<p  >This is a paragraph.</p>*/}