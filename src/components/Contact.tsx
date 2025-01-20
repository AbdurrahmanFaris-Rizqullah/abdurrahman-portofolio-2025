const Contact = () => {
  const contacts = [
    {
      title: "Email",
      value: "nugasriz03@gmail.com",
      icon: "📧",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=nugasriz03@gmail.com",
      color: "blue",
    },
    {
      title: "WhatsApp",
      value: "+62 85230184717",
      icon: "💬",
      link: "https://wa.me/6285230184717",
      color: "green",
    },
    {
      title: "LinkedIn",
      value: "abdurrahman-faris-rizqullah",
      icon: "💼",
      link: "https://www.linkedin.com/in/abdurrahman-faris-rizqullah-4612a303/",
      color: "purple",
    },
    {
      title: "GitHub",
      value: "AbdurrahmanFaris-Rizqullah",
      icon: "👨‍💻",
      link: "https://github.com/AbdurrahmanFaris-Rizqullah",
      color: "green",
    },
    {
      title: "Lokasi",
      value: "Kota Malang, Jawa Timur, Indonesia",
      icon: "📍",
      link: "https://maps.google.com/?q=Kota+Malang",
      color: "red",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Mari Terhubung</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6
                  transform hover:scale-[1.02] transition-all duration-300
                  hover:border-${contact.color}-500/50 group`}
              >
                {contact.link ? (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4">
                    <ContactContent contact={contact} />
                  </a>
                ) : (
                  <div className="flex items-start space-x-4">
                    <ContactContent contact={contact} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui WhatsApp atau email.</p>
            <a
              href="https://wa.me/6285230184717"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg 
                py-3 px-6 font-semibold hover:opacity-90 transition-opacity"
            >
              <span className="text-xl">💬</span>
              Chat via WhatsApp
            </a>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-400">
            <p>© 2024 Abdurrahman Faris Rizqullah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen untuk konten kartu kontak
const ContactContent = ({ contact }: { contact: any }) => (
  <>
    <span className="text-3xl">{contact.icon}</span>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{contact.title}</h3>
      <p className="text-gray-400">{contact.value}</p>
    </div>
    {contact.link && <span className="text-gray-400 group-hover:text-blue-400 transition-colors">→</span>}
  </>
);

export default Contact;
