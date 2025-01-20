import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background dengan gradient dan pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      Konten
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image dengan efek glow dan animasi */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            {/* Outer glow ring dengan animasi */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-50 blur-lg animate-pulse" />
            
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full animate-spin-slow">
              <div className="h-full w-full rounded-full border-4 border-transparent" 
                style={{background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #3B82F6, #A855F7, #3B82F6) border-box'}} />
            </div>

            {/* Profile image container */}
            <div className="relative w-full h-full rounded-full p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                <Image 
                  src="/profile.jpg" 
                  alt="Abdurrahman Faris Rizqullah" 
                  width={192} 
                  height={192} 
                  className="rounded-full object-cover hover:scale-110 transition-transform duration-500"
                  priority 
                />
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -inset-8 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Abdurrahman Faris Rizqullah</h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-xl text-gray-300 flex items-center gap-2">
              <span className="text-blue-500">👨‍💻</span>
              Backend Developer
            </div>
            <div className="text-xl text-gray-300 flex items-center gap-2">
              <span className="text-purple-500">🎓</span>
              Informatics Student
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">6th semester Informatics undergraduate student at Institut Teknologi Sains dan Kesehatan Rumah Sakit dr. Soepraoen Kesdam V/BRW Malang</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full 
                font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300
                shadow-lg shadow-blue-500/25"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800/50 text-white rounded-full font-semibold
                border-2 border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/AbdurrahmanFaris-Rizqullah" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/abdurrahman-faris-rizqullah-4612a303/" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
