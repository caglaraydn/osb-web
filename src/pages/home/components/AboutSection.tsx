import { aboutIntro } from '@/mocks/about';

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="flex items-start gap-4 md:gap-5">
            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center bg-background-900 rounded-xl border border-background-800">
              <i className="ri-building-4-line text-primary-500 text-2xl md:text-3xl" />
            </div>
            <div>
              <h2 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-background-50 mb-3 md:mb-4 leading-tight">
                {aboutIntro.title}
              </h2>
              <p className="text-sm md:text-base text-background-300 leading-relaxed">
                {aboutIntro.description} B2B dönüşüm ekosistemidir.
              </p>
              <p className="text-sm md:text-base text-primary-500 font-semibold mt-2">
                B2B dönüşüm ekosistemidir.
              </p>
            </div>
          </div>

          {/* Right: Map image */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://readdy.ai/api/search-image?query=Abstract%20digital%20map%20of%20Turkey%20with%20glowing%20connection%20nodes%20and%20network%20lines%20between%20major%20industrial%20cities%2C%20dark%20navy%20blue%20background%2C%20neon%20blue-purple%20and%20cyan%20data%20points%2C%20futuristic%20technology%20visualization%2C%20clean%20minimalist%20style%2C%20high%20detail&width=500&height=350&seq=turkey-map&orientation=landscape&nocache=true"
              alt="Türkiye B2B Ekosistemi"
              className="w-full max-w-md h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}