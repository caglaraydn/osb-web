export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/dijital-osb-bulu%C5%9Fmalar%C4%B1-hyf-fuarc%C4%B1l%C4%B1k-a-%C5%9F-82b2bb265/' },
    { name: 'Instagram', icon: 'ri-instagram-line', url: 'https://www.instagram.com/dijitalosbbulusmalari/' },
    { name: 'YouTube', icon: 'ri-youtube-fill', url: 'https://www.youtube.com/@dijitalosbbulusmalari' },
  ];

  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Sanayici Ne Bulur', href: '#etkinlikler' },
    { name: 'Çözüm Ortaklarımız', href: '#cozum-ortaklari' },
    { name: 'Etkinlik Takvimi', href: '/etkinlikler' },
    { name: 'Dijital OSB TV', href: '/videolar' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  const forIndustry = [
    { name: 'İhtiyaç Alanları', href: '#' },
    { name: 'Teşvik & Finansman', href: '#' },
    { name: 'B2B Görüşmeler', href: '#' },
    { name: 'Sık Sorulan Sorular', href: '#' },
  ];

  const forPartners = [
    { name: 'Çözüm Ortağı Ol', href: '/sponsorluk' },
    { name: 'Sponsorluk Seçenekleri', href: '/sponsorluk' },
    { name: 'Neden Katılmalısınız?', href: '/neden-katilmali' },
    { name: 'Katılım Paketleri', href: '/sponsorluk' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <footer className="w-full bg-background-950 border-t border-background-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-3">
              <img
                src="https://public.readdy.ai/ai/img_res/edbc755c-a02e-4d16-adcb-8599a0fc2483.png"
                alt="Dijital OSB Buluşmaları"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-background-400 leading-relaxed mb-4">
              Dijitalleşen üretimin stratejik buluşma noktası.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-background-900 hover:bg-primary-500 text-background-400 hover:text-background-50 transition-colors"
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-xs md:text-sm text-background-200 uppercase tracking-wider mb-3 md:mb-4">
              Hızlı Menü
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-background-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Industry */}
          <div>
            <h4 className="font-heading font-semibold text-xs md:text-sm text-background-200 uppercase tracking-wider mb-3 md:mb-4">
              Sanayiciler İçin
            </h4>
            <ul className="space-y-2">
              {forIndustry.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-background-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="font-heading font-semibold text-xs md:text-sm text-background-200 uppercase tracking-wider mb-3 md:mb-4">
              Çözüm Ortakları
            </h4>
            <ul className="space-y-2">
              {forPartners.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-background-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-xs md:text-sm text-background-200 uppercase tracking-wider mb-3 md:mb-4">
              İletişim
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-xs md:text-sm text-background-400">
                <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-mail-line text-primary-500" />
                </div>
                <a href="mailto:info@hyf.com.tr" className="hover:text-primary-400 transition-colors">
                  info@hyf.com.tr
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm text-background-400">
                <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-phone-line text-primary-500" />
                </div>
                <a href="tel:+905323357178" className="hover:text-primary-400 transition-colors">
                  +90 532 335 71 78
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm text-background-400">
                <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-primary-500" />
                </div>
                <span>Söğütözü, Koç Kuleleri K:1 A Blok Çankaya, Ankara</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-background-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-background-500 text-center sm:text-left">
            &copy; 2026 Dijital OSB Buluşmaları. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-3 text-xs text-background-500">
            <a href="#" className="hover:text-background-300 transition-colors">
              KVKK
            </a>
            <span>|</span>
            <a href="#" className="hover:text-background-300 transition-colors">
              Gizlilik Politikası
            </a>
            <span>|</span>
            <a href="#" className="hover:text-background-300 transition-colors">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}