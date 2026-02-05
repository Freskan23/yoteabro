import { useState } from "react";
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { Link } from "wouter";

interface Zone {
  id: string;
  name: string;
  arrivalTime: string;
  description: string;
  url: string;
  coordinates: { top: string; left: string };
}

const zones: Zone[] = [
  {
    id: "el-viso",
    name: "El Viso",
    arrivalTime: "12-15 min",
    description: "Zona residencial premium con acceso rápido",
    url: "/cerrajeros-el-viso",
    coordinates: { top: "25%", left: "45%" },
  },
  {
    id: "prosperidad",
    name: "Prosperidad",
    arrivalTime: "15-18 min",
    description: "Cobertura total incluyendo López de Hoyos",
    url: "/cerrajeros-prosperidad",
    coordinates: { top: "40%", left: "65%" },
  },
  {
    id: "ciudad-jardin",
    name: "Ciudad Jardín",
    arrivalTime: "18-22 min",
    description: "Técnico permanente en la zona",
    url: "/cerrajeros-ciudad-jardin",
    coordinates: { top: "55%", left: "80%" },
  },
  {
    id: "hispanoamerica",
    name: "Hispanoamérica",
    arrivalTime: "10-15 min",
    description: "Zona céntrica con respuesta ultrarrápida",
    url: "/cerrajeros-hispanoamerica",
    coordinates: { top: "60%", left: "35%" },
  },
  {
    id: "nueva-espana",
    name: "Nueva España",
    arrivalTime: "15-20 min",
    description: "Cobertura completa hasta Pío XII",
    url: "/cerrajeros-nueva-espana",
    coordinates: { top: "35%", left: "20%" },
  },
  {
    id: "castilla",
    name: "Castilla",
    arrivalTime: "18-22 min",
    description: "Acceso directo desde Plaza Castilla",
    url: "/cerrajeros-castilla",
    coordinates: { top: "15%", left: "30%" },
  },
];

export default function InteractiveCoverageMap() {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#293241] text-white overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EE6C4D] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Mapa de Cobertura
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
            ¿En qué <span className="text-[#EE6C4D]">zona</span> estás?
          </h2>
          <p className="text-xl text-gray-400">
            Haz clic en tu barrio y descubre cuánto tardamos en llegar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mapa visual */}
          <div className="relative aspect-square max-w-lg mx-auto w-full">
            {/* Fondo del mapa */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
              {/* Patrón de fondo */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, #EE6C4D 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Líneas decorativas simulando calles */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                <line x1="0" y1="30" x2="100" y2="30" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="70" x2="100" y2="70" stroke="white" strokeWidth="0.5" />
                <line x1="30" y1="0" x2="30" y2="100" stroke="white" strokeWidth="0.5" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
                <line x1="70" y1="0" x2="70" y2="100" stroke="white" strokeWidth="0.5" />
              </svg>

              {/* Puntos de las zonas */}
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
                    selectedZone?.id === zone.id ? "scale-125" : "hover:scale-110"
                  }`}
                  style={{ top: zone.coordinates.top, left: zone.coordinates.left }}
                >
                  {/* Efecto de pulso */}
                  <span
                    className={`absolute inset-0 rounded-full bg-[#EE6C4D] animate-ping ${
                      selectedZone?.id === zone.id || hoveredZone === zone.id
                        ? "opacity-40"
                        : "opacity-0"
                    }`}
                  />

                  {/* Pin */}
                  <div
                    className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
                      selectedZone?.id === zone.id
                        ? "bg-[#EE6C4D]"
                        : "bg-white/20 hover:bg-[#EE6C4D]/80"
                    }`}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>

                  {/* Etiqueta */}
                  <span
                    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold transition-opacity ${
                      hoveredZone === zone.id || selectedZone?.id === zone.id
                        ? "opacity-100"
                        : "opacity-60"
                    }`}
                  >
                    {zone.name}
                  </span>
                </button>
              ))}

              {/* Centro de operaciones */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: "50%", left: "50%" }}
              >
                <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-green-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[10px] text-green-400 font-bold whitespace-nowrap">
                  Base yoteabro
                </span>
              </div>
            </div>
          </div>

          {/* Panel de información */}
          <div className="space-y-6">
            {selectedZone ? (
              <div className="bg-white/5 rounded-3xl border border-white/10 p-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-[#EE6C4D] flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                      {selectedZone.name}
                    </h3>
                    <p className="text-gray-400">{selectedZone.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-2xl p-4 text-center">
                    <Clock className="h-6 w-6 text-[#EE6C4D] mx-auto mb-2" />
                    <p className="text-3xl font-black text-white">{selectedZone.arrivalTime}</p>
                    <p className="text-xs text-gray-400">Tiempo estimado</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <p className="text-lg font-bold text-white">Disponible</p>
                    <p className="text-xs text-gray-400">Técnico en la zona</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-[#EE6C4D] hover:bg-[#d85c3d] text-white font-black py-6 rounded-2xl"
                  >
                    <a href={`tel:${APP_PHONE}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Llamar ahora: {APP_PHONE_DISPLAY}
                    </a>
                  </Button>

                  <Link
                    href={selectedZone.url}
                    className="block w-full text-center py-3 text-gray-400 hover:text-white font-bold transition-colors"
                  >
                    Ver más sobre {selectedZone.name} →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 rounded-3xl border border-white/10 p-8 text-center">
                <MapPin className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  Selecciona tu zona en el mapa
                </h3>
                <p className="text-gray-500">
                  Haz clic en cualquier punto para ver el tiempo estimado de llegada
                </p>
              </div>
            )}

            {/* Lista de zonas alternativa */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`p-3 rounded-xl text-left text-sm font-bold transition-all ${
                    selectedZone?.id === zone.id
                      ? "bg-[#EE6C4D] text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {zone.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
