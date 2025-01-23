import Navbar from "@/components/navigation/Navbar";
import ClientHero from "@/components/client/ClientHero";
import ClientAbout from "@/components/client/ClientAbout";
import ClientProjects from "@/components/client/ClientProjects";
import ClientSkills from "@/components/client/ClientSkills";
import ClientCertificate from "@/components/client/ClientCertificate";
import ClientContact from "@/components/client/ClientContact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ClientHero />
      <ClientAbout />
      <ClientSkills />
      <ClientCertificate />
      <ClientProjects />
      <ClientContact />
    </main>
  );
}
