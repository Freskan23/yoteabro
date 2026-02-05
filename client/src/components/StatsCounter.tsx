import { useEffect, useState, useRef } from "react";
import { Key, Users, Clock, ThumbsUp } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  label: string;
  duration?: number;
}

function StatItem({ icon, endValue, suffix, label, duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-[#EE6C4D]/10 transition-all group"
    >
      <div className="h-16 w-16 rounded-2xl bg-[#EE6C4D]/10 flex items-center justify-center text-[#EE6C4D] mb-4 group-hover:bg-[#EE6C4D] group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="text-5xl font-black text-[#293241] italic tracking-tighter mb-1">
        {isVisible ? (
          <>
            {count.toLocaleString("es-ES")}
            <span className="text-[#EE6C4D]">{suffix}</span>
          </>
        ) : (
          "0"
        )}
      </div>
      <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    {
      icon: <Key className="h-8 w-8" />,
      endValue: 2847,
      suffix: "+",
      label: "Aperturas en Chamartín",
    },
    {
      icon: <Users className="h-8 w-8" />,
      endValue: 1523,
      suffix: "",
      label: "Clientes satisfechos",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      endValue: 18,
      suffix: " min",
      label: "Tiempo medio llegada",
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      endValue: 98,
      suffix: "%",
      label: "Recomendaciones",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-[#EE6C4D] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Nuestra trayectoria
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#293241] uppercase italic tracking-tighter">
            Números que <span className="text-[#EE6C4D]">hablan</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              duration={2000 + index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
