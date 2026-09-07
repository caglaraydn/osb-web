import { eventCities, type EventCity } from '@/mocks/events';

const cityImages: Record<string, string> = {
  Bursa: 'https://readdy.ai/api/search-image?query=Bursa%20cityscape%20at%20night%20with%20modern%20industrial%20district%2C%20modern%20city%20lights%20reflecting%20on%20streets%2C%20clean%20urban%20skyline%20with%20mountains%20in%20background%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=400&height=250&seq=event-bursa&orientation=landscape&nocache=true',
  İzmir: 'https://readdy.ai/api/search-image?query=Izmir%20cityscape%20at%20night%20with%20modern%20waterfront%20and%20harbor%20district%2C%20modern%20city%20lights%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20Aegean%20sea%20reflection%2C%20dramatic%20sky&width=400&height=250&seq=event-izmir&orientation=landscape&nocache=true',
  Gebze: 'https://readdy.ai/api/search-image?query=Gebze%20organized%20industrial%20zone%20at%20dusk%20with%20modern%20high-tech%20buildings%20and%20illuminated%20factory%20facades%2C%20warm%20city%20lights%2C%20clean%20urban%20skyline%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=400&height=250&seq=event-gebze&orientation=landscape',
  Ankara: 'https://readdy.ai/api/search-image?query=Ankara%20cityscape%20at%20night%20with%20modern%20business%20and%20technology%20district%2C%20illuminated%20skyscrapers%20and%20industrial%20park%2C%20clean%20urban%20skyline%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=400&height=250&seq=event-ankara&orientation=landscape',
  Manisa: 'https://readdy.ai/api/search-image?query=Manisa%20organized%20industrial%20zone%20at%20dusk%20with%20modern%20manufacturing%20facilities%20and%20green%20energy%20plants%2C%20illuminated%20factory%20facades%20with%20warm%20city%20lights%2C%20clean%20urban%20skyline%20with%20mountains%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=400&height=250&seq=event-manisa&orientation=landscape',
  Adana: 'https://readdy.ai/api/search-image?query=Adana%20cityscape%20at%20night%20with%20modern%20industrial%20district%20along%20Seyhan%20river%2C%20illuminated%20factory%20facades%20and%20bridges%2C%20warm%20city%20lights%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=400&height=250&seq=event-adana&orientation=landscape',
};

function CityCard({ city }: { city: EventCity }) {
  return (
    <div className="group flex flex-col rounded-xl bg-background-50 border border-background-200/70 hover:border-primary-300 transition-all overflow-hidden">
      {/* Image */}
      <div className="relative h-36 md:h-40 overflow-hidden">
        <img
          src={cityImages[city.city]}
          alt={city.city}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {city.year === '2027' && (
          <span className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 bg-accent-500 text-background-50 text-[10px] font-bold rounded-full whitespace-nowrap">
            <i className="ri-calendar-event-line text-[11px]" />
            2027
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-3">
          {/* Date badge */}
          <div
            className={`shrink-0 w-12 h-12 md:w-14 md:h-14 ${
              city.year === '2027' ? 'bg-accent-500' : 'bg-primary-500'
            } rounded-lg flex flex-col items-center justify-center text-center px-1`}
          >
            {city.year === '2026' ? (
              <>
                <span className="text-background-50 font-bold text-sm md:text-base leading-none">
                  {city.dateShort?.split(' ')[0]}
                </span>
                <span className="text-background-50 text-[10px] md:text-xs font-medium uppercase leading-none mt-0.5">
                  {city.dateShort?.split(' ')[1]}
                </span>
              </>
            ) : (
              <span className="text-background-50 font-bold text-xs md:text-sm leading-tight text-center">
                {city.dateShort}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-heading text-base md:text-lg font-bold text-foreground-950">
              {city.city.toUpperCase()}
            </h3>
            {city.year !== '2027' && (
              <span className="text-xs text-foreground-500">{city.venue}</span>
            )}
            {city.year === '2027' && (
              <div className="flex items-center gap-1 text-xs text-accent-600 mt-1">
                <i className="ri-information-line text-[13px]" />
                Tarih yakında açıklanacak
              </div>
            )}
          </div>
        </div>
        <p className="text-xs md:text-sm text-foreground-600 line-clamp-3 mb-3 flex-1">
          {city.headline && (
            <span className="font-semibold text-foreground-800">{city.headline} </span>
          )}
          {city.description}
        </p>
        <a
          href={city.slug ? `/etkinlik/${city.slug}` : '/katilim-formu'}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
        >
          Detaylı Bilgi
          <i className="ri-arrow-right-line" />
        </a>
      </div>
    </div>
  );
}

export default function EventCalendar() {
  return (
    <section id="etkinlikler" className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex-1" />
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950 text-center">
            ETKİNLİK TAKVİMİ
          </h2>
          <div className="flex-1 flex justify-end">
            <a
              href="/etkinlikler"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
            >
              Tüm Etkinlikleri Gör
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

        {/* Single list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {eventCities.map((city) => (
            <CityCard key={`${city.year}-${city.city}`} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}