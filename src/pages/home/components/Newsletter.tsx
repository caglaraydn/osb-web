import { useState } from 'react';
import { syncToGoogleSheets } from '@/utils/googleSheets';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get('company_alt') as string;
    if (honeypot && honeypot.trim() !== '') {
      setStatus('success');
      setEmail('');
      return;
    }

    const emailValue = formData.get('email') as string;
    if (!emailValue || !emailValue.includes('@')) {
      setStatus('error');
      setErrorMsg('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    void syncToGoogleSheets('Bülten', formData);

    setStatus('submitting');

    try {
      const response = await fetch('https://readdy.ai/api/form/d9vhceuth95mubjtu850', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as never).toString(),
      });

      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (
        response.ok &&
        parsed?.code === 'OK' &&
        !serverMsg.toLowerCase().includes('spam')
      ) {
        setStatus('success');
        setEmail('');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(serverMsg || 'Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Bağlantı hatası, lütfen tekrar deneyin.');
    }
  };

  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-primary-500">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 flex items-center justify-center bg-background-50/20 rounded-full">
          <i className="ri-notification-3-line text-background-50 text-xl md:text-2xl" />
        </div>
        <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50 mb-2 md:mb-3">
          Heyecan Verici Etkinlikleri Kaçırma!
        </h2>
        <p className="text-sm md:text-base text-background-100/90 max-w-xl mx-auto mb-6 md:mb-8">
          Yeni etkinlik duyuruları, konuşmacı açıklamaları ve sektörel gelişmelerden ilk sen haberdar ol. E-posta listemize abone ol.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          data-readdy-form
          id="newsletter-form"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="company_alt"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
            className="absolute opacity-0 pointer-events-none"
            style={{ left: '-9999px' }}
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') {
                setStatus('idle');
                setErrorMsg('');
              }
            }}
            placeholder="E-posta adresiniz"
            className="w-full sm:flex-1 px-4 py-3 text-sm bg-background-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-background-50/50 text-foreground-950 placeholder:text-foreground-400"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-6 py-3 bg-background-950 text-background-50 font-semibold text-sm rounded-lg hover:bg-background-900 transition-colors whitespace-nowrap disabled:opacity-60"
          >
            {status === 'submitting' ? 'Gönderiliyor...' : 'Abone Ol'}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-background-50">
            <i className="ri-checkbox-circle-line" />
            <span>Başarıyla abone oldunuz!</span>
          </div>
        )}
        {status === 'error' && errorMsg && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-background-100">
            <i className="ri-error-warning-line" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>
    </section>
  );
}