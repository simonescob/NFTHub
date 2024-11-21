import Image from "next/image";
import DarkModeTrigger from "./Components/DarkModeTrigger";
import Separator from "./Components/Separator";
import Navbar from "./Components/Navbar";
import Artists from "./Sections/Artists";
import Collections from "./Sections/Collections";
import Footer from "./Sections/Footer";
import GetStart from "./Sections/GetStart";
import Header from "./Sections/Header";
import HowItWorks from "./Sections/HowItWorks";
import Indicators from "./Sections/Indicators";
import Newsletter from "./Sections/Newsletter";
import Partners from "./Sections/Partners";
import Questions from "./Sections/Questions";
import Roadmap from "./Sections/Roadmap";
import Why from "./Sections/Why";

// bg-[#0F051D]

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <DarkModeTrigger/>
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
        <Questions/>
        <Separator/>
      </div>
      <GetStart/>
      <Footer/>
    </main>
  );
}
