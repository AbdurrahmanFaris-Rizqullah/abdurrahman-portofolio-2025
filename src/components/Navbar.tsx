"use client";

const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={(e) => scrollToSection(e, "hero")} className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
            Abdurrahman Faris Rizqullah
          </a>
          <div className="hidden md:flex space-x-8">
            {[
              { href: "#about", label: "Tentang" },
              { href: "#skills", label: "Keahlian" },
              { href: "#certificates", label: "Sertifikasi" },
              { href: "#projects", label: "Proyek" },
              { href: "#contact", label: "Kontak" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollToSection(e, href.slice(1))}
                className="text-gray-300 hover:text-white relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
