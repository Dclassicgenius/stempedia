import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import News from "@/components/News";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen space-y-7">
      <Hero />
      <Explore />
      <News />
      <Services />
      <Explore />
    </main>
  );
}
