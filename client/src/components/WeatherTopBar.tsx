import { useWeather } from "@/hooks/useWeather";
import { Clock, Loader2 } from "lucide-react";
import { APP_LOCATION } from "@/const";

export default function WeatherTopBar() {
  const { temperature, weatherDescription, weatherIcon, isAdverseWeather, loading } = useWeather();

  if (loading) return null;

  const estimatedTime = isAdverseWeather ? "40-50 min" : "20-30 min";

  return (
    <div className={`${isAdverseWeather ? 'bg-orange-600/90' : 'bg-[#001529]'} text-white py-1.5 text-[11px] md:text-xs transition-colors backdrop-blur-sm`}>
      <div className="container flex items-center justify-between opacity-90">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
            <span className="text-sm leading-none">{weatherIcon}</span>
            <span className="font-medium tracking-tight">
              {temperature}°C en {APP_LOCATION}
            </span>
          </div>
          <span className="text-white/60 hidden sm:inline uppercase tracking-widest text-[10px]">
            {weatherDescription}
          </span>
        </div>

        <div className="flex items-center gap-2 font-bold text-[#FF6B35]">
          <Clock className="h-3 w-3" />
          <span className="uppercase tracking-wider">
            Llegada: {estimatedTime}
          </span>
        </div>
      </div>
    </div>
  );
}
