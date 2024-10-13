import Image from "next/image";
import Navbar from "./Navbar";
import Header from "./Sections/Header";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-6xl">
        <Navbar/>
        <Header/>
      </div>
    </main>
  );
}
