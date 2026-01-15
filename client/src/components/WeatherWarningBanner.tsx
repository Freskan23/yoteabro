import { CloudRain, X } from "lucide-react";
import { useState } from "react";
import { useWeather, getWeatherWarningMessage } from "@/hooks/useWeather";

export default function WeatherWarningBanner() {
  const { isAdverseWeather, weatherDescription, loading } = useWeather();
  const [dismissed, setDismissed] = useState(false);

  if (loading || !isAdverseWeather || dismissed) {
    return null;
  }

  const warningMessage = getWeatherWarningMessage(weatherDescription);

  if (!warningMessage) {
    return null;
  }

  return (
    <div className="bg-blue-600 text-white py-3 px-4 relative">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <CloudRain className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm md:text-base font-semibold">
            {warningMessage}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 hover:bg-blue-700 rounded transition-colors"
          aria-label="Cerrar aviso"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

