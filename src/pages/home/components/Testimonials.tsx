import { testimonials } from '@/mocks/testimonials';

export default function Testimonials() {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50 mb-2">
            SANAYİCİLER VE ÇÖZÜM ORTAKLARIMIZ NE DİYOR?
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-xl bg-background-900 border border-background-800 p-5 md:p-6"
            >
              {/* Logo box */}
              <div
                className={`w-full rounded-lg p-3 md:p-4 mb-4 flex flex-col items-center justify-center min-h-[70px] ${t.logoBg || 'bg-background-50'}`}
              >
                <span className={`font-heading ${t.logoStyle}`}>
                  {t.logoText}
                </span>
                {t.logoSubtext && (
                  <span className="text-[10px] text-foreground-500 mt-1 whitespace-pre-line leading-tight text-center">
                    {t.logoSubtext}
                  </span>
                )}
              </div>

              {/* Quote */}
              <p className="text-sm text-background-200 leading-relaxed mb-5 flex-1">
                {t.quote}
              </p>

              {/* Avatar + info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="font-heading text-xs font-bold text-background-50 uppercase tracking-wide">
                    {t.company}
                  </div>
                  <div className="text-xs font-bold text-accent-500 mt-0.5">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-accent-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}