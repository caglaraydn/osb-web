import { impactStats } from '@/mocks/stats';

export default function StatsBar() {
  return (
    <section className="w-full py-6 md:py-8 px-4 md:px-6 lg:px-10 bg-background-50 border-y border-background-200/70">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 flex items-center justify-center bg-primary-100 rounded-xl">
                <i className={`${stat.icon} text-primary-600 text-lg md:text-xl`} />
              </div>
              <div className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-primary-600 mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-foreground-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}