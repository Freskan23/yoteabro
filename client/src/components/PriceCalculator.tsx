import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calculator, ArrowRight, CheckCircle } from "lucide-react";
import { APP_PHONE, APP_PHONE_DISPLAY } from "@/const";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  urgentPrice: number;
  description: string;
}

const services: ServiceOption[] = [
  {
    id: "apertura-simple",
    name: "Apertura de puerta simple",
    basePrice: 60,
    urgentPrice: 90,
    description: "Puerta estándar sin cerradura de seguridad",
  },
  {
    id: "apertura-seguridad",
    name: "Apertura puerta de seguridad",
    basePrice: 90,
    urgentPrice: 120,
    description: "Puerta blindada o acorazada",
  },
  {
    id: "cambio-bombin",
    name: "Cambio de bombín estándar",
    basePrice: 80,
    urgentPrice: 110,
    description: "Bombín de calidad media",
  },
  {
    id: "cambio-bombin-seguridad",
    name: "Cambio de bombín antibumping",
    basePrice: 120,
    urgentPrice: 150,
    description: "Bombín de alta seguridad",
  },
  {
    id: "cambio-cerradura",
    name: "Cambio de cerradura completa",
    basePrice: 150,
    urgentPrice: 200,
    description: "Cerradura completa con instalación",
  },
];

export default function PriceCalculator() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const selectedServiceData = services.find((s) => s.id === selectedService);
  const estimatedPrice = selectedServiceData
    ? isUrgent
      ? selectedServiceData.urgentPrice
      : selectedServiceData.basePrice
    : 0;

  const handleCalculate = () => {
    if (selectedService) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedService("");
    setIsUrgent(false);
    setShowResult(false);
  };

  return (
    <div className="bg-[#293241] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-5">
        <Calculator className="h-64 w-64 -mr-16 -mt-16" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl bg-[#EE6C4D] flex items-center justify-center">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter">
              Calculadora de Presupuesto
            </h3>
            <p className="text-gray-400 text-sm">Precio orientativo al instante</p>
          </div>
        </div>

        {!showResult ? (
          <div className="space-y-6">
            {/* Selector de servicio */}
            <div>
              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 block">
                ¿Qué necesitas?
              </label>
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                      selectedService === service.id
                        ? "border-[#EE6C4D] bg-[#EE6C4D]/10"
                        : "border-white/10 hover:border-white/30 bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">{service.name}</p>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                      {selectedService === service.id && (
                        <CheckCircle className="h-5 w-5 text-[#EE6C4D]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle urgencia */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <p className="font-bold text-white">¿Es urgente? (Noches/Festivos)</p>
                <p className="text-sm text-gray-400">Horario 22:00 - 08:00</p>
              </div>
              <button
                onClick={() => setIsUrgent(!isUrgent)}
                aria-label="Servicio urgente noches y festivos"
                aria-checked={isUrgent}
                role="switch"
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  isUrgent ? "bg-[#EE6C4D]" : "bg-white/20"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform ${
                    isUrgent ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Botón calcular */}
            <Button
              onClick={handleCalculate}
              disabled={!selectedService}
              className="w-full bg-[#EE6C4D] hover:bg-[#d85c3d] text-white font-black py-6 rounded-2xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calcular Precio
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Resultado */}
            <div className="text-center py-8">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                Precio estimado
              </p>
              <div className="text-7xl font-black text-white italic">
                {estimatedPrice}
                <span className="text-[#EE6C4D]">€</span>
              </div>
              <p className="text-gray-400 mt-2">
                {selectedServiceData?.name}
                {isUrgent && " (Urgente)"}
              </p>
            </div>

            {/* Info adicional */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  Sin costes de desplazamiento
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  Precio final confirmado por teléfono
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  Factura oficial incluida
                </li>
              </ul>
            </div>

            {/* Acciones */}
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-[#EE6C4D] hover:bg-[#d85c3d] text-white font-black py-6 rounded-2xl text-lg"
              >
                <a href={`tel:${APP_PHONE}`} className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar y Confirmar: {APP_PHONE_DISPLAY}
                </a>
              </Button>

              <button
                onClick={handleReset}
                className="w-full text-gray-400 hover:text-white text-sm font-bold py-3 transition-colors"
              >
                Calcular otro servicio
              </button>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-6">
          * Precio orientativo. El precio final se confirma tras evaluar el caso.
        </p>
      </div>
    </div>
  );
}
