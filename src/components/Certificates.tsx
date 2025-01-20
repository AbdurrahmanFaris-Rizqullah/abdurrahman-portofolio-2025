const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      imageUrl: "/certificates/aws-cert.png", // Tambahkan gambar sertifikat
      verifyLink: "https://aws.amazon.com/verify",
    },
    {
      id: 2,
      name: "Node.js Advanced Developer",
      issuer: "OpenJS Foundation",
      date: "2023",
      credentialId: "NODE-789012",
      imageUrl: "/certificates/nodejs-cert.png",
      verifyLink: "https://certification.nodejs.org",
    },
    {
      id: 3,
      name: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-345678",
      imageUrl: "/certificates/mongodb-cert.png",
      verifyLink: "https://university.mongodb.com/verify",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Sertifikasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-video relative">
                {/* Gambar sertifikat */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{cert.issuer}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <div className="text-gray-400 text-sm mb-4">
                  <p>Diterbitkan: {cert.date}</p>
                  <p>Credential ID: {cert.credentialId}</p>
                </div>
                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Verifikasi Sertifikat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
