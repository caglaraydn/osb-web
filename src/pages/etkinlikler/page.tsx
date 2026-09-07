import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import { eventCities, eventInfo, type EventCity } from '@/mocks/events';
import { agenda } from '@/mocks/agenda';

const cityImages: Record<string, string> = {
  Bursa: 'https://readdy.ai/api/search-image?query=Bursa%20cityscape%20at%20night%20with%20modern%20industrial%20district%2C%20modern%20city%20lights%20reflecting%20on%20streets%2C%20clean%20urban%20skyline%20with%20mountains%20in%20background%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=800&height=450&seq=etkinlik-bursa&orientation=landscape',
  İzmir: 'https://readdy.ai/api/search-image?query=Izmir%20cityscape%20at%20night%20with%20modern%20waterfront%20and%20harbor%20district%2C%20modern%20city%20lights%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20Aegean%20sea%20reflection%2C%20dramatic%20sky&width=800&height=450&seq=etkinlik-izmir&orientation=landscape',
  Gebze: 'https://readdy.ai/api/search-image?query=Gebze%20organized%20industrial%20zone%20at%20dusk%20with%20modern%20high-tech%20buildings%20and%20illuminated%20factory%20facades%2C%20warm%20city%20lights%2C%20clean%20urban%20skyline%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=800&height=450&seq=etkinlik-gebze&orientation=landscape',
  Ankara: 'https://readdy.ai/api/search-image?query=Ankara%20cityscape%20at%20night%20with%20modern%20business%20and%20technology%20district%2C%20illuminated%20skyscrapers%20and%20industrial%20park%2C%20clean%20urban%20skyline%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=800&height=450&seq=etkinlik-ankara&orientation=landscape',
  Manisa: 'https://readdy.ai/api/search-image?query=Manisa%20organized%20industrial%20zone%20at%20dusk%20with%20modern%20manufacturing%20facilities%20and%20green%20energy%20plants%2C%20illuminated%20factory%20facades%20with%20warm%20city%20lights%2C%20clean%20urban%20skyline%20with%20mountains%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=800&height=450&seq=etkinlik-manisa&orientation=landscape',
  Adana: 'https://readdy.ai/api/search-image?query=Adana%20cityscape%20at%20night%20with%20modern%20industrial%20district%20along%20Seyhan%20river%2C%20illuminated%20factory%20facades%20and%20bridges%2C%20warm%20city%20lights%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=800&height=450&seq=etkinlik-adana&orientation=landscape',
};

const typeStyles: Record<string, string> = {
  Açılış: 'bg-primary-100 text-primary-700',
  Panel: 'bg-accent-100 text-accent-700',
  Eğitim: 'bg-secondary-100 text-secondary-800',
  Networking: 'bg-primary-100 text-primary-700',
  B2B: 'bg-accent-100 text-accent-700',
  Mola: 'bg-secondary-100 text-secondary-800',
  Kayıt: 'bg-secondary-100 text-secondary-800',
  Kapanış: 'bg-primary-100 text-primary-700',
  Sunum: 'bg-primary-100 text-primary-700',
};

function EventCityCard({ city }: { city: EventCity }) {
  return (
    <div className="group flex flex-col md:flex-row rounded-xl bg-background-100 border border-background-200/70 hover:border-primary-300 transition-all overflow-hidden">
      <div className="relative md:w-56 lg:w-64 shrink-0 h-44 md:h-auto overflow-hidden">
        <img
          src={cityImages[city.city]}
          alt={city.city}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
        {city.year === '2027' && (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 bg-accent-500 text-background-50 text-[10px] font-bold rounded-full whitespace-nowrap">
            <i className="ri-calendar-event-line text-[11px]" />
            2027
          </span>
        )}
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`shrink-0 w-12 h-12 ${
              city.year === '2027' ? 'bg-accent-500' : 'bg-primary-500'
            } rounded-lg flex flex-col items-center justify-center text-center px-1`}
          >
            {city.year === '2026' ? (
              <>
                <span className="text-background-50 font-bold text-sm leading-none">
                  {city.dateShort?.split(' ')[0]}
                </span>
                <span className="text-background-50 text-[10px] font-medium uppercase leading-none mt-0.5">
                  {city.dateShort?.split(' ')[1]}
                </span>
              </>
            ) : (
              <span className="text-background-50 font-bold text-xs leading-tight text-center">
                {city.dateShort}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground-950">
              {city.city.toUpperCase()}
            </h3>
            {city.year !== '2027' && (
              <span className="text-xs text-foreground-500">{city.venue}</span>
            )}
          </div>
        </div>
        <p className="text-xs md:text-sm text-foreground-600 leading-relaxed mb-4 flex-1">
          {city.headline && (
            <span className="font-semibold text-foreground-800">{city.headline} </span>
          )}
          {city.description}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={city.slug ? `/etkinlik/${city.slug}` : '/katilim-formu'}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-500 text-background-50 text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
          >
            <i className="ri-user-add-line" />
            Katıl
          </a>
          <span className="flex items-center gap-1 text-xs text-foreground-500">
            <i className="ri-calendar-line" />
            {city.year === '2027' ? 'Tarih yakında açıklanacak' : city.date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Etkinlikler() {
  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20conference%20event%20venue%20with%20stage%20and%20LED%20screens%2C%20deep%20navy%20blue%20and%20violet%20stage%20lighting%20with%20cyan%20accents%2C%20empty%20auditorium%2C%20professional%20event%20photography%2C%20wide%20angle%2C%20high%20detail&width=1600&height=900&seq=etkinlikler-hero&orientation=landscape"
              alt="Etkinlikler"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-500 text-background-50 text-xs md:text-sm font-semibold rounded-full mb-4">
              2026 - 2027 ETKİNLİK TAKVİMİ
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-4 leading-tight">
              ETKİNLİKLER
            </h1>
            <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed mb-6">
              2026'da Bursa'da, 2027'de 6 şehirde 58 OSB ve 5000+ sanayiciyle buluşun. Dijital
              dönüşümün en güncel çözümlerini yerinde keşfedin, yeni iş bağlantıları kurun.
            </p>
          </div>
        </section>

        {/* Event cards */}
        <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-950 mb-2">
                ETKİNLİK ŞEHİRLERİ
              </h2>
              <p className="text-sm md:text-base text-foreground-600 max-w-2xl mx-auto leading-relaxed">
                Her şehirde özel program ve bölgeye özgü içeriklerle karşınızdayız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {eventCities.map((city) => (
                <EventCityCard key={`${city.year}-${city.city}`} city={city} />
              ))}
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-2">
                PROGRAM AKIŞI
              </h2>
              <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed">
                Ana etkinlik {eventInfo.subtitle} için örnek program akışı.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {agenda.map((item) => (
                <div
                  key={item.time}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl bg-background-800/60 border border-background-700/40 p-4 md:p-5"
                >
                  <div className="shrink-0 w-24 sm:w-32 text-xs md:text-sm font-bold text-accent-400 whitespace-nowrap">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-heading text-sm md:text-base font-semibold text-background-50">
                        {item.title}
                      </h3>
                      <span
                        className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full whitespace-nowrap ${
                          typeStyles[item.type] || 'bg-secondary-100 text-secondary-800'
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-background-300 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-10">
              <a
                href="/katilim-formu"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-primary-500 text-background-50 font-semibold text-sm md:text-base rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
              >
                <i className="ri-checkbox-circle-line" />
                Etkinliğe Kayıt Ol
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}