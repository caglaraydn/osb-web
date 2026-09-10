export const eventInfo = {
  title: 'Dijital OSB Buluşmaları 2026',
  subtitle: '16 Eylül 2026 / NOSAB Bursa Konferans Salonu',
  description:
    'Üretimde verimliliği arttırmanın yöntemleri için DAVETLİSİNİZ! Sektör profesyonelleri ve OSB\'lerde faaliyet gösteren firma temsilcilerini bir araya getiren 1 günlük eğitim, danışmanlık ve uygulama etkinliği.',
  ctaText: 'KAYIT OLUN',
  ctaUrl: '/katilim-formu',
  date: '2026-09-16',
  location: 'NOSAB Bursa Konferans Salonu',
  stats: [
    { label: 'OSB', value: '58' },
    { label: 'Sanayici', value: '5000+' },
    { label: 'Şehir', value: '7' },
    { label: 'Gün', value: '1' },
  ],
};

export interface EventCity {
  city: string;
  venue: string;
  date: string;
  dateShort: string;
  description: string;
  headline?: string;
  slug?: string;
  year: string;
}

export const eventCities: EventCity[] = [
  // 2026 — Ana etkinlik
  {
    city: 'Bursa',
    venue: 'NOSAB Konferans Salonu',
    date: '16 Eylül 2026',
    dateShort: '16 Eyl',
    headline: 'Otomotiv, makine, tekstil ve savunma sanayinin güçlü üretim merkezi.',
    description: "Bursa'nın üretim gücünü dijital ve yeşil dönüşüm teknolojileriyle buluşturuyoruz.",
    year: '2026',
  },
  // 2027 — 6 şehirlik turne
  {
    city: 'Gebze',
    venue: 'Bilişim Vadisi Konferans Salonu',
    date: '2027',
    dateShort: '2027',
    headline: "Türkiye'nin en yoğun sanayi, teknoloji ve Ar-Ge kümelenmelerinden biri.",
    description: "Gebze'nin yüksek üretim kapasitesini yeni nesil dijital teknolojilerle buluşturuyoruz.",
    slug: 'gebze',
    year: '2027',
  },
  {
    city: 'İzmir',
    venue: 'İzmir Fuar Alanı',
    date: '2027',
    dateShort: '2027',
    headline: "Ege'nin petrokimya, otomotiv, gıda, makine ve enerji üssü.",
    description: "İzmir sanayisinin geleceğini yapay zekâ, otomasyon ve yeşil dönüşümle birlikte şekillendiriyoruz.",
    slug: 'izmir',
    year: '2027',
  },
  {
    city: 'Ankara',
    venue: 'ATO Congresium',
    date: '2027',
    dateShort: '2027',
    headline: 'Savunma, havacılık, elektronik, yazılım ve ileri teknolojinin merkezi.',
    description: "Ankara'nın yüksek teknoloji üretim gücünü dijital dönüşümün yeni nesliyle buluşturuyoruz.",
    slug: 'ankara',
    year: '2027',
  },
  {
    city: 'Bursa',
    venue: 'NOSAB Konferans Salonu',
    date: '2027',
    dateShort: '2027',
    headline: 'Otomotiv, makine, tekstil ve savunma sanayinin güçlü üretim merkezi.',
    description: "Bursa'nın üretim gücünü dijital ve yeşil dönüşüm teknolojileriyle buluşturuyoruz.",
    slug: 'bursa-2027',
    year: '2027',
  },
  {
    city: 'Adana',
    venue: 'Adana Hacı Sabancı OSB Konferans Salonu',
    date: '2027',
    dateShort: '2027',
    headline: "Çukurova'nın tekstil, gıda, kimya, plastik ve makine üretim merkezi.",
    description: "Adana sanayisinin rekabet gücünü dijitalleşme ve sürdürülebilir üretimle artırıyoruz.",
    slug: 'adana',
    year: '2027',
  },
  {
    city: 'Manisa',
    venue: 'Manisa OSB Konferans Salonu',
    date: '2027',
    dateShort: '2027',
    headline: 'Elektronik, beyaz eşya, otomotiv ve makine sanayisinin güçlü üretim üssü.',
    description: "Manisa'nın ihracat odaklı sanayisini akıllı üretim ve yapay zekâ teknolojileriyle buluşturuyoruz.",
    slug: 'manisa',
    year: '2027',
  },
];

export const eventCities2026 = eventCities.filter((city) => city.year === '2026');
export const eventCities2027 = eventCities.filter((city) => city.year === '2027');