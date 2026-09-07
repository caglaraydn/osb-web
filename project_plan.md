# Dijital OSB Buluşmaları - Etkinlik ve Haber Platformu

## 1. Proje Açıklaması
Dijital OSB Buluşmaları etkinliği için etkinlik odaklı haber ve içerik platformu. Sanayi dijital dönüşümü, akıllı fabrikalar, enerji verimliliği ve endüstriyel teknoloji konularında güncel haberler, etkinlik bilgileri ve sponsor içeriklerini sunan, responsive bir web sitesi. Etkinlik takvimi ve kayıt bilgileri ön planda, haber içerikleri destekleyici rolde. Hedef kitle: sanayiciler, OSB yöneticileri, teknoloji sağlayıcıları ve akademisyenler.

## 2. Sayfa Yapısı
- `/` - Ana Sayfa (etkinlik takvimi, etkinlik detayı, haber akışı, sponsorlar, kategori menüsü, arama)
- `/haber/:id` - Haber Detay Sayfası
- `/kategori/:slug` - Kategori Haber Listesi
- `/katilim-formu` - Etkinlik Kayıt Sayfası
- `/iletisim` - İletişim Sayfası

## 3. Temel Özellikler
- [x] Ana sayfa etkinlik takvimi (4 şehir kartı)
- [x] Etkinlik bilgisi bölümü (istatistikler, şehir rozetleri, CTA)
- [x] Ana sayfa haber akışı (kategorili, kart bazlı)
- [x] Kategori menüsü (navigasyon)
- [x] Arama çubuğu (canlı filtreleme)
- [x] Sosyal medya bağlantıları (nav + footer)
- [x] Sponsorlar bölümü
- [x] Responsive tasarım (desktop + mobile)
- [x] Öne çıkan haberler (hero kartlar)
- [x] Güncel içeriklerde görsel vurgular

## 4. Veri Modeli
Şu an için mock data kullanılacak. Gerekirse ileride Supabase backend eklenebilir.

### Mock Veri Yapısı
- `news` - haber listesi (id, title, summary, category, image, date, featured)
- `categories` - kategoriler (id, name, slug, icon)
- `sponsors` - sponsorlar (id, name, logo, url, tier)
- `eventInfo` - ana etkinlik bilgileri (title, subtitle, description, date, location, stats)
- `eventCities` - çok şehirli etkinlik takvimi (city, venue, date, description)

## 5. Backend / Üçüncü Taraf Entegrasyon Planı
- Supabase: Şu an gerek yok, ileride haber yönetimi için düşünülebilir
- Resend: İletişim formu için ileride
- Diğer: Şu an yok

## 6. Geliştirme Faz Planı

### Phase 1: Ana Sayfa Tasarımı
- Hedef: Ana sayfa tüm bölümlerle tamamlandı
- Çıktı: Navbar, Hero banner, Etkinlik Takvimi, Etkinlik detay, Haber akışı, Sponsorlar, Footer

### Phase 2: Haber Detay ve Kategori Sayfaları
- Hedef: Haber detay ve kategori filtreleme sayfaları
- Çıktı: `/haber/:id` ve `/kategori/:slug` sayfaları, arama sonuçları

### Phase 3: Animasyonlar ve İyileştirmeler
- Hedef: Sayfa geçiş animasyonları, hover efektleri, performans optimizasyonu
- Çıktı: Düzgün animasyonlar, mobile menü iyileştirmeleri