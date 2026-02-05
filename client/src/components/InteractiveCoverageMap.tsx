import { useState, useMemo } from 'react';
import { X, Clock, MapPin, Phone, Navigation, Zap } from 'lucide-react';
import { APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { Link } from "wouter";

// --- DATOS Y CONFIGURACIÓN ---

const CHAMARTIN_BARRIOS = [
  {
    id: 'castilla',
    name: 'Castilla',
    time: '25 min',
    distance: '4.2 km',
    price_factor: 'Estándar',
    base_proximity: 40,
    desc: 'Zona Norte / Plaza de Castilla. Acceso rápido por M-30.',
    url: '/cerrajeros-castilla',
    cx: 240, cy: 120
  },
  {
    id: 'nueva_espana',
    name: 'Nueva España',
    time: '20 min',
    distance: '3.1 km',
    price_factor: 'Estándar',
    base_proximity: 60,
    desc: 'Zona Pio XII. Llegamos en moto para evitar tráfico.',
    url: '/cerrajeros-nueva-espana',
    cx: 250, cy: 260
  },
  {
    id: 'hispanoamerica',
    name: 'Hispanoamérica',
    time: '15 min',
    distance: '1.8 km',
    price_factor: 'Mínimo',
    base_proximity: 80,
    desc: 'Zona Bernabéu. Un técnico disponible cerca.',
    url: '/cerrajeros-hispanoamerica',
    cx: 250, cy: 390
  },
  {
    id: 'el_viso',
    name: 'El Viso',
    time: '12 min',
    distance: '1.2 km',
    price_factor: 'Mínimo',
    base_proximity: 90,
    desc: 'Servicio prioritario en zona República Argentina.',
    url: '/cerrajeros-el-viso',
    cx: 160, cy: 520
  },
  {
    id: 'ciudad_jardin',
    name: 'Ciudad Jardín',
    time: '10 min',
    distance: '0.8 km',
    price_factor: 'Mínimo',
    base_proximity: 100,
    desc: '¡Muy cerca! Nuestra base operativa está aquí.',
    url: '/cerrajeros-ciudad-jardin',
    cx: 280, cy: 490
  },
  {
    id: 'prosperidad',
    name: 'Prosperidad',
    time: '12 min',
    distance: '1.1 km',
    price_factor: 'Mínimo',
    base_proximity: 95,
    desc: 'Llegada inmediata por López de Hoyos.',
    url: '/cerrajeros-prosperidad',
    cx: 370, cy: 550
  },
];

const BARRIO_PATHS: Record<string, string> = {
  castilla: "M 185 20 C 220 15, 260 10, 300 15 L 305 60 L 300 120 C 295 150, 285 180, 280 200 L 165 190 L 175 100 Z",
  nueva_espana: "M 165 190 L 280 200 C 290 230, 310 280, 335 310 L 320 320 L 145 305 L 155 250 Z",
  hispanoamerica: "M 145 305 L 320 320 C 330 350, 345 390, 360 440 L 240 450 L 130 440 L 140 350 Z",
  el_viso: "M 130 440 L 220 445 L 215 580 L 120 570 L 125 500 Z",
  ciudad_jardin: "M 220 445 L 240 450 L 300 445 L 330 490 L 230 540 L 215 520 Z",
  prosperidad: "M 300 445 L 360 440 C 380 480, 400 520, 410 550 L 380 620 L 230 540 L 330 490 Z",
};

const BRAND = {
  orange: '#EE6C4D',
  panelBg: '#293241',
  darkBg: '#1e2532',
};

// --- COMPONENTE ---

interface Barrio {
  id: string;
  name: string;
  time: string;
  distance: string;
  price_factor: string;
  base_proximity: number;
  desc: string;
  url: string;
  cx: number;
  cy: number;
}

export default function InteractiveCoverageMap() {
  const [selectedBarrio, setSelectedBarrio] = useState<string | null>(null);
  const [hoveredBarrio, setHoveredBarrio] = useState<Barrio | null>(null);

  const getDistrictInfo = useMemo(() => {
    return CHAMARTIN_BARRIOS.find(d => d.id === selectedBarrio);
  }, [selectedBarrio]);

  const getFillColor = (proximity: number) => {
    if (proximity >= 90) return BRAND.orange;
    if (proximity >= 60) return '#bd5340';
    if (proximity >= 40) return '#8a4b42';
    return '#4b5563';
  };

  return (
    <section className="py-24 bg-[#293241] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#EE6C4D] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Mapa de Cobertura
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            ¿En qué <span className="text-[#EE6C4D]">zona</span> estás?
          </h2>
          <p className="text-xl text-gray-400">
            Haz clic en tu barrio y descubre cuánto tardamos en llegar
          </p>
        </div>

        {/* Contenedor del mapa */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-start justify-center p-4 rounded-3xl" style={{ backgroundColor: BRAND.darkBg }}>

          {/* SECCIÓN MAPA */}
          <div className="relative w-full lg:flex-1 aspect-square md:aspect-video lg:aspect-auto min-h-[400px] lg:h-[600px] bg-slate-800/30 rounded-3xl border border-white/5 shadow-2xl p-4 flex items-center justify-center overflow-hidden">

            {/* Indicador de Disponibilidad */}
            <div className="absolute top-4 left-4 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold border border-green-500/30 flex items-center gap-2 animate-pulse z-10">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Técnicos disponibles: 4
            </div>

            <svg
              viewBox="0 0 500 700"
              className="w-full h-full drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.5))' }}
            >
              {CHAMARTIN_BARRIOS.map((barrio) => {
                const isSelected = selectedBarrio === barrio.id;
                const isHovered = hoveredBarrio?.id === barrio.id;

                return (
                  <g
                    key={barrio.id}
                    onMouseEnter={() => setHoveredBarrio(barrio)}
                    onMouseLeave={() => setHoveredBarrio(null)}
                    onClick={() => setSelectedBarrio(barrio.id)}
                    className="cursor-pointer group"
                  >
                    <path
                      d={BARRIO_PATHS[barrio.id]}
                      fill={getFillColor(barrio.base_proximity)}
                      fillOpacity={isSelected ? 1 : (isHovered ? 0.9 : 0.7)}
                      stroke={isSelected ? 'white' : 'rgba(255,255,255,0.1)'}
                      strokeWidth={isSelected ? 3 : 1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 ease-out"
                    />

                    {/* Marcador */}
                    <foreignObject
                      x={barrio.cx - 20}
                      y={barrio.cy - 20}
                      width="40"
                      height="40"
                      className="pointer-events-none overflow-visible"
                    >
                      <div className={`
                        flex items-center justify-center w-10 h-10 rounded-full border-2
                        transition-transform duration-300
                        ${isSelected ? 'bg-white scale-125 border-orange-500 z-50' : 'bg-slate-900/80 border-white/20 scale-100 z-10'}
                      `}>
                        <MapPin
                          className={`w-5 h-5 ${isSelected ? 'text-[#EE6C4D]' : 'text-white'}`}
                          fill={isSelected ? BRAND.orange : 'none'}
                        />
                      </div>
                    </foreignObject>

                    {/* Etiqueta Nombre */}
                    <text
                      x={barrio.cx}
                      y={barrio.cy + 35}
                      textAnchor="middle"
                      fill="white"
                      fontSize={isSelected ? "16" : "13"}
                      fontWeight={isSelected ? "800" : "600"}
                      className={`pointer-events-none transition-all duration-300 select-none ${isHovered || isSelected ? 'opacity-100' : 'opacity-80'}`}
                      style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.9)', fontFamily: 'system-ui, sans-serif' }}
                    >
                      {barrio.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Tooltip Rápido */}
            {hoveredBarrio && !selectedBarrio && (
              <div
                className="absolute pointer-events-none bg-[#EE6C4D] text-white px-3 py-1.5 rounded-full shadow-xl font-bold text-sm z-50"
                style={{
                  top: `${(hoveredBarrio.cy / 700) * 100}%`,
                  left: `${(hoveredBarrio.cx / 500) * 100}%`,
                  transform: 'translate(-50%, -150%)'
                }}
              >
                ~{hoveredBarrio.time}
              </div>
            )}
          </div>

          {/* SECCIÓN PANEL DE DETALLES */}
          <div className={`
            w-full lg:w-80 xl:w-96 rounded-3xl p-6 border border-white/10 shadow-2xl transition-all duration-500 transform
            ${selectedBarrio ? 'opacity-100 translate-y-0' : 'hidden lg:block lg:opacity-30 lg:grayscale'}
          `} style={{ backgroundColor: BRAND.panelBg }}>

            {getDistrictInfo ? (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1 uppercase italic">{getDistrictInfo.name}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Navigation className="w-3 h-3" />
                      A {getDistrictInfo.distance} de base
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedBarrio(null)}
                    className="p-1.5 hover:bg-white/10 rounded-full text-white/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-4 border border-white/5 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Tiempo estimado</span>
                    <span className="text-xl font-black text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#EE6C4D]" />
                      {getDistrictInfo.time}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full animate-pulse"
                      style={{ width: `${getDistrictInfo.base_proximity}%`, backgroundColor: BRAND.orange }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {getDistrictInfo.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 p-3 rounded-lg">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Disponibilidad: <strong className="text-white">Alta</strong></span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${APP_PHONE}`}
                    className="w-full py-3.5 rounded-xl font-black text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wide"
                    style={{ backgroundColor: BRAND.orange }}
                  >
                    <Phone className="w-4 h-4" />
                    Llamar: {APP_PHONE_DISPLAY}
                  </a>

                  <Link
                    href={getDistrictInfo.url}
                    className="block w-full text-center py-2.5 text-gray-400 hover:text-white font-bold transition-colors text-sm"
                  >
                    Ver más sobre {getDistrictInfo.name} →
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center h-full min-h-[300px]">
                <MapPin className="w-12 h-12 mb-4 opacity-20" />
                <h3 className="text-lg font-bold text-gray-400 mb-2">Selecciona tu zona</h3>
                <p className="text-xs">Haz clic en el mapa para ver tiempos de llegada</p>
              </div>
            )}
          </div>
        </div>

        {/* Leyenda de colores */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: BRAND.orange }}></div>
            <span>Llegada inmediata (&lt;15 min)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#bd5340' }}></div>
            <span>Llegada rápida (15-20 min)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#8a4b42' }}></div>
            <span>Llegada estándar (&gt;20 min)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
