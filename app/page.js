import Image from "next/image";
import Hero from "../components/Hero";
import PageDescripiton from "@/components/home/PageDescripiton";
import CTA from "@/components/home/CTA";

export default function Home() {
  return  <main>
 
      <Hero firstHeading={" STUDENTSKÝ<br />ČASOPIS"} secondHeading={"GYMNÁZIUM OPATOV"}
      showReadButton={true} />
      <PageDescripiton />
      <CTA />
    
    </main>
}
 