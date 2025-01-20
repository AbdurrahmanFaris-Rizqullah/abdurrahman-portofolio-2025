const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img src="/images/profile/avatar.jpg" alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg" />
        </div>
        <h1 className="mb-6 text-5xl font-bold text-white">Abdurrahman Faris Rizqullah</h1>
        <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto">6th semester Informatics undergraduate student at Institut Teknologi Sains dan Kesehatan Rumah Sakit dr. Soepraoen Kesdam V/BRW Malang</p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
            Lihat Proyek
          </a>
          <a href="#contact" className="rounded-full border-2 border-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-600/10">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
