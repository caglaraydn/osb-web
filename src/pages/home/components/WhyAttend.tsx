import { whyAttend } from '@/mocks/whyAttend';

export default function WhyAttend() {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-primary-500 rounded-lg">
              <i className="ri-user-star-line text-background-50 text-lg md:text-xl" />
            </div>
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950">
              Neden Katılmalısınız?
            </h2>
          </div>
          <p className="text-sm md:text-base text-foreground-600 max-w-2xl mx-auto leading-relaxed">
            Dijital OSB Buluşmaları, fabrikanızın geleceği için kaçırmamanız gereken fırsatlar sunuyor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {whyAttend.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl bg-background-100 border border-background-200/70 hover:border-primary-300 p-5 md:p-6 transition-all group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary-100 rounded-xl mb-3 md:mb-4 group-hover:bg-primary-500 transition-colors">
                <i className={`${item.icon} text-primary-600 text-lg md:text-xl group-hover:text-background-50 transition-colors`} />
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-1.5 md:mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-foreground-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}