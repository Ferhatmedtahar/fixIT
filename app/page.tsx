import Contact from "@/modules/Contact ";
import Faq from "@/modules/Faq";
import Hero from "@/modules/Hero";
import Location from "@/modules/Location";
import Services from "@/modules/Services";

export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col ">
      <Hero />
      <Services />
      <Location />
      <Faq />
      <Contact />
    </main>
  );
}
