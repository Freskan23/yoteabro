import { useWeather } from "@/hooks/useWeather";
import { Loader2 } from "lucide-react";

export default function WeatherWidget() {
  const { temperature, weatherDescription, weatherIcon, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-300">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm">Cargando tiempo...</span>
      </div>
    );
  }

  if (error) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-gray-300">
      <span className="text-2xl">{weatherIcon}</span>
      <div>
        <p className="text-sm font-semibold">
          {temperature}°C en Chamartín
        </p>
        <p className="text-xs text-gray-400">{weatherDescription}</p>
      </div>
    </div>
  );
}

