import { eventInfo } from '@/mocks/events';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-background-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/e67183e4-7cb4-4a34-8171-0b0b9890fa1e_compressed_neden-dijital-osb.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-6 lg:px-10 pt-28 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-4 md:mb-6 leading-tight">
              DİJİTALLEŞEN ÜRETİMİN{' '}
              <span className="text-primary-500">STRATEJİK BULUŞMA</span>{' '}
              NOKTASI
            </h1>
            <p className="text-sm md:text-base text-background-300 leading-relaxed mb-6 md:mb-8 max-w-lg">
              Türkiye'nin sanayi odaklı, dijital ve yeşil dönüşüm B2B platformu. Sanayiciyi OSB'lerle, teknolojiyle ve doğru iş ortaklarıyla buluşturuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-10 md:mb-14">
              <a
                href={eventInfo.ctaUrl}
                className="px-6 md:px-8 py-2.5 md:py-3 font-semibold text-sm md:text-base rounded-lg transition-all whitespace-nowrap flex items-center gap-2"
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
                <i className="ri-user-add-line" />
                Sanayici Olarak Katıl
              </a>
              <a
                href="/sponsorluk"
                className="px-6 md:px-8 py-2.5 md:py-3 font-semibold text-sm md:text-base rounded-lg transition-all whitespace-nowrap flex items-center gap-2 border"
                style={{
                  borderColor: 'rgba(139,92,246,0.5)',
                  color: '#C4B5FD',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.9)';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(139,92,246,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#C4B5FD';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <i className="ri-briefcase-line" />
                Çözüm Ortağı Ol
              </a>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-6 md:gap-8">
              {/* HYF GLOBAL Logo */}
              <div className="flex flex-col items-center gap-2">
                <div className="h-[140px] md:h-[168px] flex items-center justify-center">
                  <img
                    src="https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/ad09e109-fb0c-4930-97b0-3289459bd1c6_compressed_logo-01.webp"
                    alt="HYF GLOBAL - Teknoloji ve Organizasyon Hizmetleri Ltd. Şti."
                    className="h-[116px] md:h-[146px] w-auto object-contain"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-background-300 whitespace-nowrap">
                  Organizasyon
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-20 md:h-24 bg-background-700/50" />

              {/* MEXT Logo */}
              <div className="flex flex-col items-center gap-2">
                <div className="h-[140px] md:h-[168px] flex items-center justify-center">
                  <img
                    src="https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/22c661ef-429a-4ddd-be7d-c761c3751b36_compressed_MEXT_Logo_260X120-2.webp"
                    alt="MEXT - MESS Teknoloji Merkezi"
                    className="h-[44px] md:h-[56px] w-auto object-contain"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-background-300 whitespace-nowrap">
                  Stratejik Partner
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-20 md:h-24 bg-background-700/50" />

              {/* BIFF Logo */}
              <div className="flex flex-col items-center gap-2">
                <div className="h-[140px] md:h-[168px] flex items-center justify-center">
                  <img
                    src="https://public.readdy.ai/ai/img_res/626fa51b-2965-471a-8f73-fc21a9fe0137.png"
                    alt="BIFF - İletişim Partneri"
                    className="h-[100px] md:h-[126px] w-auto object-contain mt-3 md:mt-5"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-background-300 whitespace-nowrap">
                  İletişim Partneri
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}