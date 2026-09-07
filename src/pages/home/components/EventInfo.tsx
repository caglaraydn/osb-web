import { eventInfo, eventCities2027 } from '@/mocks/events';

export default function EventInfo() {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-900">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-3 py-1 bg-primary-500 text-background-50 text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
            Yaklaşan Etkinlik
          </span>
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50 mb-2 md:mb-3">
            {eventInfo.subtitle}
          </h2>
          <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed">
            {eventInfo.description}
          </p>
        </div>

        {/* Cities */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {eventCities2027.map((city) => (
            <div
              key={city.city}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-background-800/40 rounded-lg border border-background-700/30"
            >
              <i className="ri-map-pin-line text-primary-400 text-sm" />
              <span className="text-xs md:text-sm text-background-200 font-medium">{city.city}</span>
              <span className="text-[10px] text-background-400">{city.dateShort}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8 max-w-2xl mx-auto">
          {eventInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background-800/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-background-700/40"
            >
              <div className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-primary-400 mb-0.5 md:mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-background-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <a
          href={eventInfo.ctaUrl}
          className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-primary-500 text-background-50 font-semibold text-sm md:text-base rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
        >
          <i className="ri-checkbox-circle-line" />
          {eventInfo.ctaText}
        </a>
      </div>
    </section>
  );
}