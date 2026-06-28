import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>


        <Footer />

    </>
  );
}
