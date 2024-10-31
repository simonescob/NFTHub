import Image from "next/image";
import Separator from "./Components/Separator";
import Navbar from "./Navbar";
import Collections from "./Sections/Collections";
import Header from "./Sections/Header";
import Partners from "./Sections/Partners";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-6xl">
        <Navbar/>
        <Header/>
        <Partners/>
        <Separator/>
        <Collections/>
      </div>
    </main>
  );
}
