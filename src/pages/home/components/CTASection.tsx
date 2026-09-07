export default function CTASection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Sanayicisiniz */}
        <div className="bg-primary-500 px-6 md:px-10 lg:px-14 py-10 md:py-14 flex items-center gap-5 md:gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center bg-background-50/20 rounded-xl">
            <i className="ri-building-2-line text-background-50 text-3xl md:text-4xl" />
          </div>
          <div>
            <h3 className="font-heading text-lg md:text-xl font-bold text-background-50 mb-2">
              SANAYİCİSİNİZ
            </h3>
            <p className="text-sm text-background-100/90 mb-4 max-w-sm leading-relaxed">
              Doğru teknolojiye ve doğru iş ortaklarına ulaşın. Dönüşüm yolculuğunuzda size destek olalım.
            </p>
            <a
              href="/katilim-formu"
              className="inline-flex px-5 py-2.5 bg-background-50 text-primary-600 font-semibold text-sm rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap"
            >
              KAYIT OL
            </a>
          </div>
        </div>

        {/* Right: Çözüm Sağlayıcısısınz */}
        <div className="bg-background-950 px-6 md:px-10 lg:px-14 py-10 md:py-14 flex items-center gap-5 md:gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center bg-background-900 rounded-xl border border-background-800">
            <i className="ri-team-line text-primary-500 text-3xl md:text-4xl" />
          </div>
          <div>
            <h3 className="font-heading text-lg md:text-xl font-bold text-background-50 mb-2">
              ÇÖZÜM SAĞLAYICISISINIZ
            </h3>
            <p className="text-sm text-background-300 mb-4 max-w-sm leading-relaxed">
              Çözümlerinizi sanayinin karar vericileriyle buluşturun. Yeni iş fırsatları yakalayın.
            </p>
            <a
              href="/sponsorluk"
              className="inline-flex px-5 py-2.5 border border-background-600 text-background-300 font-semibold text-sm rounded-lg hover:border-background-400 hover:text-background-50 transition-colors whitespace-nowrap"
            >
              ÇÖZÜM ORTAĞI OL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}