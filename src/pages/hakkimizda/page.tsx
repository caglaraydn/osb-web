import { useEffect, useState } from 'react';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const stats = [
  {
    icon: 'ri-map-pin-2-line',
    value: '28+',
    label: 'Lokasyon',
    description: "Türkiye'nin dört bir yanında 28'den fazla buluşma",
  },
  {
    icon: 'ri-team-line',
    value: 'Binlerce',
    label: 'Sanayici',
    description: 'Farklı sektörlerden binlerce sanayici ile buluştuk',
  },
  {
    icon: 'ri-building-4-line',
    value: '100+',
    label: 'Çözüm Ortağı',
    description: 'Yüzlerce teknoloji ve çözüm sağlayıcısı ile iş birliği',
  },
  {
    icon: 'ri-exchange-line',
    value: 'Yüzlerce',
    label: 'İş Birliği',
    description: 'Birçok iş birliği, proje ve yatırım fırsatı oluşturduk',
  },
];

const timeline = [
  {
    year: '2023',
    title: 'İlk Adım',
    description: 'Dijital OSB Buluşmaları fikir olarak doğdu ve ilk etkinliklerimizle yola çıktık.',
    icon: 'ri-flag-line',
  },
  {
    year: '2024',
    title: 'Büyüme',
    description: "Türkiye'nin farklı bölgelerinde yeni lokasyonlarda sanayicilerle buluşmayı sürdürdük.",
    icon: 'ri-bar-chart-grouped-line',
  },
  {
    year: '2025',
    title: 'Etki ve İş Birlikleri',
    description: 'Yüzlerce çözüm ortağı ile binlerce sanayiciyi bir araya getirerek güçlü iş birlikleri oluşturduk.',
    icon: 'ri-links-line',
  },
  {
    year: '2026 ve sonrası',
    title: 'Daha Güçlü Bir Ekosistem',
    description: 'Daha fazla lokasyon, daha fazla sanayici ve daha fazla çözüm ortağı ile dönüşümü birlikte hızlandırıyoruz.',
    icon: 'ri-global-line',
  },
];

const reasons = [
  {
    icon: 'ri-link-unlink-m',
    title: 'Doğru Bağlantılar',
    description: 'Karar vericilerle doğrudan görüşme ve networking fırsatları',
  },
  {
    icon: 'ri-computer-line',
    title: 'Güncel Teknolojiler',
    description: 'En yeni teknolojileri yerinde inceleme ve deneyimleme imkanı',
  },
  {
    icon: 'ri-government-line',
    title: 'Teşvik ve Finansman',
    description: 'Güncel teşvik programları ve finansman fırsatları hakkında bilgi',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Uzman İçerikler',
    description: 'Alanında uzman isimlerden eğitimler, paneller ve seminerler',
  },
  {
    icon: 'ri-lightbulb-line',
    title: 'Gerçek Çözümler',
    description: 'Sanayinin ihtiyaçlarına yönelik uygulanabilir çözümler',
  },
  {
    icon: 'ri-seedling-line',
    title: 'Sürdürülebilir Etki',
    description: 'Sanayimizin rekabet gücüne katkı sağlayan kalıcı iş birlikleri',
  },
];

export default function HakkimizdaPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative w-full pt-16 md:pt-[72px]">
        <div className="relative w-full bg-background-950 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Large%20industrial%20conference%20hall%20with%20stage%2C%20audience%20seated%2C%20big%20LED%20screens%20showing%20Dijital%20OSB%20Bulusmalari%20branding%2C%20warm%20ambient%20lighting%2C%20dark%20navy%20and%20orange%20color%20accents%2C%20professional%20corporate%20event%20atmosphere%2C%20cinematic%20wide%20angle&width=1200&height=500&seq=about-hero-bg&orientation=landscape"
              alt="Dijital OSB Buluşmaları Etkinlik"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-950 via-background-950/90 to-background-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest text-primary-500 uppercase mb-3">
                  Hakkımızda
                </span>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 leading-tight mb-5 md:mb-6">
                  Dijital OSB Buluşmaları Hakkında
                </h1>
                <p className="text-sm md:text-base text-background-300 leading-relaxed mb-4">
                  HYF Global olarak 2023 yılında başlattığımız Dijital OSB Buluşmaları, Türkiye sanayisinin dijital ve yeşil dönüşüm yolculuğuna ışık tutmak amacıyla hayata geçirdiğimiz güçlü bir B2B buluşma platformudur.
                </p>
                <p className="text-sm md:text-base text-background-400 leading-relaxed">
                  Sanayicileri; teknoloji sağlayıcıları, kamu kurumları, finans kuruluşları, danışmanlık firmaları ve uzmanlarla bir araya getirerek, üretimin geleceğini birlikte şekillendiriyoruz.
                </p>
              </div>

              {/* Right visual - decorative stat cards overlaid */}
              <div className="hidden lg:block relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 border border-primary-500/30 rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-40 h-40 border border-primary-500/20 rounded-2xl" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 md:p-6 rounded-xl border border-background-800 bg-background-900/50 hover:border-primary-500/40 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-primary-500/10">
                  <i className={`${stat.icon} text-primary-500 text-lg md:text-xl`} />
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-primary-500 mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-background-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MİSYON & VİZYON ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Misyon */}
            <div className="p-6 md:p-8 rounded-xl bg-background-900 border border-background-800 hover:border-primary-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/10">
                  <i className="ri-focus-3-line text-primary-500 text-xl" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-background-50">
                  Misyonumuz
                </h3>
              </div>
              <p className="text-sm md:text-base text-background-300 leading-relaxed">
                Sanayicilerin dijital ve yeşil dönüşüm süreçlerinde ihtiyaç duyduğu teknoloji, bilgi, finansman, teşvik ve iş ortaklarına erişimini kolaylaştırmak; doğru insanları, doğru çözümlerle buluşturarak kalıcı değer yaratmaktır.
              </p>
            </div>

            {/* Vizyon */}
            <div className="p-6 md:p-8 rounded-xl bg-background-900 border border-background-800 hover:border-primary-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/10">
                  <i className="ri-eye-line text-primary-500 text-xl" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-background-50">
                  Vizyonumuz
                </h3>
              </div>
              <p className="text-sm md:text-base text-background-300 leading-relaxed">
                Türkiye'nin en kapsamlı sanayi odaklı dijital dönüşüm ekosistemi olmak ve sanayimizin rekabet gücünü artıracak dönüşüm hareketine öncülük etmektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── YOLCULUĞUMUZ (TIMELINE) ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-16 bg-background-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 text-center mb-8 md:mb-12">
            Yolculuğumuz
          </h2>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            {/* Line */}
            <div className="absolute top-[52px] left-[12%] right-[12%] h-0.5 bg-background-800" />

            <div className="grid grid-cols-4 gap-4 relative">
              {timeline.map((item, idx) => (
                <div key={item.year} className="text-center relative">
                  {/* Year + icon */}
                  <div className="mb-3">
                    <span className="inline-block text-xs font-bold text-primary-500 tracking-wider mb-2">
                      {item.year}
                    </span>
                    <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-primary-500 text-background-50 shadow-lg shadow-primary-500/20">
                      <i className={`${item.icon} text-base`} />
                    </div>
                  </div>
                  {/* Dot on line */}
                  <div className="absolute top-[52px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 border-2 border-background-950" />
                  <h4 className="font-heading text-sm font-bold text-background-50 mt-4 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-background-400 leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
                    <i className={`${item.icon} text-base`} />
                  </div>
                  <div className="w-0.5 flex-1 bg-background-800 mt-2" />
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-primary-500 tracking-wider">
                    {item.year}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-background-50 mt-1 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-background-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEDEN DİJİTAL OSB BULUŞMALARI? ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 text-center mb-8 md:mb-12">
            Neden Dijital OSB Buluşmaları?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group p-5 md:p-6 rounded-xl bg-background-900 border border-background-800 hover:border-primary-500/30 transition-all"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-4 flex items-center justify-center rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                  <i className={`${reason.icon} text-primary-500 text-lg md:text-xl`} />
                </div>
                <h4 className="font-heading text-sm md:text-base font-bold text-background-50 mb-2">
                  {reason.title}
                </h4>
                <p className="text-xs md:text-sm text-background-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-background-900 border border-background-800">
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20industrial%20technology%20background%20with%20subtle%20geometric%20hexagon%20patterns%2C%20faint%20glowing%20connection%20lines%2C%20minimalist%20corporate%20atmosphere%2C%20low%20opacity%2C%20clean%20modern%20design&width=1200&height=300&seq=about-cta-bg&orientation=landscape"
                alt=""
                className="w-full h-full object-cover opacity-20"
              />
            </div>

            <div className="relative p-6 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50 mb-2">
                    Dönüşüm yolculuğunda yalnız değilsiniz.
                  </h3>
                  <p className="text-sm md:text-base text-background-400">
                    Dijital OSB Buluşmaları ile geleceği birlikte inşa ediyoruz.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="/katilim-formu"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg whitespace-nowrap bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors"
                  >
                    <i className="ri-user-add-line mr-2" />
                    SANAYİCİ OLARAK KATIL
                  </a>
                  <a
                    href="/sponsorluk"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg whitespace-nowrap border border-background-600 text-background-300 hover:text-background-50 hover:border-background-400 transition-colors"
                  >
                    <i className="ri-briefcase-line mr-2" />
                    ÇÖZÜM ORTAĞI OL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}