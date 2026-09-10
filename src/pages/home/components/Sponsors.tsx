import { sponsors } from '@/mocks/sponsors';
import SponsorLogo from './SponsorLogo';

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

        {/* Featured row - first two */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-5 md:mb-7">
          {featured.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl bg-background-100 border border-background-200/70 hover:border-primary-300 px-6 md:px-10 h-24 md:h-32 w-full sm:w-64 md:w-72 transition-colors"
            >
              <SponsorLogo logo={sponsor.logo} name={sponsor.name} variant="featured" invert={sponsor.invert} />
            </a>
          ))}
        </div>

        {/* Others - aligned grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {others.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl bg-background-100 border border-background-200/70 hover:border-primary-300 px-3 py-3 h-20 md:h-24 transition-colors"
            >
              <SponsorLogo
                logo={sponsor.logo}
                name={sponsor.name}
                variant={sponsor.name === 'BIFF Digital' ? 'compact-large' : 'compact'}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}