const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Hubungi Saya</h2>
        <div className="max-w-xl mx-auto">
          <div className="grid gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300">
                your.email@example.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                linkedin.com/in/yourusername
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                github.com/yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
