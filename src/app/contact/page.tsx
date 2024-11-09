import Link from 'next/link';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2c3e50] py-28 px-8 flex justify-center text-white">
      <div className="max-w-6xl w-full bg-[#34495e] p-8 rounded-lg shadow-xl flex gap-12 flex-col md:flex-row">
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-[#ecf0f1] mb-8">Get in Touch</h1>

          <div className="mb-8">
            <p className="text-lg text-[#bdc3c7] mb-6">Feel free to reach out to me via email, phone, or through my social media accounts. I&apos;d love to hear from you!</p>
          </div>

          <div className="text-lg space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-[#f39c12]">&#9993;</span>
              <a href="mailto:yourname@example.com" className="hover:underline text-[#ecf0f1]">
                wasifsoomro761@.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#f39c12]">&#9742;</span>
              <Link href="tel:+1234567890" className="hover:underline text-[#ecf0f1]">
                +92 304 9830799
              </Link>
            </div>

            <div className="mt-8 flex gap-6">
              <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213" className="text-[#f39c12] hover:text-[#e67e22]" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
              <Link href="https://github.com/wasifsoomro" className="text-[#f39c12] hover:text-[#e67e22]" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
              <Link href="https://x.com/M_WasifSoomro" className="text-[#f39c12] hover:text-[#e67e22]" target="_blank" rel="noopener noreferrer">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#2c3e50] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#ecf0f1] mb-6">Get In Touch</h2>
          <form action="mailto:yourname@example.com" method="POST" encType="text/plain" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-[#bdc3c7]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 bg-[#34495e] text-[#ecf0f1] rounded-lg border border-[#bdc3c7] focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-[#bdc3c7]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 bg-[#34495e] text-[#ecf0f1] rounded-lg border border-[#bdc3c7] focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-[#bdc3c7]">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-4 bg-[#34495e] text-[#ecf0f1] rounded-lg border border-[#bdc3c7] focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#f39c12] text-white px-6 py-3 rounded-lg hover:bg-[#e67e22] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
