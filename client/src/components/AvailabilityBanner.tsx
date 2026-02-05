import { useState, useEffect } from "react";
import { MapPin, Clock, Zap } from "lucide-react";

// Zonas de Chamartín
const ZONES = [
  "El Viso",
  "Prosperidad",
  "Ciudad Jardín",
  "Hispanoamérica",
  "Nueva España",
  "Castilla"
];

export default function AvailabilityBanner() {
  const [currentZone, setCurrentZone] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Rotación de zonas cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentZone((prev) => (prev + 1) % ZONES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Determinar si es horario nocturno (más urgente)
  const hour = new Date().getHours();
  const isNightTime = hour >= 22 || hour < 7;

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-4 relative overflow-hidden">
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

      <div className="container flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base relative z-10">
        {/* Indicador de disponibilidad */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="font-bold hidden sm:inline">
            {isNightTime ? "Guardia nocturna activa" : "Técnico disponible"}
          </span>
          <span className="font-bold sm:hidden">Disponible</span>
        </div>

        <div className="w-px h-4 bg-white/30 hidden sm:block" />

        {/* Zona actual con animación */}
        <div className="flex items-center gap-2 font-bold">
          <MapPin className="h-4 w-4 animate-bounce" />
          <span className="hidden md:inline">Ahora en</span>
          <span
            key={currentZone}
            className="text-yellow-300 font-black animate-fade-in"
          >
            {ZONES[currentZone]}
          </span>
        </div>

        <div className="w-px h-4 bg-white/30 hidden sm:block" />

        {/* Tiempo estimado */}
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-yellow-300" />
          <span className="font-bold">
            <span className="text-yellow-300">15-20 min</span>
            <span className="hidden sm:inline"> de llegada</span>
          </span>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
          aria-label="Cerrar banner"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
