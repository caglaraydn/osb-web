import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const heroHighlights = [
  { icon: 'ri-cpu-line', title: 'Teknoloji', desc: 'Doğru çözümler' },
  { icon: 'ri-coins-line', title: 'Finansman', desc: 'Yatırım destekleri' },
  { icon: 'ri-award-line', title: 'Teşvik', desc: 'Güncel destekler' },
  { icon: 'ri-group-line', title: 'İş Ortaklığı', desc: 'Doğrudan temas' },
];

const solutions = [
  {
    icon: 'ri-brain-line',
    title: 'Yapay Zeka & Veri Analitiği',
    description:
      'Üretim, kalite, bakım ve karar süreçlerinde yapay zeka uygulamaları.',
  },
  {
    icon: 'ri-robot-2-line',
    title: 'Otomasyon & Akıllı Fabrikalar',
    description:
      'Üretim süreçlerinizi daha verimli, hızlı ve akıllı hale getirin.',
  },
  {
    icon: 'ri-wifi-line',
    title: 'IoT & Kestirimci Bakım',
    description:
      'Makine ve üretim verilerini gerçek zamanlı izleyin, arızaları öngörün.',
  },
  {
    icon: 'ri-bar-chart-box-line',
    title: 'MES & ERP Çözümleri',
    description:
      'Üretiminizi, kaynaklarınızı ve operasyonlarınızı uçtan uca yönetin.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Siber Güvenlik',
    description:
      'Fabrikanızın kritik altyapısını, operasyonel teknolojilerini ve verilerini koruyun.',
  },
  {
    icon: 'ri-box-3-line',
    title: 'Dijital İkiz',
    description:
      'Üretim süreçlerinizi dijital ortamda modelleyin ve daha doğru kararlar alın.',
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Enerji Verimliliği & Sürdürülebilirlik',
    description:
      'Enerji maliyetlerinizi azaltın, kaynaklarınızı daha verimli kullanın.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Yeşil & Dijital Dönüşüm',
    description:
      'Sürdürülebilir üretim ve dijital dönüşüm hedeflerinizi birlikte ilerletin.',
  },
  {
    icon: 'ri-bank-card-line',
    title: 'Teşvikler, Hibeler & Finansman',
    description:
      'Yatırımlarınızı destekleyecek güncel devlet desteklerini ve finansman fırsatlarını keşfedin.',
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Güncel Destek Programları',
    description:
      'Dijital ve yeşil dönüşüm yatırımlarınız için başvuru fırsatlarını takip edin.',
  },
  {
    icon: 'ri-trophy-line',
    title: 'Başarı Hikayeleri',
    description:
      'Benzer sektörlerde uygulanmış gerçek dönüşüm projelerini ve sonuçlarını inceleyin.',
  },
  {
    icon: 'ri-user-search-line',
    title: 'B2B İş Görüşmeleri',
    description:
      'İhtiyacınıza uygun çözüm sağlayıcılarla doğrudan görüşün ve iş birliği fırsatları yakalayın.',
  },
];

const questions = [
  {
    q: 'Hangi teknolojiye yatırım yapmalıyım?',
    a: 'İhtiyacınıza uygun teknolojileri ve gerçek fabrika uygulamalarını keşfedin.',
  },
  {
    q: 'Bu yatırımı nasıl finanse edebilirim?',
    a: 'Teşvik, hibe ve finansman fırsatları hakkında güncel bilgiye ulaşın.',
  },
  {
    q: 'Doğru çözüm ortağını nasıl bulabilirim?',
    a: 'Teknoloji ve çözüm sağlayıcılarla doğrudan iletişim kurun.',
  },
];

const supportCards = [
  { icon: 'ri-government-line', title: 'Devlet Teşvikleri' },
  { icon: 'ri-gift-line', title: 'Hibe Programları' },
  { icon: 'ri-building-4-line', title: 'KOSGEB Destekleri' },
  { icon: 'ri-funds-line', title: 'Yatırım Teşvikleri' },
  { icon: 'ri-bank-card-2-line', title: 'Kredi ve Finansman İmkanları' },
  { icon: 'ri-seedling-line', title: 'Yeşil Dönüşüm Destekleri' },
];

export default function SanayicilerIcinPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative w-full pt-16 md:pt-[72px]">
        <div className="relative w-full bg-background-950 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20smart%20factory%20interior%20with%20orange%20industrial%20robotic%20arms%20and%20holographic%20data%20dashboards%2C%20dark%20navy%20blue%20lighting%2C%20digital%20transformation%20atmosphere%2C%20clean%20manufacturing%20technology%2C%20wide%20angle%20professional%20photography&width=1200&height=500&seq=sanayici-hero-bg&orientation=landscape"
              alt="Akıllı Fabrika"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-950 via-background-950/80 to-background-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-20 lg:py-24">
            <div className="max-w-2xl">
              <nav className="text-xs text-background-400 mb-4 flex items-center gap-2">
                <a href="/" className="hover:text-primary-400 transition-colors">Ana Sayfa</a>
                <i className="ri-arrow-right-s-line text-background-600" />
                <span className="text-background-300">Sanayiciler İçin</span>
              </nav>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 leading-tight mb-5 md:mb-6">
                Sanayiciler{' '}
                <span className="text-primary-500">İçin</span>
              </h1>
              <p className="text-sm md:text-base text-background-300 leading-relaxed mb-8">
                Dijital OSB Buluşmaları, sanayicilerin dijital ve yeşil dönüşüm süreçlerinde ihtiyaç duyduğu teknoloji, bilgi, finansman, teşvik ve iş ortaklarına doğrudan ulaşmasını sağlayan buluşma platformudur.
              </p>

              {/* 4 highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {heroHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center p-3 md:p-4 rounded-xl bg-background-950/40 border border-background-800/50 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary-500/20 mb-2">
                      <i className={`${item.icon} text-primary-500 text-base md:text-lg`} />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-background-50">
                      {item.title}
                    </span>
                    <span className="text-[10px] md:text-xs text-background-500 mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BURADA NE BULACAKSINIZ? ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-16 bg-background-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary-500 uppercase mb-2">
              Sanayici Olarak
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50">
              Burada ne bulacaksınız?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="group p-5 md:p-6 rounded-xl bg-background-900 border border-background-800 hover:border-primary-500/40 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-4 flex items-center justify-center rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                  <i className={`${item.icon} text-primary-500 text-lg md:text-xl`} />
                </div>
                <h4 className="font-heading text-sm font-bold text-background-50 mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-background-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SANAYİCİNİN SORULARINA CEVAPLAR ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-16 bg-background-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
            {/* Left: Questions */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-primary-500 uppercase mb-2">
                Sanayicinin Sorularına
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-background-50 mb-6">
                Somut Cevaplar<br />Sunuyoruz
              </h2>

              <div className="space-y-4">
                {questions.map((item) => (
                  <div
                    key={item.q}
                    className="p-4 md:p-5 rounded-xl bg-background-900 border border-background-800"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-primary-500/20 mt-0.5">
                        <i className="ri-question-mark text-primary-500 text-xs" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-background-50 mb-1">
                          {item.q}
                        </h4>
                        <p className="text-xs text-background-400 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Circular diagram */}
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Outer dashed ring */}
                <div className="absolute inset-2 rounded-full border-[6px] border-dashed border-background-800/50" />

                {/* Segment badges around the circle */}
                {/* Top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 mb-1">
                    <i className="ri-search-line text-background-50 text-sm" />
                  </div>
                  <span className="text-[10px] font-bold text-primary-400 whitespace-nowrap bg-background-900 px-2 py-0.5 rounded border border-background-800">
                    İHTİYACI BELİRLİYORUZ
                  </span>
                </div>

                {/* Top-right */}
                <div className="absolute top-[12%] -right-4 md:-right-6 flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 mb-1">
                    <i className="ri-lightbulb-line text-background-50 text-sm" />
                  </div>
                  <span className="text-[10px] font-bold text-primary-400 whitespace-nowrap bg-background-900 px-2 py-0.5 rounded border border-background-800">
                    ÇÖZÜMÜ KEŞFEDİYORUZ
                  </span>
                </div>

                {/* Bottom-right */}
                <div className="absolute bottom-[12%] -right-4 md:-right-8 flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 mb-1">
                    <i className="ri-bank-card-line text-background-50 text-sm" />
                  </div>
                  <span className="text-[10px] font-bold text-primary-400 whitespace-nowrap bg-background-900 px-2 py-0.5 rounded border border-background-800">
                    TEŞVİK & FİNANSMAN
                  </span>
                </div>

                {/* Bottom-left */}
                <div className="absolute bottom-[12%] -left-4 md:-left-8 flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 mb-1">
                    <i className="ri-user-shared-2-line text-background-50 text-sm" />
                  </div>
                  <span className="text-[10px] font-bold text-primary-400 whitespace-nowrap bg-background-900 px-2 py-0.5 rounded border border-background-800">
                    İŞ ORTAĞI BULUŞMASI
                  </span>
                </div>

                {/* Top-left */}
                <div className="absolute top-[12%] -left-4 md:-left-6 flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 mb-1">
                    <i className="ri-rocket-line text-background-50 text-sm" />
                  </div>
                  <span className="text-[10px] font-bold text-primary-400 whitespace-nowrap bg-background-900 px-2 py-0.5 rounded border border-background-800">
                    DÖNÜŞÜMÜ BAŞLAT
                  </span>
                </div>

                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-background-900 border-2 border-primary-500/40 flex flex-col items-center justify-center text-center p-3 shadow-lg shadow-primary-500/10">
                    <span className="text-[10px] md:text-xs font-bold text-primary-500 leading-snug">
                      DÖNÜŞÜM<br />YOLCULUĞUNUZDA<br />YANINIZDAYIZ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-lg md:text-xl font-bold text-primary-500 mb-3">
                SADECE TEKNOLOJİ<br />ANLATMIYORUZ!
              </h3>
              <p className="text-sm text-background-300 leading-relaxed mb-6">
                İhtiyaçlar belirlenir, çözümler keşfedilir, teşvik ve finansman fırsatları değerlendirilir ve iş birlikleri kurulur.
              </p>
              <img
                src="https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/c7a134ac-e18f-417f-8d0e-98459ef9bfd7_compressed_1O0A8302.webp"
                alt="B2B Görüşme"
                className="w-full h-40 object-cover rounded-xl border border-background-800 mb-5"
              />
              <a
                href="/katilim-formu"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg whitespace-nowrap bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors"
              >
                B2B GÖRÜŞME TALEP ET
                <i className="ri-arrow-right-line ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESTEK SİZİNLE ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-16 bg-background-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left image */}
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Green%20plant%20growing%20from%20stack%20of%20gold%20coins%20next%20to%20glass%20globe%2C%20financial%20growth%20and%20sustainability%20concept%2C%20clean%20white%20background%2C%20soft%20studio%20lighting%2C%20professional%20business%20photography&width=500&height=400&seq=sanayici-finance&orientation=squarish"
                alt="Finansman ve Sürdürülebilirlik"
                className="w-full h-64 md:h-80 object-cover rounded-2xl border border-background-200"
              />
            </div>

            {/* Right content */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-primary-500 uppercase mb-2">
                Destek Sizinle
              </span>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950 mb-3">
                Dönüşüm Yatırımınız İçin Destek ve Finansman Fırsatlarını Keşfedin!
              </h2>
              <p className="text-sm md:text-base text-foreground-500 leading-relaxed mb-6">
                Devlet teşvikleri, hibeler, kredi programları ve finansman destekleri hakkında güncel bilgi alın. Yatırım planlarınızı birlikte değerlendirelim.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
                {supportCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex flex-col items-center text-center p-3 md:p-4 rounded-xl bg-background-50 border border-background-200 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 mb-2 flex items-center justify-center rounded-full bg-primary-500/10">
                      <i className={`${card.icon} text-primary-500 text-sm md:text-base`} />
                    </div>
                    <span className="text-xs font-semibold text-foreground-700 leading-tight">
                      {card.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-background-950 border border-background-800">
            <div className="absolute inset-0">
              <img
                src="https://readdy.ai/api/search-image?query=Dark%20navy%20abstract%20technology%20background%20with%20faint%20grid%20lines%2C%20subtle%20glowing%20nodes%2C%20low%20opacity%2C%20clean%20corporate%20style%2C%20minimal&width=1200&height=300&seq=sanayici-cta-bg&orientation=landscape"
                alt=""
                className="w-full h-full object-cover opacity-15"
              />
            </div>

            <div className="relative p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                {/* Left text */}
                <div className="lg:col-span-1">
                  <span className="inline-block text-xs font-semibold tracking-widest text-primary-500 uppercase mb-2">
                    Dijital OSB Buluşmaları
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-background-50 leading-tight mb-2">
                    Teknolojiyi Keşfedin.<br />
                    Teşviki Yakalayın.<br />
                    <span className="text-primary-500">Dönüşümü Başlatın.</span>
                  </h3>
                  <p className="text-xs md:text-sm text-background-400">
                    Sanayinin dönüşümünü teknoloji, teşvik ve iş birlikleriyle hızlandıran platform.
                  </p>
                </div>

                {/* Center CTA */}
                <div className="flex flex-col items-center text-center p-5 md:p-6 rounded-xl bg-background-900/60 border border-background-800">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-primary-500/10">
                    <i className="ri-building-4-line text-primary-500 text-xl" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-background-50 mb-1">
                    Sanayici Olarak Katılın
                  </h4>
                  <p className="text-xs text-background-400 mb-4">
                    Etkinliklerimize katılın, doğru teknolojiye ve iş ortaklarına ulaşın.
                  </p>
                  <a
                    href="/etkinlikler"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors"
                  >
                    ETKİNLİKLERE KATIL
                    <i className="ri-arrow-right-line ml-2" />
                  </a>
                </div>

                {/* Right CTA */}
                <div className="flex flex-col items-center text-center p-5 md:p-6 rounded-xl bg-primary-500/10 border border-primary-500/30">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-primary-500/20">
                    <i className="ri-headphone-line text-primary-500 text-xl" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-background-50 mb-1">
                    İhtiyacınızı Paylaşın
                  </h4>
                  <p className="text-xs text-background-400 mb-4">
                    İhtiyacınızı bize iletin, size uygun çözüm ortaklarıyla buluşturalım.
                  </p>
                  <a
                    href="/iletisim"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-background-50 transition-colors"
                  >
                    İHTİYACIMI PAYLAŞ
                    <i className="ri-arrow-right-line ml-2" />
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