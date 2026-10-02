import { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  distance: number;
  length: number;
  opacity: number;
  color: string;
}

export default function ClickSpark({
  sparkColor = '#C98FA8',
  sparkSize = 10,
  sparkRadius = 24,
  sparkCount = 8,
  duration = 450,
}: {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<{ sparks: Spark[]; startTime: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = [sparkColor, '#6D4AFF', '#E9C7D4', '#F8F5F2'];

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const newSparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        const angle = (i * 2 * Math.PI) / sparkCount + (Math.random() - 0.5) * 0.4;
        newSparks.push({
          x,
          y,
          angle,
          speed: sparkRadius / (duration / 16),
          distance: 0,
          length: sparkSize * (0.8 + Math.random() * 0.5),
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      sparksRef.current.push({
        sparks: newSparks,
        startTime: performance.now(),
      });
    };

    window.addEventListener('pointerdown', handleClick);

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((group) => {
        const elapsed = time - group.startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        if (progress >= 1) return false;

        group.sparks.forEach((spark) => {
          const currentDist = spark.speed * (elapsed / 16);
          const startX = spark.x + Math.cos(spark.angle) * currentDist;
          const startY = spark.y + Math.sin(spark.angle) * currentDist;
          const endX = spark.x + Math.cos(spark.angle) * (currentDist + spark.length * (1 - progress));
          const endY = spark.y + Math.sin(spark.angle) * (currentDist + spark.length * (1 - progress));

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = spark.color;
          ctx.lineWidth = 2 * (1 - progress);
          ctx.globalAlpha = 1 - easeOutProgress;
          ctx.lineCap = 'round';
          ctx.shadowColor = spark.color;
          ctx.shadowBlur = 6;
          ctx.stroke();
          ctx.restore();
        });

        return true;
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handleClick);
      cancelAnimationFrame(animId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
