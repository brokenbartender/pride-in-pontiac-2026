import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const padZero = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 md:gap-8 items-center mt-6">
      <div className="flex flex-col items-center">
        <span className="font-serif font-black text-3xl md:text-5xl text-pride-gold-light">{padZero(timeLeft.days)}</span>
        <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-widest text-pride-white/60 mt-1">Days</span>
      </div>
      <span className="font-serif font-black text-2xl md:text-4xl text-pride-white/20 mb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="font-serif font-black text-3xl md:text-5xl text-pride-gold-light">{padZero(timeLeft.hours)}</span>
        <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-widest text-pride-white/60 mt-1">Hours</span>
      </div>
      <span className="font-serif font-black text-2xl md:text-4xl text-pride-white/20 mb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="font-serif font-black text-3xl md:text-5xl text-pride-gold-light">{padZero(timeLeft.minutes)}</span>
        <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-widest text-pride-white/60 mt-1">Mins</span>
      </div>
      <span className="font-serif font-black text-2xl md:text-4xl text-pride-white/20 mb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="font-serif font-black text-3xl md:text-5xl text-pride-gold-light">{padZero(timeLeft.seconds)}</span>
        <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-widest text-pride-white/60 mt-1">Secs</span>
      </div>
    </div>
  );
}
