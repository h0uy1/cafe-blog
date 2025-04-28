import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <section className="relative h-screen bg-cover bg-center bg-[url('/home.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Cozy Café</h1>
          <p className="text-xl mb-6">Brewed Fresh, Served with Love</p>
          <a href="#menu" className="bg-brown hover:bg-lightbrown px-6 py-3 rounded-full text-lg transition">View Menu</a>
        </div>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <Image src="/coffe.jpg" width={200} height={200} alt="Barista" className="rounded-xl shadow-lg"/>
          <p className="text-lg leading-relaxed">
            Since 2015, Cozy Café has been serving freshly brewed coffee, homemade pastries, and warm smiles in the heart of the city. Come relax, meet friends, and enjoy a cozy atmosphere made just for you.
          </p>
        </div>
      </section>
      <section id="menu" className="bg-orange-100 py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-8">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-2">Latte</h3>
            <p>$4.50 - Smooth espresso with steamed milk</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Cappuccino</h3>
            <p>$4.00 - Rich espresso topped with foamed milk</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Mocha</h3>
            <p>$5.00 - Espresso mixed with chocolate and milk</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Blueberry Muffin</h3>
            <p>$3.00 - Baked fresh daily with real blueberries</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Avocado Toast</h3>
            <p>$5.50 - Toasted bread topped with fresh avocado</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Herbal Tea</h3>
            <p>$3.50 - Relaxing blends of natural herbs</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Visit Us</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <iframe className="rounded-xl shadow-lg w-full md:w-1/2 h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59867.44423382608!2d-122.47879950884267!3d37.757760688702206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e1!3m2!1sen!2smy!4v1745823805166!5m2!1sen!2smy" allowFullScreen loading="lazy"></iframe>
          <div>
            <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
            <ul className="text-lg space-y-2">
              <li>Mon–Fri: 8:00 AM - 8:00 PM</li>
              <li>Sat–Sun: 9:00 AM - 6:00 PM</li>
              <li>Public Holidays: Closed</li>
            </ul>
            <p className="mt-4">123 Cozy St, Your City, Country</p>
          </div>
        </div>
      </section>
      <section className="bg-brown py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-8">Get in Touch</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg text-gray-800 bg-orange-50 " required/>
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg text-gray-800 bg-orange-50" required/>
          <textarea placeholder="Your Message" className="w-full p-4 rounded-lg text-gray-800 h-32 bg-orange-50" required></textarea>
          <div className="text-center">
            <button type="submit" className="text-white font-semibold px-6 py-3 rounded-full hover:bg-cream transition bg-[#A4B465] hover:bg-[#626F47]">Send Message</button>
          </div>
        </form>
      </section>
      <footer className=" py-6 text-center">
        <p>&copy; 2025 Cozy Café. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <a href="#" className="hover:text-gray-300">Facebook</a>
        </div>
      </footer>
    </div>
  );
}
