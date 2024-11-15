import Image from "next/image";
import Separator from "./Components/Separator";
import Navbar from "./Navbar";
import Artists from "./Sections/Artists";
import Collections from "./Sections/Collections";
import Header from "./Sections/Header";
import HowItWorks from "./Sections/HowItWorks";
import Indicators from "./Sections/Indicators";
import Newsletter from "./Sections/Newsletter";
import Partners from "./Sections/Partners";
import Roadmap from "./Sections/Roadmap";
import Why from "./Sections/Why";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-6xl">
        <Navbar/>
        <Header/>
        <Partners/>
        <Separator/>
        <Collections/>
        <Separator/>
        <Why/>
        <Separator/>
        <Indicators/>
        <Separator/>
        <HowItWorks/>
        <Separator/>
        <Newsletter/>
        <Separator/>
        <Roadmap/>
        <Separator/>
        <Artists/>
        <Separator/>
      </div>
    </main>
  );
}
