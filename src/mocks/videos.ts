export type VideoCategory = 'Etkinlik Özeti' | 'Çözüm Ortağı' | 'IoT & Otomasyon' | 'Panel' | 'Başarı Hikayesi' | 'Eğitim';

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
  category: VideoCategory;
  views: string;
  date: string;
  featured?: boolean;
  videoUrl?: string;
}

export const videoCategories: VideoCategory[] = [
  'Etkinlik Özeti',
  'Çözüm Ortağı',
  'IoT & Otomasyon',
  'Panel',
  'Başarı Hikayesi',
  'Eğitim',
];

export const videoBlogs: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Dijital OSB Buluşmaları — Etkinlik Görüntüleri',
    duration: '',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Industrial%20technology%20conference%20stage%20with%20a%20large%20LED%20screen%20showing%20digital%20transformation%20slides%2C%20a%20speaker%20presenting%20on%20stage%2C%20audience%20of%20manufacturing%20professionals%20seated%20in%20a%20modern%20convention%20hall%2C%20deep%20navy%20blue%20and%20cyan%20stage%20lighting%2C%20cinematic%20event%20photography%2C%20high%20detail%2C%20wide%20angle%20composition&width=800&height=450&seq=video-cover-1&orientation=landscape',
    description:
      'Dijital OSB Buluşmaları kapsamında gerçekleşen etkinliklerden özel görüntüler. Katılımcılar, sahnedeki konuşmacılar ve etkinlik atmosferi.',
    category: 'Etkinlik Özeti',
    views: '3.2B',
    date: '18 Ağustos 2026',
    videoUrl:
      'https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/9064fcfc-3720-4a9a-a03a-0ce4d4a16ecc_WhatsApp-Video-2026-08-18-at-15.37.13.mp4',
  },
  {
    id: 'video-2',
    title: 'Dijital OSB Buluşmaları — Saha Kayıtları',
    duration: '',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Modern%20organized%20industrial%20zone%20manufacturing%20facility%20with%20robotic%20automation%20arms%20and%20technology%20demonstration%20booths%2C%20engineers%20in%20safety%20vests%20discussing%20smart%20factory%20solutions%2C%20clean%20high-tech%20production%20environment%2C%20cyan%20and%20deep%20navy%20blue%20ambient%20lighting%2C%20professional%20industrial%20photography%2C%20high%20detail&width=800&height=450&seq=video-cover-2&orientation=landscape',
    description:
      'Dijital OSB Buluşmaları etkinliğinden saha kayıtları. Üretim tesisleri, teknoloji demoları ve organizasyon anları tek videoda.',
    category: 'Etkinlik Özeti',
    views: '2.7B',
    date: '18 Ağustos 2026',
    videoUrl:
      'https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/7c683b1e-fd5b-4951-aefc-af38fa2e10b9_WhatsApp-Video-2026-08-18-at-15.38.33.mp4',
  },
  {
    id: '1',
    title: 'Dijital OSB Buluşmalarında Sizi Neler Bekliyor?',
    duration: '3:24',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Modern%20industrial%20conference%20event%20stage%20with%20large%20LED%20screens%2C%20audience%20of%20business%20professionals%20seated%2C%20dramatic%20deep%20navy%20blue%20and%20cyan%20stage%20lighting%2C%20professional%20event%20photography%2C%20cinematic%20composition%2C%20high%20detail&width=800&height=450&seq=video-thumb-1&orientation=landscape',
    description:
      '2025 yılında 4 şehirde gerçekleşen Dijital OSB Buluşmaları\'nın en özel anları. Katılımcı röportajları, sahnede konuşmacılar ve etkinlik atmosferi tek videoda.',
    category: 'Etkinlik Özeti',
    views: '12.4B',
    date: '12 Aralık 2025',
    featured: true,
    videoUrl:
      'https://storage.helloreaddy.io/project_files/46c5ccc3-db14-417e-a7f8-83863aef8a3c/c273f9e4-b9d1-4a21-a21e-02544b649da1_WhatsApp-Video-2026-08-18-at-15.38.33-1.mp4',
  },
  {
    id: '3',
    title: 'Rotiot IoT Platformu Tanıtımı',
    duration: '4:48',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Industrial%20IoT%20sensors%20network%20in%20modern%20factory%2C%20wireless%20connected%20devices%20with%20cyan%20LED%20indicators%2C%20data%20visualization%20overlay%2C%20clean%20high-tech%20manufacturing%20environment%2C%20professional%20editorial%20photography&width=800&height=450&seq=video-thumb-3&orientation=landscape',
    description:
      'Rotiot endüstriyel IoT platformunun fabrika otomasyonundaki uygulamaları. Sensörlerden veri toplama, gerçek zamanlı izleme ve öngörücü bakım senaryoları.',
    category: 'IoT & Otomasyon',
    views: '6.2B',
    date: '5 Aralık 2025',
  },
  {
    id: '4',
    title: 'Bursa OSB Dijital Dönüşüm Paneli',
    duration: '42:18',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Business%20panel%20discussion%20on%20stage%20with%20industry%20leaders%20seated%20in%20modern%20conference%20hall%2C%20audience%20of%20professionals%2C%20deep%20navy%20blue%20and%20cyan%20ambient%20lighting%2C%20professional%20event%20photography%2C%20wide%20shot&width=800&height=450&seq=video-thumb-4&orientation=landscape',
    description:
      'Bursa Organize Sanayi Bölgesi\'nde gerçekleşen "Üretimde Dijital Dönüşüm" paneli. Sektör liderleri, KOBİ\'lerin dijitalleşme yolculuğundaki fırsatları ve zorlukları tartışıyor.',
    category: 'Panel',
    views: '4.1B',
    date: '2 Aralık 2025',
  },
  {
    id: '5',
    title: 'Otomotivde Endüstri 4.0 Başarı Hikayesi',
    duration: '7:35',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Modern%20automotive%20manufacturing%20facility%20with%20robotic%20arms%20assembling%20vehicles%2C%20cyan%20LED%20lighting%2C%20clean%20high-tech%20production%20line%2C%20deep%20navy%20blue%20tones%2C%20professional%20industrial%20photography&width=800&height=450&seq=video-thumb-5&orientation=landscape',
    description:
      'Bir otomotiv yan sanayi firmasının Endüstri 4.0 dönüşümü: üretim verimliliğini %32 artıran, fire oranlarını yarıya indiren gerçek bir başarı hikayesi.',
    category: 'Başarı Hikayesi',
    views: '5.6B',
    date: '28 Kasım 2025',
  },
  {
    id: '6',
    title: 'Yapay Zeka ile Üretim Optimizasyonu',
    duration: '6:04',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Futuristic%20artificial%20intelligence%20visualization%20over%20industrial%20production%20line%2C%20glowing%20data%20streams%20and%20neural%20networks%2C%20deep%20navy%20blue%20and%20cyan%20color%20scheme%2C%20high-tech%20manufacturing%20concept%2C%20professional%20digital%20art&width=800&height=450&seq=video-thumb-6&orientation=landscape',
    description:
      'Yapay zeka destekli üretim planlama ve kalite kontrol sistemleri. Makine öğrenmesi ile fire tahmini, enerji optimizasyonu ve talep öngörüsü uygulamaları.',
    category: 'IoT & Otomasyon',
    views: '3.9B',
    date: '21 Kasım 2025',
  },
  {
    id: '7',
    title: 'İstanbul OSB Teknoloji Zirvesi Öne Çıkanlar',
    duration: '4:15',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Large%20technology%20summit%20in%20Istanbul%20convention%20center%20with%20massive%20LED%20screen%20and%20packed%20audience%2C%20deep%20navy%20blue%20and%20violet%20stage%20lighting%20with%20cyan%20accents%2C%20professional%20event%20photography%2C%20wide%20angle&width=800&height=450&seq=video-thumb-7&orientation=landscape',
    description:
      'İstanbul\'da gerçekleşen teknoloji zirvesinin en dikkat çeken anları. Yeni ürün tanıtımları, canlı demo gösterimleri ve uzman konuşmacıların öne çıkan mesajları.',
    category: 'Etkinlik Özeti',
    views: '9.3B',
    date: '15 Kasım 2025',
  },
  {
    id: '8',
    title: "KOBİ'ler için Dijitalleşme Rehberi",
    duration: '11:27',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Small%20business%20owner%20reviewing%20digital%20transformation%20dashboard%20on%20tablet%20in%20modern%20factory%20office%2C%20cyan%20data%20visualization%20screens%2C%20clean%20professional%20environment%2C%20deep%20navy%20blue%20tones%2C%20professional%20photography&width=800&height=450&seq=video-thumb-8&orientation=landscape',
    description:
      'KOBİ\'ler dijitalleşmeye nereden başlamalı? Adım adım yol haritası, bütçe planlaması ve devlet teşviklerinden nasıl yararlanabileceğinize dair kapsamlı bir rehber.',
    category: 'Eğitim',
    views: '7.8B',
    date: '8 Kasım 2025',
  },
  {
    id: '9',
    title: 'Enerji Yönetimi ve Sürdürülebilirlik',
    duration: '5:51',
    thumbnail:
      'https://readdy.ai/api/search-image?query=Green%20energy%20and%20sustainability%20concept%20in%20industrial%20setting%2C%20solar%20panels%20and%20wind%20turbine%20near%20modern%20factory%2C%20cyan%20and%20emerald%20green%20accent%20lighting%2C%20clean%20technology%2C%20professional%20photography&width=800&height=450&seq=video-thumb-9&orientation=landscape',
    description:
      'OSB\'ler için sürdürülebilir üretim stratejileri. Yenilenebilir enerji entegrasyonu, karbon ayak izi azaltma ve enerji verimliliği uygulamaları üzerine uzman görüşleri.',
    category: 'Çözüm Ortağı',
    views: '4.4B',
    date: '1 Kasım 2025',
  },
];