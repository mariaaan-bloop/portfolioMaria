import { useEffect, useState, type ReactNode } from 'react';

interface Props {
  images: string[];
  alt: string;
  interval?: number;
  offset?: number;
  className?: string;
  children?: ReactNode;
}

/** Slider otomatis: crossfade, pause saat hover, dots klikable, foto tidak pernah ter-crop. */
export default function ImageSlider({ images, alt, interval = 3500, offset = 0, className = '', children }: Props) {
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (images.length < 2 || hover || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const next = () => setIdx((v) => (v + 1) % images.length);
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      next();
      timer = setInterval(next, interval);
    }, offset);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [images.length, hover, interval, offset]);

  return (
    <div
      className={`relative overflow-hidden bg-[#24152F] ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {images.map((src, n) => (
        <div
          key={src}
          aria-hidden={n !== idx}
          className={`absolute inset-0 transition-opacity duration-700 ${n === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-40" loading="lazy" />
          <img src={src} alt={`${alt} (${n + 1}/${images.length})`} className="relative w-full h-full object-contain" loading={n ? 'lazy' : 'eager'} />
        </div>
      ))}
      {children}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 right-3 z-10 flex gap-1.5">
          {images.map((_, n) => (
            <button
              key={n}
              aria-label={`Foto ${n + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(n);
              }}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${n === idx ? 'w-5 bg-[#E9C7D4]' : 'w-1.5 bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
