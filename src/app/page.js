import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
