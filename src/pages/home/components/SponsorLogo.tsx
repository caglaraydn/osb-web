import { useState } from 'react';

interface SponsorLogoProps {
  logo: string;
  name: string;
  variant?: 'featured' | 'compact' | 'compact-large';
  invert?: boolean;
}

export default function SponsorLogo({ logo, name, variant = 'compact', invert = false }: SponsorLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!failed && logo) {
    const sizeClass =
      variant === 'featured'
        ? 'h-auto w-auto max-h-16 md:max-h-20 max-w-[170px] md:max-w-[200px] object-contain'
        : variant === 'compact-large'
          ? 'h-auto w-auto max-h-14 md:max-h-16 max-w-[150px] md:max-w-[180px] object-contain'
          : 'h-auto w-auto max-h-11 md:max-h-14 max-w-[120px] md:max-w-[150px] object-contain';

    const effectClass = invert
      ? 'invert opacity-90 transition-opacity duration-300 group-hover:opacity-100'
      : 'opacity-90 transition-opacity duration-300 group-hover:opacity-100';

    return (
      <img
        src={logo}
        alt={name}
        onError={() => setFailed(true)}
        className={`${sizeClass} ${effectClass}`}
      />
    );
  }

  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <span
        className={
          variant === 'featured'
            ? 'w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 font-heading font-bold text-base md:text-lg'
            : 'w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 font-heading font-bold text-sm md:text-base flex-shrink-0'
        }
      >
        {initial}
      </span>
      <span
        className={
          variant === 'featured'
            ? 'font-heading font-bold text-foreground-800 text-base md:text-lg leading-tight text-left'
            : 'font-heading font-semibold text-foreground-800 text-xs md:text-sm leading-tight text-left'
        }
      >
        {name}
      </span>
    </div>
  );
}