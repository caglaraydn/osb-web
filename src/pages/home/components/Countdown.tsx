import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calc = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const items = [
    { label: 'Gün', value: timeLeft.days },
    { label: 'Saat', value: timeLeft.hours },
    { label: 'Dakika', value: timeLeft.minutes },
    { label: 'Saniye', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center min-w-[64px] md:min-w-[84px] px-3 py-2 md:px-4 md:py-3 bg-background-50/15 backdrop-blur-sm border border-background-50/25 rounded-lg"
        >
          <span className="font-heading text-2xl md:text-3xl font-bold text-background-50 tabular-nums">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs text-background-100/80 uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}