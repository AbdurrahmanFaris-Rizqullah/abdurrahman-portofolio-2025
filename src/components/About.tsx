const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Tentang Saya</h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
          <p>Seorang Backend Developer dengan pengalaman 3 tahun dalam pengembangan sistem dan API yang scalable. Memiliki keahlian dalam merancang arsitektur backend yang efisien dan aman.</p>
          <p>Saya memiliki passion dalam memecahkan masalah kompleks dan mengoptimalkan performa sistem. Selalu mengikuti best practices dan tren terbaru dalam pengembangan backend.</p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Pengalaman Kerja</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-white font-medium">Senior Backend Developer - Tech Corp</div>
                <div className="text-sm text-gray-400">2021 - Sekarang</div>
                <p className="mt-2">Mengembangkan dan memelihara mikroservis menggunakan Node.js dan Python. Mengoptimalkan performa database dan API.</p>
              </li>
              <li>
                <div className="text-white font-medium">Backend Developer - Startup XYZ</div>
                <div className="text-sm text-gray-400">2019 - 2021</div>
                <p className="mt-2">Membangun RESTful API dan sistem autentikasi. Implementasi payment gateway dan integrasi third-party API.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
