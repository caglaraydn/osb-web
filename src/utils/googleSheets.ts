import { supabase } from '@/lib/supabase';

function getField(formData: FormData, name: string): string {
  const values = formData
    .getAll(name)
    .filter((v): v is string => typeof v === 'string' && v.trim() !== '');
  return values.join(', ');
}

export async function syncToGoogleSheets(formSource: string, formData: FormData): Promise<void> {
  const payload = {
    form: formSource,
    name: getField(formData, 'name'),
    email: getField(formData, 'email'),
    phone: getField(formData, 'phone'),
    company: getField(formData, 'company'),
    title: getField(formData, 'title'),
    sehir: getField(formData, 'sehir'),
    sector: getField(formData, 'sector'),
    topics: getField(formData, 'topics'),
    subject: getField(formData, 'subject'),
    category: getField(formData, 'category'),
    events: getField(formData, 'events'),
    message: getField(formData, 'message'),
  };

  try {
    const { data, error } = await supabase.functions.invoke('sync-google-sheets', { body: payload });
    if (error) {
      console.error('[GoogleSheetsSync] Invoke error:', error);
      return;
    }
    console.log('[GoogleSheetsSync] Google response:', data);
  } catch (err) {
    console.error('[GoogleSheetsSync] Sync failed:', err);
  }
}