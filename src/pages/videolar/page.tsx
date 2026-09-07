import { useState } from 'react';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import { videoBlogs, videoCategories, type VideoItem } from '@/mocks/videos';

export default function Videolar() {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const featuredVideo = videoBlogs.find((v) => v.featured) || videoBlogs[0];
  const filteredVideos =
    activeCategory === 'Tümü'
      ? videoBlogs
      : videoBlogs.filter((v) => v.category === activeCategory);

  const categories = ['Tümü', ...videoCategories];

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20broadcast%20studio%20with%20glowing%20screens%20and%20television%20control%20room%2C%20deep%20navy%20blue%20and%20violet%20lighting%20with%20cyan%20accents%2C%20futuristic%20media%20technology%20aesthetic%2C%20professional%20cinematic%20photography%2C%20wide%20panoramic%20composition%2C%20high%20detail&width=1600&height=900&seq=videolar-hero&orientation=landscape"
              alt="Dijital OSB TV"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-500 text-background-50 text-xs md:text-sm font-semibold rounded-full mb-4">
              VİDEO KÜTÜPHANESİ
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-4 leading-tight">
              DİJİTAL OSB TV
            </h1>
            <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed mb-6">
              Etkinlik özetleri, çözüm ortağı sunumları, panel kayıtları ve başarı hikayeleri.
              Dijitalleşen üretimin en güncel içerikleri tek yerde.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-background-300">
              <i className="ri-play-circle-line text-primary-400" />
              <span>{videoBlogs.length} video</span>
              <span className="text-background-500">•</span>
              <span>Her hafta yeni içerik</span>
            </div>
          </div>
        </section>

        {/* Featured video */}
        <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <div className="w-8 h-8 flex items-center justify-center bg-primary-500 rounded-lg">
                <i className="ri-star-fill text-background-50 text-sm" />
              </div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950">
                ÖNE ÇIKAN VİDEO
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
              <div
                className="lg:col-span-2 group relative rounded-xl overflow-hidden bg-background-950 cursor-pointer"
                onClick={() => setActiveVideo(featuredVideo)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background-50/90 rounded-full group-hover:bg-primary-500 group-hover:text-background-50 transition-all">
                      <i className="ri-play-fill text-primary-600 group-hover:text-background-50 text-3xl md:text-4xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-background-50 text-xs font-medium rounded-md">
                    {featuredVideo.duration}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="inline-block px-2.5 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3 w-fit">
                  {featuredVideo.category}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-2 leading-snug">
                  {featuredVideo.title}
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed mb-4">
                  {featuredVideo.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-foreground-500 mb-4">
                  <span className="flex items-center gap-1">
                    <i className="ri-eye-line" />
                    {featuredVideo.views} izlenme
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-calendar-line" />
                    {featuredVideo.date}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(featuredVideo)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-background-50 text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap w-fit"
                >
                  <i className="ri-play-fill" />
                  İzle
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video library */}
        <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-2">
                TÜM VİDEOLAR
              </h2>
              <p className="text-sm md:text-base text-background-200 max-w-2xl mx-auto leading-relaxed">
                İlgilendiğiniz kategoriye göre filtreleyin, dilediğiniz içeriği izleyin.
              </p>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === category
                      ? 'bg-primary-500 text-background-50'
                      : 'bg-background-800 text-background-300 hover:text-background-50 hover:bg-background-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group flex flex-col rounded-xl overflow-hidden bg-background-950 border border-background-800 hover:border-primary-500 transition-all cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-background-50/90 rounded-full group-hover:bg-primary-500 group-hover:text-background-50 transition-all">
                        <i className="ri-play-fill text-primary-600 group-hover:text-background-50 text-xl ml-0.5" />
                      </div>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-background-50 text-xs font-medium rounded-md">
                        {video.duration}
                      </div>
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-0.5 bg-accent-100 text-accent-700 text-[10px] font-semibold rounded-full whitespace-nowrap">
                        {video.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm md:text-base font-semibold text-background-100 line-clamp-2 group-hover:text-primary-400 transition-colors mb-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-background-300 leading-relaxed line-clamp-2 mb-3 flex-1">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-background-400">
                      <span className="flex items-center gap-1">
                        <i className="ri-eye-line" />
                        {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-calendar-line" />
                        {video.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube CTA */}
        <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary-500 rounded-full">
              <i className="ri-youtube-fill text-background-50 text-2xl" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-950 mb-3">
              DAHA FAZLASI İÇİN ABONE OLUN
            </h2>
            <p className="text-sm md:text-base text-foreground-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Yeni etkinlik özetleri, çözüm ortağı sunumları ve başarı hikayeleri için YouTube
              kanalımızı takip edin.
            </p>
            <a
              href="https://www.youtube.com/@dijitalosbbulusmalari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-primary-500 text-background-50 font-semibold text-sm md:text-base rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
            >
              <i className="ri-youtube-fill" />
              YouTube Kanalımız
            </a>
          </div>
        </section>
      </main>
      <Footer />

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-background-950 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              {activeVideo.videoUrl ? (
                <video
                  key={activeVideo.id}
                  src={activeVideo.videoUrl}
                  className="w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-500/90 rounded-full">
                        <i className="ri-play-fill text-background-50 text-3xl ml-1" />
                      </div>
                      <p className="text-background-100 text-sm md:text-base font-medium mb-1">
                        Bu video YouTube kanalımızda yayınlanacak
                      </p>
                      <a
                        href="https://www.youtube.com/@dijitalosbbulusmalari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm text-primary-400 hover:text-primary-300 transition-colors mt-2"
                      >
                        <i className="ri-youtube-fill" />
                        Kanalı ziyaret edin
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 bg-accent-100 text-accent-700 text-[10px] font-semibold rounded-full whitespace-nowrap">
                  {activeVideo.category}
                </span>
                <span className="text-xs text-background-400 flex items-center gap-1">
                  <i className="ri-eye-line" />
                  {activeVideo.views} izlenme
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-background-50 mb-2">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-background-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-black/60 text-background-50 rounded-full hover:bg-black/80 transition-colors"
              aria-label="Kapat"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}