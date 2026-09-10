import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'ANA SAYFA', href: '/' },
  { label: 'DİJİTAL OSB NEDİR?', href: '/hakkimizda' },
  { label: 'SANAYİCİ NE BULUR', href: '/sanayiciler-icin' },
  { label: 'ÇÖZÜM ORTAKLARINA FAYDASI', href: '/neden-katilmali' },
  { label: 'İLETİŞİM', href: '/iletisim' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'border-background-800 bg-background-950/95 backdrop-blur-md' : 'border-background-800/50 bg-background-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="https://public.readdy.ai/ai/img_res/86f64f46-f743-49fb-9a1e-612c2e59e651.png"
              alt="Dijital OSB Buluşmaları"
              className="h-11 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap text-background-300 hover:text-background-50 hover:bg-background-50/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="/katilim-formu"
              className="hidden sm:inline-flex px-4 md:px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap bg-primary-500 text-background-50 hover:bg-primary-600"
            >
              KAYIT OL
            </a>
            <a
              href="/sponsorluk"
              className="hidden md:inline-flex px-4 md:px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap border border-background-600 text-background-300 hover:text-background-50 hover:border-background-400"
            >
              ÇÖZÜM ORTAĞI OL
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-background-50/10 transition-colors"
              aria-label="Menü"
            >
              <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-background-50 text-xl`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background-950 border-t border-background-800 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-background-300 hover:text-background-50 hover:bg-background-50/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="/katilim-formu"
              className="block w-full text-center px-4 py-2.5 font-semibold rounded-lg bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors"
            >
              KAYIT OL
            </a>
            <a
              href="/sponsorluk"
              className="block w-full text-center px-4 py-2.5 font-semibold rounded-lg border border-background-600 text-background-300 hover:text-background-50 hover:border-background-400 transition-colors"
            >
              ÇÖZÜM ORTAĞI OL
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}