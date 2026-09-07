import { newsList } from '@/mocks/news';

export default function FeaturedNews() {
  const featured = newsList.filter((n) => n.featured);
  const nonFeatured = newsList.filter((n) => !n.featured).slice(0, 4);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section id="haberler" className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-primary-500 rounded-lg">
            <i className="ri-fire-line text-background-50 text-lg md:text-xl" />
          </div>
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950">
            Öne Çıkan Haberler
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-5">
          {/* Main Featured */}
          {featured.length > 0 && (
            <a
              href={`/haber/${featured[0].id}`}
              className="lg:col-span-3 group relative rounded-xl overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-300 transition-all block"
            >
              <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                <img
                  src={featured[0].image}
                  alt={featured[0].title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <span className="inline-block px-2.5 py-0.5 bg-primary-500 text-background-50 text-xs font-semibold rounded-md mb-2 md:mb-3">
                  {featured[0].category.toUpperCase()}
                </span>
                <h3 className="font-heading text-base md:text-xl lg:text-2xl font-bold text-background-50 mb-1 md:mb-2 line-clamp-2">
                  {featured[0].title}
                </h3>
                <p className="text-sm text-background-100/80 line-clamp-2 hidden md:block">
                  {featured[0].summary}
                </p>
                <div className="flex items-center gap-2 mt-2 md:mt-3 text-xs text-background-100/70">
                  <i className="ri-calendar-line" />
                  <span>{formatDate(featured[0].date)}</span>
                  <span className="mx-1">·</span>
                  <span>{featured[0].author}</span>
                </div>
              </div>
            </a>
          )}

          {/* Side News */}
          <div className="lg:col-span-2 flex flex-col gap-3 md:gap-4">
            {nonFeatured.map((news) => (
              <a
                key={news.id}
                href={`/haber/${news.id}`}
                className="group flex gap-3 md:gap-4 p-3 rounded-xl bg-background-100 border border-background-200/70 hover:border-primary-300 transition-all"
              >
                <div className="w-24 h-20 md:w-28 md:h-20 shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] md:text-xs font-semibold text-accent-600 uppercase tracking-wide">
                    {news.category}
                  </span>
                  <h4 className="font-heading text-xs md:text-sm font-semibold text-foreground-900 mt-0.5 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1 text-[10px] md:text-xs text-foreground-500">
                    <i className="ri-time-line" />
                    <span>{formatDate(news.date)}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}