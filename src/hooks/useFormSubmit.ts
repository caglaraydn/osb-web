import { useState, type FormEvent } from 'react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useFormSubmit(submitUrl: string, honeypotName = 'company_alt') {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get(honeypotName) as string;
    if (honeypot && honeypot.trim() !== '') {
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as never).toString(),
      });

      const responseText = await response.text();
      let parsed: {
        code?: string;
        message?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (response.ok && parsed?.code === 'OK' && !serverMsg.toLowerCase().includes('spam')) {
        setStatus('success');
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

  return { status, errorMsg, handleSubmit };
}