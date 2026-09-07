import { useEffect, useState } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { eventCities } from '@/mocks/events';

const FORM_URL = 'https://readdy.ai/api/form/da2lro3d3r93mn1k3bog';

const jobTitles = [
  'Firma Sahibi / Yönetim Kurulu',
  'Genel Müdür',
  'Fabrika Müdürü',
  'Üretim Müdürü',
  'Kalite Müdürü',
  'Satın Alma / Tedarik Müdürü',
  'Teknik Müdür / Mühendis',
  'IT / Dijital Dönüşüm Yöneticisi',
  'Diğer',
];

const interestTopics = [
  'ERP & Kurumsal Kaynak Planlama',
  'MES & Üretim Yönetim Sistemleri',
  'CRM & Satış Yönetimi',
  'Endüstri 4.0 & Dijital Dönüşüm',
  'Akıllı Fabrika & IoT',
  'Otomasyon & Robotik',
  'Yapay Zeka & Makine Öğrenmesi',
  'Büyük Veri & Veri Analitiği',
  'Bulut Bilişim & Dijital Altyapı',
  'Enerji Verimliliği',
  'Yenilenebilir Enerji',
  'Siber Güvenlik',
  'Kalite Yönetimi & Standartlar',
  'Tedarik Zinciri & Lojistik',
  'Sürdürülebilirlik & Karbon Yönetimi',
  'Finansman & Devlet Teşvikleri',
  'İnsan Kaynakları & Yetenek Yönetimi',
  'Ar-Ge & İnovasyon',
  'Bakım & Arıza Yönetimi',
  'İş Sağlığı & Güvenliği',
];

const sectors = [
  'Otomotiv & Yan Sanayi',
  'Makine & Ekipman İmalatı',
  'Metal & Çelik',
  'Döküm & Metal Şekillendirme',
  'Elektrik & Elektronik',
  'Beyaz Eşya',
  'Savunma & Havacılık',
  'Kimya & Petrokimya',
  'Plastik & Kauçuk',
  'İlaç & Sağlık Ürünleri',
  'Medikal Cihaz & Ekipman',
  'Gıda & İçecek',
  'Tarım & Hayvancılık',
  'Tekstil & Hazır Giyim',
  'Deri & Ayakkabı',
  'Mobilya & Ahşap',
  'Kağıt & Ambalaj',
  'Cam & Seramik',
  'Çimento & Yapı Malzemeleri',
  'İnşaat & Altyapı',
  'Maden & Doğal Kaynaklar',
  'Enerji & Petrol',
  'Yenilenebilir Enerji',
  'Lojistik & Taşımacılık',
  'Bilişim & Yazılım',
  'Telekomünikasyon',
  'Basım & Yayın',
  'Mücevher & Değerli Maden',
  'Kozmetik & Kişisel Bakım',
  'Diğer',
];

interface RegistrationFormProps {
  preselectedCityValue?: string;
}

export default function RegistrationForm({ preselectedCityValue = '' }: RegistrationFormProps) {
  const { status, errorMsg, handleSubmit } = useFormSubmit(FORM_URL);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState(preselectedCityValue);

  useEffect(() => {
    setSelectedCity(preselectedCityValue);
  }, [preselectedCityValue]);

  useEffect(() => {
    if (status === 'success') {
      setSelectedTopics([]);
      setTopicsOpen(false);
      setSelectedCity(preselectedCityValue);
    }
  }, [status, preselectedCityValue]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <section id="kayit" className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-10 bg-background-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-primary-500 rounded-lg">
            <i className="ri-user-add-line text-background-50 text-xl" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-950 mb-2">
            Kayıt Formu
          </h2>
          <p className="text-sm text-foreground-600 max-w-xl mx-auto leading-relaxed">
            Aşağıdaki bilgileri doldurun, ekibimiz size etkinlik detaylarıyla dönüş yapsın.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          id="sanayici-kayit-form"
          data-readdy-form
          className="bg-background-50 rounded-xl border border-background-200/70 p-6 md:p-8"
        >
          <input
            type="text"
            name="company_alt"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
            className="offscreen-field"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
                Ad Soyad
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Adınız Soyadınız"
                className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-foreground-950 placeholder:text-foreground-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
                E-posta
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="ornek@firma.com"
                className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-foreground-950 placeholder:text-foreground-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+90 5xx xxx xx xx"
                className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-foreground-950 placeholder:text-foreground-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
                Firma Adı
              </label>
              <input
                type="text"
                name="company"
                placeholder="Firmanızın adı"
                className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-foreground-950 placeholder:text-foreground-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
                Görev / Ünvan
              </label>
              <select
                name="title"
                className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-foreground-950"
              >
                <option value="">Ünvan seçin</option>
                {jobTitles.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
                Katılmak İstediğiniz Şehir
              </label>
              <select
                name="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-foreground-950"
              >
                <option value="">Şehir seçin</option>
                {eventCities.map((city) => (
                  <option key={`${city.year}-${city.city}`} value={`${city.city} - ${city.year}`}>
                    {city.city} - {city.date}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
                Sektör
              </label>
              <select
                name="sector"
                className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-foreground-950"
              >
                <option value="">Sektör seçin</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-foreground-700 mb-1.5">
              Hangi Konularla İlgileniyorsunuz?
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setTopicsOpen((open) => !open)}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-left"
              >
                <span className={selectedTopics.length ? 'text-foreground-950' : 'text-foreground-400'}>
                  {selectedTopics.length > 0
                    ? `${selectedTopics.length} konu seçildi`
                    : 'İlgilendiğiniz konuları seçin'}
                </span>
                <i
                  className={`ri-arrow-down-s-line text-foreground-500 text-base transition-transform ${topicsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {topicsOpen && (
                <div className="mt-2 w-full border border-background-200 rounded-lg bg-background-50 p-2 max-h-64 overflow-y-auto">
                  {interestTopics.map((topic) => (
                    <label
                      key={topic}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-md cursor-pointer hover:bg-background-100 text-sm text-foreground-800 transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="topics"
                        value={topic}
                        checked={selectedTopics.includes(topic)}
                        onChange={() => toggleTopic(topic)}
                        className="w-4 h-4 accent-primary-500 rounded cursor-pointer"
                      />
                      <span>{topic}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <label className="flex items-start gap-2.5 mb-4 cursor-pointer">
            <input
              type="checkbox"
              name="kvkk"
              required
              className="mt-0.5 w-4 h-4 accent-primary-500 rounded cursor-pointer flex-shrink-0"
            />
            <span className="text-xs text-foreground-600 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, yukarıda
              paylaştığım kişisel verilerimin etkinlik kayıt ve bilgilendirme süreçleri için
              işlenmesini <span className="font-semibold text-foreground-800">kabul ediyorum</span>.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full px-6 py-3 bg-primary-500 text-background-50 font-semibold text-sm md:text-base rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap disabled:opacity-60"
          >
            {status === 'submitting' ? 'Gönderiliyor...' : 'Kayıt Ol'}
          </button>

          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary-600">
              <i className="ri-checkbox-circle-line" />
              <span>Başvurunuz alındı, teşekkürler! En kısa sürede size dönüş yapacağız.</span>
            </div>
          )}
          {status === 'error' && errorMsg && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-600">
              <i className="ri-error-warning-line" />
              <span>{errorMsg}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}