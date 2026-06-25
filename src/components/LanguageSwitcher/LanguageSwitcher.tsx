'use client';

import { useLocale } from 'next-intl';
import { startTransition } from 'react';
import { routing, usePathname, useRouter } from '@/src/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale as 'en' | 'ru' });
    });
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
