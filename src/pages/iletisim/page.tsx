import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const FORM_URL = 'https://readdy.ai/api/form/d9ve11g3256a3o8koiug';

const contactInfo = [
  {
    icon: 'ri-mail-line',
    label: 'E-posta',
    value: 'info@hyf.com.tr',
    href: 'mailto:info@hyf.com.tr',
  },
  {
    icon: 'ri-phone-line',
    label: 'Telefon',
    value: '+90 532 335 71 78',
    href: 'tel:+905323357178',
  },
  {
    icon: 'ri-map-pin-2-line',
    label: 'Adres',
    value: 'Söğütözü, Koç Kuleleri K:1 A Blok Çankaya, Ankara',
  },
  {
    icon: 'ri-time-line',
    label: 'Çalışma Saatleri',
    value: 'Hafta içi 09.00 - 18.00',
  },
];

const socialLinks = [
  { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/dijital-osb-bulu%C5%9Fmalar%C4%B1-hyf-fuarc%C4%B1l%C4%B1k-a-%C5%9F-82b2bb265/' },
  { name: 'Instagram', icon: 'ri-instagram-line', url: 'https://www.instagram.com/dijitalosbbulusmalari/' },
  { name: 'YouTube', icon: 'ri-youtube-fill', url: 'https://www.youtube.com/@dijitalosbbulusmalari' },
];

export default function IletisimPage() {
  const { status, errorMsg, handleSubmit } = useFormSubmit(FORM_URL);

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Abstract%20modern%20corporate%20contact%20and%20communication%20concept%20with%20network%20connection%20lines%20and%20geometric%20shapes%2C%20deep%20navy%20blue%20background%20with%20violet%20magenta%20gradient%20highlights%2C%20glowing%20connection%20nodes%2C%20futuristic%20business%20communication%20visual%2C%20professional%20cinematic%20composition%2C%20high%20detail&width=1600&height=900&seq=iletisim-hero&orientation=landscape"
              alt="İletişim"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-500 text-background-50 text-xs md:text-sm font-semibold rounded-full mb-4">
              BİZE ULAŞIN
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-4 leading-tight">
              İletişim
            </h1>
            <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed">
              Sorularınız, iş birliği önerileriniz veya katılım talepleriniz için bizimle iletişime
              geçin. Ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="w-full px-4 md:px-6 lg:px-10 pb-4 md:pb-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-primary-500/20 mb-3 md:mb-4">
                      <i className={`${item.icon} text-primary-400 text-lg md:text-xl`} />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-background-400 mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-background-50 leading-relaxed break-words">
                      {item.value}
                    </div>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl bg-background-900 border border-background-800 p-5 md:p-6 hover:border-primary-500/40 transition-colors"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="rounded-xl bg-background-900 border border-background-800 p-5 md:p-6"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="w-full px-4 md:px-6 lg:px-10 py-8 md:py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact form */}
            <div className="rounded-xl bg-background-900 border border-background-800 p-6 md:p-8">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-background-50 mb-2">
                Mesaj Gönderin
              </h2>
              <p className="text-sm text-background-400 mb-6">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>

              <form
                onSubmit={handleSubmit}
                id="iletisim-form"
                data-readdy-form
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
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-3 text-sm bg-background-950 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-background-300 mb-1.5">
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Firmanızın adı"
                      className="w-full px-4 py-3 text-sm bg-background-950 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-background-300 mb-1.5">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ornek@firma.com"
                      className="w-full px-4 py-3 text-sm bg-background-950 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-background-300 mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+90 5xx xxx xx xx"
                      className="w-full px-4 py-3 text-sm bg-background-950 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-background-300 mb-1.5">
                      Konu
                    </label>
                    <select
                      name="subject"
                      className="w-full px-4 py-3 text-sm bg-background-950 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50"
                    >
                      <option value="">Konu seçin</option>
                      <option value="Genel Bilgi">Genel Bilgi</option>
                      <option value="Sanayici Katılımı">Sanayici Katılımı</option>
                      <option value="Çözüm Ortaklığı">Çözüm Ortaklığı</option>
                      <option value="Sponsorluk">Sponsorluk</option>
                      <option value="Basın & Medya">Basın & Medya</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-semibold text-background-300 mb-1.5">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    maxLength={500}
                    rows={5}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-4 py-3 text-sm bg-background-950 border border-background-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-background-50 placeholder:text-background-500 resize-none"
                  />
                </div>

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
                  {status === 'submitting' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>

                {status === 'success' && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary-400">
                    <i className="ri-checkbox-circle-line" />
                    <span>Mesajınız alındı, teşekkürler! En kısa sürede size dönüş yapacağız.</span>
                  </div>
                )}
                {status === 'error' && errorMsg && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-400">
                    <i className="ri-error-warning-line" />
                    <span>{errorMsg}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Social */}
            <div className="rounded-xl bg-background-900 border border-background-800 p-6 self-start">
              <h3 className="font-heading text-lg font-bold text-background-50 mb-1">
                Bizi Takip Edin
              </h3>
              <p className="text-sm text-background-400 mb-4">
                Güncel etkinlik ve duyurular için sosyal medyada bizi takip edin.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-background-950 border border-background-700 text-background-400 hover:text-background-50 hover:bg-primary-500 hover:border-primary-500 transition-colors"
                  >
                    <i className={`${social.icon} text-xl`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}