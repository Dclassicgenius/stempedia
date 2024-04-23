import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="min-h-screen space-y-14">
      <Hero />
      <Explore />
      <News />
      <Services />
      <Explore />
    </main>
  );
}
