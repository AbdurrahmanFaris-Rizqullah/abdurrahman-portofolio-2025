import Navbar from "@/components/Navbar";
import ClientHero from "@/components/ClientHero";
import ClientAbout from "@/components/ClientAbout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ClientHero />
      <ClientAbout />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}
