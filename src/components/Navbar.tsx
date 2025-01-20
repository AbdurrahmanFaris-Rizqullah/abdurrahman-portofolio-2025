const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-white">DevPortfolio</span>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white">
              Tentang
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white">
              Keahlian
            </a>
            <a href="#certificates" className="text-gray-300 hover:text-white">
              Sertifikasi
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Proyek
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
