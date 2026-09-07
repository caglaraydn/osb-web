import { whySponsor } from '@/mocks/whySponsor';

export default function WhySponsor() {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-accent-500 rounded-lg">
              <i className="ri-vip-diamond-line text-background-50 text-lg md:text-xl" />
            </div>
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50">
              Neden Sponsor Olmalısınız?
            </h2>
          </div>
          <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed">
            Markanızı binlerce sanayicinin karşısına çıkarın, sektörünüzde fark yaratın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10">
          {whySponsor.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl bg-background-800/60 border border-background-700/40 p-5 md:p-6 transition-all group hover:border-accent-400/60"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-accent-500/20 rounded-xl mb-3 md:mb-4 group-hover:bg-accent-500 transition-colors">
                <i className={`${item.icon} text-accent-400 text-lg md:text-xl group-hover:text-background-50 transition-colors`} />
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-background-50 mb-1.5 md:mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-background-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/sponsorluk"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-accent-500 text-background-50 font-semibold text-sm md:text-base rounded-lg hover:bg-accent-600 transition-colors whitespace-nowrap"
          >
            <i className="ri-arrow-right-line" />
            Sponsorluk Başvurusu
          </a>
        </div>
      </div>
    </section>
  );
}