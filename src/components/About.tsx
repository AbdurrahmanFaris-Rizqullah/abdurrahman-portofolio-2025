const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Tentang Saya</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-12 transform hover:scale-[1.02] transition-all">
            <p className="text-lg text-gray-300 leading-relaxed">
              Saya adalah mahasiswa semester 6 Informatika di Institut Teknologi Sains dan Kesehatan RS dr. Soepraoen Kesdam V/BRW Malang, dengan passion di Backend Development dan ketertarikan kuat dalam menciptakan sistem yang efisien dan
              scalable.
            </p>
          </div>

          {/* Experience Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="text-blue-500 text-2xl mr-3">💼</span>
                Pengalaman Kerja
              </h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-white font-medium">Junior Backend Programmer</div>
                  <div className="text-blue-400 text-sm mb-1">PT. Multi Solusindo (Urbansofv)</div>
                  <div className="text-gray-400 text-sm mb-2">Oct 2024 - Dec 2024</div>
                  <p className="text-gray-300">Mengembangkan sistem monitoring menggunakan JavaScript (Next.js, Express.js) dan Python (FlaskAPI, FastAPI), mengintegrasikan fitur monitoring dan workflow machine learning.</p>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-white font-medium">Co-Founder</div>
                  <div className="text-blue-400 text-sm mb-1">Creative Agency "M4ime"</div>
                  <div className="text-gray-400 text-sm mb-2">Apr 2024 - Present</div>
                  <p className="text-gray-300">Berkontribusi sebagai co-founder dalam pendirian agensi kreatif ini, membantu mendefinisikan model bisnis dan penawaran layanan.</p>
                </div>
              </div>
            </div>

            {/* Organizations */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="text-purple-500 text-2xl mr-3">🎯</span>
                Organisasi
              </h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-purple-500">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-white font-medium">Head Of PR</div>
                  <div className="text-purple-400 text-sm mb-1">Himpunan Mahasiswa Informatika ITSK RS dr.Soepraoen</div>
                  <div className="text-gray-400 text-sm mb-2">Oct 2022 - Oct 2024</div>
                  <p className="text-gray-300">Mengkoordinasikan produksi video, desain, dan dokumentasi untuk Himpunan Mahasiswa, menghasilkan 10+ proyek per semester dengan tingkat kepuasan 90% dari stakeholder.</p>
                </div>

                <div className="relative pl-6 border-l-2 border-purple-500">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-white font-medium">Member</div>
                  <div className="text-purple-400 text-sm mb-1">IN CRUST WE RUSH Community</div>
                  <div className="text-gray-400 text-sm mb-2">Jun 2023 - Present</div>
                  <p className="text-gray-300">Berkontribusi dalam pengembangan modul ethical hacking dan cybersecurity, meningkatkan sumber daya edukasi untuk anggota komunitas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
