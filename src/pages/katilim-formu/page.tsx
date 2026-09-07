import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import RegistrationForm from '@/components/feature/RegistrationForm';
import { eventInfo } from '@/mocks/events';
import { agenda } from '@/mocks/agenda';

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

export default function KatilimFormu() {
  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Abstract%20industrial%20factory%20interior%20with%20robotic%20arms%20and%20digital%20data%20overlays%2C%20deep%20navy%20blue%20and%20violet%20gradient%20lighting%2C%20glowing%20cyan%20accent%20highlights%2C%20futuristic%20technology%20aesthetic%2C%20wide%20panoramic%20composition%2C%20professional%20cinematic%20photography%2C%20high%20detail&width=1600&height=900&seq=katilim-hero&orientation=landscape"
              alt="Sanayici Olarak Katıl"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-500 text-background-50 text-xs md:text-sm font-semibold rounded-full mb-4">
              SANAYİCİLER İÇİN
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-4 leading-tight">
              SANAYİCİ OLARAK KATIL
            </h1>
            <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed mb-6">
              Dijitalleşen üretimin stratejik buluşma noktasında yerinizi alın. Doğru teknolojiye,
              doğru iş ortaklarına ve uygulanabilir bilgiye tek günde ulaşın.
            </p>
            <a
              href="#kayit"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-primary-500 text-background-50 font-semibold text-sm md:text-base rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
            >
              <i className="ri-user-add-line" />
              Hemen Kayıt Ol
            </a>
          </div>
        </section>

        {/* Program */}
        <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-2">
                ETKİNLİK PROGRAMI
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
          </div>
        </section>

        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}