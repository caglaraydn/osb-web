import { useParams } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import RegistrationForm from '@/components/feature/RegistrationForm';
import { eventCities } from '@/mocks/events';

const cityImages: Record<string, string> = {
  Bursa: 'https://readdy.ai/api/search-image?query=Bursa%20cityscape%20at%20night%20with%20modern%20industrial%20district%2C%20modern%20city%20lights%20reflecting%20on%20streets%2C%20clean%20urban%20skyline%20with%20mountains%20in%20background%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=1600&height=900&seq=detay-bursa&orientation=landscape',
  Gebze: 'https://readdy.ai/api/search-image?query=Gebze%20organized%20industrial%20zone%20at%20dusk%20with%20modern%20high-tech%20buildings%20and%20illuminated%20factory%20facades%2C%20warm%20city%20lights%2C%20clean%20urban%20skyline%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=1600&height=900&seq=detay-gebze&orientation=landscape',
  İzmir: 'https://readdy.ai/api/search-image?query=Izmir%20cityscape%20at%20night%20with%20modern%20waterfront%20and%20harbor%20district%2C%20modern%20city%20lights%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20Aegean%20sea%20reflection%2C%20dramatic%20sky&width=1600&height=900&seq=detay-izmir&orientation=landscape',
  Ankara: 'https://readdy.ai/api/search-image?query=Ankara%20cityscape%20at%20night%20with%20modern%20business%20and%20technology%20district%2C%20illuminated%20skyscrapers%20and%20industrial%20park%2C%20clean%20urban%20skyline%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=1600&height=900&seq=detay-ankara&orientation=landscape',
  Adana: 'https://readdy.ai/api/search-image?query=Adana%20cityscape%20at%20night%20with%20modern%20industrial%20district%20along%20Seyhan%20river%2C%20illuminated%20factory%20facades%20and%20bridges%2C%20warm%20city%20lights%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=1600&height=900&seq=detay-adana&orientation=landscape',
  Manisa: 'https://readdy.ai/api/search-image?query=Manisa%20organized%20industrial%20zone%20at%20dusk%20with%20modern%20manufacturing%20facilities%20and%20green%20energy%20plants%2C%20illuminated%20factory%20facades%20with%20warm%20city%20lights%2C%20clean%20urban%20skyline%20with%20mountains%2C%20professional%20city%20photography%2C%20high%20detail%2C%20wide%20angle%2C%20dramatic%20sky&width=1600&height=900&seq=detay-manisa&orientation=landscape',
};

export default function EtkinlikDetay() {
  const { slug } = useParams();
  const city = eventCities.find((c) => c.slug === slug && c.year === '2027');

  if (!city) {
    return (
      <div className="min-h-screen bg-background-950">
        <Navbar />
        <main className="w-full pt-28 md:pt-36 pb-20 px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-background-800 rounded-full">
              <i className="ri-map-pin-line text-3xl text-primary-400" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-3">
              Etkinlik Bulunamadı
            </h1>
            <p className="text-sm text-background-300 mb-6">
              Aradığınız etkinlik sayfasına ulaşılamadı.
            </p>
            <a
              href="/etkinlikler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-background-50 font-semibold text-sm rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
            >
              <i className="ri-arrow-left-line" />
              Etkinliklere Dön
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={cityImages[city.city]}
              alt={city.city}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-accent-500 text-background-50 text-xs md:text-sm font-semibold rounded-full mb-4">
              2027 ETKİNLİĞİ
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background-50 mb-4 leading-tight">
              {city.city.toUpperCase()}
            </h1>
            <p className="font-heading text-lg md:text-xl text-background-100 max-w-2xl mx-auto leading-relaxed mb-3">
              {city.headline}
            </p>
            <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed">
              {city.description}
            </p>
          </div>
        </section>

        {/* Program — announced later */}
        <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-2">
                ETKİNLİK PROGRAMI
              </h2>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl bg-background-800/60 border border-background-700/40 p-8 md:p-12 text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-accent-500/20 rounded-full">
                <i className="ri-time-line text-2xl text-accent-400" />
              </div>
              <p className="text-base md:text-lg text-background-100 font-semibold">
                Etkinlik programı daha sonra açıklanacaktır
              </p>
              <p className="text-sm text-background-300 max-w-md leading-relaxed">
                {city.city} etkinliğinin detaylı program akışı, tarih yaklaştıkça bu sayfada
                paylaşılacaktır. Kayıt olarak gelişmelerden ilk siz haberdar olun.
              </p>
            </div>
          </div>
        </section>

        <RegistrationForm preselectedCityValue={`${city.city} - ${city.year}`} />
      </main>
      <Footer />
    </div>
  );
}