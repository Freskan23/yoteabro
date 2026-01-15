import { useWeather } from "@/hooks/useWeather";
import { Clock, Loader2 } from "lucide-react";
import { APP_LOCATION } from "@/const";

export default function WeatherTopBar() {
  const { temperature, weatherDescription, weatherIcon, isAdverseWeather, loading } = useWeather();

  if (loading) {
    return (
      <div className="bg-gray-800 text-white py-2 text-center text-xs md:text-sm">
        <div className="container flex items-center justify-center gap-2">
          <Loader2 className="h-3 w-3 animate-spin" />
          <span>Calculando tiempo de llegada...</span>
        </div>
      </div>
    );
  }

  const estimatedTime = isAdverseWeather ? "40-50 min" : "20-30 min";
  const message = isAdverseWeather
    ? `Condiciones adversas detectadas en ${APP_LOCATION}`
    : `Tiempo actual en ${APP_LOCATION}`;

  return (
    <div className={`${isAdverseWeather ? 'bg-orange-600' : 'bg-gray-800'} text-white py-2 text-center text-xs md:text-sm transition-colors`}>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-base">{weatherIcon}</span>
          <span className="font-medium">
            {message}: {temperature}°C {weatherDescription}
          </span>
        </div>
        <span className="hidden md:inline text-gray-300">•</span>
        <div className="flex items-center gap-2">
          <Clock className="h-3 w-3" />
          <span className="font-semibold">
            Llegada estimada: {estimatedTime}
          </span>
        </div>
      </div>
    </div>
  );
}
