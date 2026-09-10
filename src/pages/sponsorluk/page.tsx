import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const FORM_URL = 'https://readdy.ai/api/form/da2lro3d3r93mn1k3bp0';

const solutionAreas = [
  'ERP & Kurumsal Kaynak Planlama',
  'MES & Üretim Yönetimi',
  'CRM & Satış Yönetimi',
  'Otomasyon & Robotik',
  'IoT & Akıllı Fabrika',
  'Yapay Zeka & Makine Öğrenmesi',
  'Büyük Veri & Veri Analitiği',
  'Siber Güvenlik',
  'Enerji Verimliliği',
  'Yenilenebilir Enerji',
  'Bakım & Kestirimci Bakım',
  'Kalite Yönetim Sistemleri',
  'Tedarik Zinciri & Lojistik',
  'Sürdürülebilirlik & Karbon Yönetimi',
  'Bulut Bilişim & Veri Merkezi',
  'Dijital Dönüşüm Danışmanlığı',
  'Finansman & Teşvik Danışmanlığı',
  'İnsan Kaynakları & Eğitim',
  'Diğer',
];

const jobTitles = [
  'Firma Sahibi / Yönetim Kurulu',
  'Genel Müdür',
  'İş Geliştirme Müdürü',
  'Satış Müdürü',
  'Teknik Müdür / Mühendis',
  'Pazarlama Müdürü',
  'Diğer',
];

const ALL_EVENTS = 'Tüm Etkinlikler Hakkında Bilgi Almak';

const eventCities = [
  'Bursa',
  'İzmir',
  'Gebze',
  'Ankara',
  'Antalya',
  'Manisa',
  'Adana',
];

const freeEmailDomains = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'yandex.com',
  'icloud.com',
  'msn.com',
  'live.com',
  'protonmail.com',
  'mail.com',
  'gmail.com.tr',
  'hotmail.com.tr',
  'yahoo.com.tr',
  'outlook.com.tr',
];

export default function Sponsorluk() {
  const { status, errorMsg, handleSubmit } = useFormSubmit(FORM_URL, 'company_alt', 'Çözüm Ortağı');
  const [emailError, setEmailError] = useState('');
  const [eventsOpen, setEventsOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const toggleEvent = (event: string) => {
    setSelectedEvents((prev) => {
      if (event === ALL_EVENTS) {
        return prev.includes(ALL_EVENTS) ? [] : [ALL_EVENTS];
      }
      const withoutAll = prev.filter((e) => e !== ALL_EVENTS);
      return withoutAll.includes(event)
        ? withoutAll.filter((e) => e !== event)
        : [...withoutAll, event];
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
    const email = emailInput?.value?.trim().toLowerCase() || '';
    const domain = email.split('@')[1] || '';

    if (freeEmailDomains.includes(domain)) {
      setEmailError(
        'Lütfen kurumsal bir e-posta adresi giriniz. Ücretsiz uzantılar (gmail, hotmail, outlook vb.) kabul edilmemektedir.'
      );
      return;
    }
    setEmailError('');
    handleSubmit(e);
  };

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Abstract%20modern%20technology%20partnership%20concept%20with%20network%20connections%20and%20geometric%20shapes%2C%20deep%20navy%20and%20violet%20gradient%20with%20magenta%20purple%20highlights%2C%20futuristic%20business%20collaboration%20visual%2C%20professional%20cinematic%20composition%2C%20high%20detail&width=1600&height=900&seq=sponsorluk-hero&orientation=landscape&nocache=true"
              alt="Çözüm Ortağı Ol"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-500 text-background-50 text-xs md:text-sm font-semibold rounded-full mb-4">
              ÇÖZÜM SAĞLAYICILAR İÇİN
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-4 leading-tight">
              ÇÖZÜM ORTAĞI OL
            </h1>
            <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed mb-6">
              Çözümlerinizi sanayinin karar vericileriyle buluşturun. Binlerce sanayiciye doğrudan
              ulaşın, nitelikli B2B bağlantılar kurun ve yeni iş fırsatları yakalayın.
            </p>
            <a
              href="#basvuru"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 font-semibold text-sm md:text-base rounded-lg transition-all whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
                color: '#ffffff',
                boxShadow: '0 0 20px rgba(139,92,246,0.35)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(139,92,246,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(139,92,246,0.35)';
              }}
            >
              <i className="ri-hand-heart-line" />
              Başvuru Yap
            </a>
          </div>
        </section>

        {/* Application form */}
        <section id="basvuru" className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-900">
          <div className="max-w-2xl mx-auto">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-primary-500 rounded-full">
                  <i className="ri-check-line text-background-50 text-4xl" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-3">
                  Başvurunuz Alındı!
                </h2>
                <p className="text-sm md:text-base text-background-300 max-w-md mx-auto leading-relaxed mb-8">
                  Çözüm ortağı başvurunuz başarıyla tarafımıza iletildi. Ekibimiz en kısa sürede
                  sizinle iletişime geçerek iş birliği detaylarını paylaşacak.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm md:text-base rounded-lg transition-all whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
                    color: '#ffffff',
                    boxShadow: '0 0 20px rgba(139,92,246,0.35)',
                  }}
                >
                  <i className="ri-home-4-line" />
                  Ana Sayfaya Dön
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-primary-500 rounded-lg">
                    <i className="ri-hand-heart-line text-background-50 text-xl" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-2">
                    Çözüm Ortağı Başvuru Formu
                  </h2>
                  <p className="text-sm text-background-300 max-w-xl mx-auto leading-relaxed">
                    Bilgilerinizi doldurun, ekibimiz çözümünüz ve iş birliği koşullarıyla size ulaşsın.
                  </p>
                </div>

                <form
                  onSubmit={handleFormSubmit}
                  id="cozum-ortagi-basvuru-form"
                  data-readdy-form
                  className="bg-background-950 rounded-xl border border-background-800 p-6 md:p-8"
                >
                  <input
                    type="text"
                    name="company_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="offscreen-field"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-background-300 mb-1.5">
                        Firma Adı
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Firmanızın adı"
                        className="w-full px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-background-300 mb-1.5">
                        Yetkili Ad Soyad
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Adınız Soyadınız"
                        className="w-full px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-background-300 mb-1.5">
                        Görev / Ünvan
                      </label>
                      <select
                        name="title"
                        className="w-full px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50"
                      >
                        <option value="">Ünvan seçin</option>
                        {jobTitles.map((title) => (
                          <option key={title} value={title}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-background-300 mb-1.5">
                        Kurumsal E-posta
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="ornek@firma.com"
                        className="w-full px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                      />
                      {emailError && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                          <i className="ri-error-warning-line" />
                          {emailError}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-background-300 mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+90 5xx xxx xx xx"
                        className="w-full px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-background-300 mb-1.5">
                        Çözüm Alanınız
                      </label>
                      <select
                        name="category"
                        className="w-full px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50"
                      >
                        <option value="">Alan seçin</option>
                        {solutionAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-background-300 mb-1.5">
                      Hangi Etkinliklerle İlgileniyorsunuz?
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setEventsOpen((open) => !open)}
                        className="w-full flex items-center justify-between gap-2 px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-left"
                      >
                        <span
                          className={
                            selectedEvents.length ? 'text-background-50' : 'text-background-500'
                          }
                        >
                          {selectedEvents.length > 0
                            ? selectedEvents.join(', ')
                            : 'İlgilendiğiniz etkinlikleri seçin'}
                        </span>
                        <i
                          className={`ri-arrow-down-s-line text-background-500 text-base transition-transform ${eventsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {eventsOpen && (
                        <div className="mt-2 w-full border border-background-700 rounded-lg bg-background-950 p-2 max-h-64 overflow-y-auto">
                          {eventCities.map((city) => (
                            <label
                              key={city}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-md cursor-pointer hover:bg-background-900 text-sm text-background-200 transition-colors"
                            >
                              <input
                                type="checkbox"
                                name="events"
                                value={city}
                                checked={selectedEvents.includes(city)}
                                onChange={() => toggleEvent(city)}
                                className="w-4 h-4 accent-primary-500 rounded cursor-pointer"
                              />
                              <span>{city}</span>
                            </label>
                          ))}
                          <div className="my-1 border-t border-background-800" />
                          <label className="flex items-center gap-2.5 px-3 py-2 rounded-md cursor-pointer hover:bg-background-900 text-sm text-background-200 transition-colors">
                            <input
                              type="checkbox"
                              name="events"
                              value={ALL_EVENTS}
                              checked={selectedEvents.includes(ALL_EVENTS)}
                              onChange={() => toggleEvent(ALL_EVENTS)}
                              className="w-4 h-4 accent-primary-500 rounded cursor-pointer"
                            />
                            <span className="font-semibold">{ALL_EVENTS}</span>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-background-300 mb-1.5">
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      maxLength={500}
                      rows={4}
                      placeholder="Çözümlerinizden ve iş birliği beklentilerinizden kısaca bahsedin."
                      className="w-full px-4 py-3 text-sm bg-background-900 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500 resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="kvkk"
                      required
                      className="mt-0.5 w-4 h-4 accent-primary-500 rounded cursor-pointer flex-shrink-0"
                    />
                    <span className="text-xs text-background-400 leading-relaxed">
                      6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel
                      verilerimin işlenmesini kabul ediyorum.
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="contact_consent"
                      required
                      className="mt-0.5 w-4 h-4 accent-primary-500 rounded cursor-pointer flex-shrink-0"
                    />
                    <span className="text-xs text-background-400 leading-relaxed">
                      Çözüm ortağı süreci kapsamında tarafımla iletişime geçilmesini ve bilgi
                      verilmesini kabul ediyorum.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-6 py-3 font-semibold text-sm md:text-base rounded-lg transition-all whitespace-nowrap disabled:opacity-60"
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
                      color: '#ffffff',
                      boxShadow: '0 0 20px rgba(139,92,246,0.35)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(139,92,246,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(139,92,246,0.35)';
                    }}
                  >
                    {status === 'submitting' ? 'Gönderiliyor...' : 'Başvuru Gönder'}
                  </button>

                  {status === 'error' && errorMsg && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-400">
                      <i className="ri-error-warning-line" />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}