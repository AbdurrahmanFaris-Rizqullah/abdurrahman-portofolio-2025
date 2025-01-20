import Image from "next/image";

// Di bagian atas file, tambahkan type untuk color
type ContactColor = "blue" | "green" | "purple" | "gray" | "red";

// Data kontak dan gambar
const CONTACTS = [
  {
    title: "Email",
    value: "nugasriz03@gmail.com",
    iconUrl: "https://cdn.simpleicons.org/gmail/white",
    link: "mailto:nugasriz03@gmail.com",
    color: "blue" as ContactColor,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "WhatsApp",
    value: "+62 85230184717",
    iconUrl: "https://cdn.simpleicons.org/whatsapp/white",
    link: "https://wa.me/6285230184717",
    color: "green" as ContactColor,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "LinkedIn",
    value: "abdurrahman-faris-rizqullah",
    iconUrl: "https://cdn.simpleicons.org/linkedin/white",
    link: "https://www.linkedin.com/in/abdurrahman-faris-rizqullah-4612a303/",
    color: "purple" as ContactColor,
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    title: "GitHub",
    value: "AbdurrahmanFaris-Rizqullah",
    iconUrl: "https://cdn.simpleicons.org/github/white",
    link: "https://github.com/AbdurrahmanFaris-Rizqullah",
    color: "gray" as ContactColor,
    gradient: "from-gray-600 to-gray-500",
  },
  {
    title: "Lokasi",
    value: "Kota Malang, Jawa Timur, Indonesia",
    iconUrl: "https://cdn.simpleicons.org/googlemaps/white",
    link: "https://maps.google.com/?q=Kota+Malang",
    color: "red" as ContactColor,
    gradient: "from-red-500 to-rose-400",
  },
];

const ICWR_IMAGES = [
  {
    src: "/background/icwr.jpg",
    date: "18 Januari 2025",
    title: "Membangun Kesadaran Keamanan Siber di Era Digital",
    description: "Berbagi wawasan mendalam tentang pentingnya keamanan siber dan praktik terbaik dalam mengamankan data digital bersama mahasiswa UNIKAMA",
  },
  {
    src: "/background/icwr 2.JPG",
    date: "14 Juli 2024",
    title: "Testing Hacking bersama ICWR",
    description: "Sharing Pengetahuan Security Awareness bersama Aufklarung dari Universitas Muhammadiyah Malang",
  },
];

// Komponen untuk kartu kontak
const ContactCard = ({ contact }: { contact: (typeof CONTACTS)[0] }) => {
  const colorClasses: Record<ContactColor, string> = {
    blue: "text-blue-400 hover:text-blue-300",
    green: "text-green-400 hover:text-green-300",
    purple: "text-purple-400 hover:text-purple-300",
    gray: "text-gray-400 hover:text-gray-300",
    red: "text-red-400 hover:text-red-300",
  };

  return (
    <a href={contact.link} target="_blank" rel="noopener noreferrer" className="group relative">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.gradient} rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500`} />
      <div className="relative flex items-start space-x-4 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-transparent transform hover:scale-[1.02] transition-all duration-300">
        <div className="w-8 h-8 rounded-lg bg-gray-700/50 p-1.5 flex items-center justify-center group-hover:bg-gray-700/70 transition-colors duration-300">
          <img src={contact.iconUrl} alt={`${contact.title} icon`} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${colorClasses[contact.color]} mb-1`}>{contact.title}</h3>
          <p className="text-gray-300 group-hover:text-white transition-colors">{contact.value}</p>
        </div>
        <span className={`${colorClasses[contact.color]} group-hover:translate-x-1 transition-transform duration-300`}>→</span>
      </div>
    </a>
  );
};

// Komponen untuk galeri gambar
const ImageGallery = ({ image }: { image: (typeof ICWR_IMAGES)[0] }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
    <div className="relative rounded-2xl overflow-hidden bg-gray-800">
      <div className="relative aspect-video">
        <Image src={image.src} alt={image.title} fill className="object-cover transform group-hover:scale-110 transition duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-400">📅</span>
          <span className="text-blue-400 text-sm font-medium">{image.date}</span>
        </div>
        <p className="text-white text-xl font-medium mb-2">{image.title}</p>
        <p className="text-gray-300">{image.description}</p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Mari Terhubung</span>
        </h2>

        {/* ICWR Images Gallery */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ICWR_IMAGES.map((image, index) => (
              <ImageGallery key={index} image={image} />
            ))}
          </div>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTACTS.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui salah satu platform di atas.</p>
            <a
              href="https://wa.me/6285230184717"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              <img src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" className="w-6 h-6" />
              Chat via WhatsApp
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-gray-400">© 2024 Abdurrahman Faris Rizqullah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
