import { sponsors } from '@/mocks/sponsors';

export default function Sponsors() {
  const featured = sponsors.slice(0, 2);
  const others = sponsors.slice(2);

  return (
    <section id="cozum-ortaklari" className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex-1" />
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950 text-center">
            ÇÖZÜM ORTAKLARIMIZ
          </h2>
          <div className="flex-1 flex justify-end" />
        </div>

        {/* Featured row - first two logos */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 md:mb-8">
          {featured.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl bg-background-50 border border-background-200/70 hover:border-primary-300 p-4 md:p-6 h-24 md:h-32 w-48 md:w-64 transition-all"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 md:max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Other sponsors - single row below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {others.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl bg-background-50 border border-background-200/70 hover:border-primary-300 p-3 md:p-4 h-20 md:h-24 transition-all"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-10 md:max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}