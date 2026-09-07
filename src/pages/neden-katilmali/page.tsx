import { useEffect, useState } from 'react';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';

const opportunities = [
  {
    icon: 'ri-user-settings-line',
    title: 'Doğrudan Sanayici ve Karar Vericilere Erişim',
    description:
      'Üretimden yönetime farklı kademelerdeki karar vericilerle doğrudan temas kurun.',
  },
  {
    icon: 'ri-user-shared-2-line',
    title: 'B2B Görüşmeler ve Yeni İş Fırsatları',
    description:
      'Planlı B2B görüşmeler ile yeni müşteriler ve iş birlikleri kazanma fırsatı yakalayın.',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Ürün ve Çözümlerinizi Tanıtın',
    description:
      'Çözümlerinizi gerçek sanayi ihtiyaçları üzerinden tanıtın, etkinizi ve değerini gösterin.',
  },
  {
    icon: 'ri-focus-3-line',
    title: 'OSB Bazlı Hedefli Müşteri Erişimi',
    description:
      'OSBlerdeki firmalara doğrudan ulaşarak hedef kitlenize daha etkili erişim sağlayın.',
  },
  {
    icon: 'ri-slideshow-line',
    title: 'Sahne ve Sunum Fırsatları',
    description:
      'Alanında uzmanlığınızı vurgulayın, sahnede çözümlerinizi anlatın.',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Marka Bilinirliği ve Sektörel Konumlandırma',
    description:
      'Sektördeki görünürlüğünüzü artırın, güvenilir çözüm ortağı olarak konumlanın.',
  },
  {
    icon: 'ri-global-line',
    title: 'Dijital ve Sosyal Medya Görünürlüğü',
    description:
      'Web sitesi, sosyal medya ve dijital içeriklerle markanızın görünürlüğünü artırıyoruz.',
  },
  {
    icon: 'ri-link-unlink-m',
    title: 'Yeni Müşteri ve İş Ortaklıkları Geliştirme',
    description:
      'Yeni projeler, stratejik ortaklıklar ve uzun vadeli iş birlikleri geliştirin.',
  },
  {
    icon: 'ri-calendar-event-line',
    title: "Sanayinin Dönüşüm Gündeminde Yer Alın",
    description:
      'Dönüşüm yolculuğunun "çözüm ortağı" olarak ön plana çıkın.',
  },
  {
    icon: 'ri-trophy-line',
    title: 'Rekabet Avantajı Yakalayın',
    description:
      'Rakiplerinizden bir adım önde olarak doğru hedef kitleyle buluşun.',
  },
];

const ecosystemSteps = [
  { icon: 'ri-building-4-line', label: 'SANAYİCİ' },
  { icon: 'ri-community-line', label: 'OSB' },
  { icon: 'ri-cpu-line', label: 'TEKNOLOJİ' },
  { icon: 'ri-exchange-line', label: 'B2B GÖRÜŞMELER' },
];

export default function NedenKatilmaliPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative w-full pt-16 md:pt-[72px]">
        <div className="relative w-full bg-background-950 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Business%20professionals%20networking%20at%20technology%20expo%20with%20holographic%20digital%20icons%20floating%20above%2C%20dark%20navy%20blue%20background%2C%20warm%20orange%20accent%20lighting%2C%20modern%20corporate%20atmosphere%2C%20wide%20angle%20shot%2C%20clean%20futuristic%20style&width=1200&height=500&seq=neden-hero-bg&orientation=landscape"
              alt="B2B Networking"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-950 via-background-950/85 to-background-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-20 lg:py-24">
            <div className="max-w-2xl">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 leading-tight mb-5 md:mb-6">
                Neden Dijital OSB Buluşmaları'nda
                <span className="text-primary-500"> Yer Almalısınız?</span>
              </h1>
              <p className="text-sm md:text-base text-background-300 leading-relaxed mb-6">
                Dijital OSB Buluşmaları, teknoloji ve çözüm sağlayıcı firmaları doğrudan sanayiciler, OSB yönetimleri ve karar vericilerle buluşturan güçlü bir B2B platformudur.
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-primary-500/30 bg-primary-500/10 backdrop-blur-sm">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/20 shrink-0">
                  <i className="ri-vip-crown-line text-primary-500 text-base" />
                </div>
                <span className="text-sm text-primary-400 font-medium">
                  Çözüm Ortaklığı yalnızca logo görünürlüğü değildir.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIZE SUNDUĞUMUZ FIRSATLAR ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-16 bg-background-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50 text-center mb-8 md:mb-12">
            Size Sunduğumuz Fırsatlar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {opportunities.map((item) => (
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

      {/* ─── NEDEN BİZ? (ECOSYSTEM) ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-background-950 border border-background-800">
            {/* Subtle background */}
            <div className="absolute inset-0">
              <img
                src="https://readdy.ai/api/search-image?query=Dark%20navy%20abstract%20technology%20background%20with%20subtle%20grid%20lines%20and%20faint%20glowing%20nodes%2C%20minimal%20clean%20corporate%20style%2C%20very%20low%20opacity&width=1200&height=300&seq=neden-eco-bg&orientation=landscape"
                alt=""
                className="w-full h-full object-cover opacity-15"
              />
            </div>

            <div className="relative p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left text */}
                <div>
                  <span className="inline-block text-xs font-semibold tracking-widest text-primary-500 uppercase mb-3">
                    Neden Biz?
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50 leading-tight mb-3">
                    Çünkü sizi yalnızca bir etkinlik alanına değil, doğrudan iş yapabileceğiniz bir{' '}
                    <span className="text-primary-500">sanayi ekosistemine</span> dahil ediyoruz.
                  </h3>
                </div>

                {/* Right formula */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                  {ecosystemSteps.map((step, idx) => (
                    <div key={step.label} className="flex items-center gap-2 md:gap-3">
                      <div className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border border-background-800 bg-background-900/60">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary-500/10">
                          <i className={`${step.icon} text-primary-500 text-lg md:text-xl`} />
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold text-background-400 tracking-wider text-center">
                          {step.label}
                        </span>
                      </div>
                      {idx < ecosystemSteps.length - 1 && (
                        <span className="text-lg md:text-xl text-primary-500 font-bold">+</span>
                      )}
                    </div>
                  ))}
                  <span className="text-lg md:text-xl text-primary-500 font-bold">=</span>
                  <div className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border border-primary-500/40 bg-primary-500/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary-500">
                      <i className="ri-bar-chart-box-line text-background-50 text-lg md:text-xl" />
                    </div>
                    <span className="text-[10px] md:text-xs font-semibold text-primary-400 tracking-wider text-center">
                      SOMUT İŞ<br />FIRSATLARI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA + IMAGE ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-10 md:py-14 bg-background-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left content */}
            <div className="order-2 lg:order-1">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950 leading-tight mb-4">
                Dijital OSB Buluşmaları'nda yer alın, çözümlerinizi anlatmakla kalmayın;{' '}
                <span className="text-primary-500">yeni müşteriler ve yeni iş birlikleri kazanın.</span>
              </h3>
              <p className="text-sm md:text-base text-foreground-500 mb-6">
                Dijitalleşen üretimin stratejik buluşma noktası.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="/sponsorluk"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg whitespace-nowrap bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors"
                >
                  ÇÖZÜM ORTAĞI OLUN
                  <i className="ri-arrow-right-line ml-2" />
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="order-1 lg:order-2">
              <img
                src="https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/a2a5e473-8194-4ef2-b00b-468fcf6203e7_compressed_1O0A8016-kopyas.webp"
                alt="Fuar Standı"
                className="w-full h-64 md:h-80 object-cover rounded-2xl border border-background-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="w-full px-4 md:px-6 lg:px-10 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-background-950 border border-background-800">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-calendar-check-line text-primary-500 text-sm" />
                </div>
                <span className="font-heading text-xl md:text-2xl font-bold text-background-50">2023</span>
              </div>
              <p className="text-[10px] md:text-xs text-background-400">yılında başladık</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-2-line text-primary-500 text-sm" />
                </div>
                <span className="font-heading text-xl md:text-2xl font-bold text-background-50">28+</span>
              </div>
              <p className="text-[10px] md:text-xs text-background-400">lokasyonda buluştuk</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-team-line text-primary-500 text-sm" />
                </div>
                <span className="font-heading text-xl md:text-2xl font-bold text-background-50">Binlerce</span>
              </div>
              <p className="text-[10px] md:text-xs text-background-400">sanayiciye ulaştık</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-building-4-line text-primary-500 text-sm" />
                </div>
                <span className="font-heading text-xl md:text-2xl font-bold text-background-50">100+</span>
              </div>
              <p className="text-[10px] md:text-xs text-background-400">çözüm ortağı ile iş birliği yaptık</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-exchange-line text-primary-500 text-sm" />
                </div>
                <span className="font-heading text-xl md:text-2xl font-bold text-background-50">Yüzlerce</span>
              </div>
              <p className="text-[10px] md:text-xs text-background-400">yeni iş fırsatı oluşturduk</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}