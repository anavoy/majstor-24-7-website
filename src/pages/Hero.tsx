import { useEffect, useState } from 'react'; // treba i useState

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    };

    checkMobile();
  }, []);

  return (
    <section
      id="hero"
      className="bg-light flex flex-col items-center justify-center text-center py-20"
    >
      <h1 className="text-5xl font-bold mb-4">Majstorske Usluge</h1>
      <p className="text-lg mb-6">Pouzdano. Brzo. Profesionalno.</p>

      <a
        href="tel:+381601234567"
        id="phone-link"
        className="relative group bg-blue-800 text-white font-semibold py-3 px-6 rounded hover:bg-blue-900 transition"
      >
        Kontaktirajte nas
        {!isMobile && (
          <span className="absolute top-full  left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block text-sm text-black font-normal whitespace-nowrap">
            +381 60 1234567
          </span>
        )}
      </a>
    </section>
  );
}
