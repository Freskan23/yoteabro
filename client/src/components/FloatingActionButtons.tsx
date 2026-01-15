import { Phone, MessageCircle } from "lucide-react";
import { APP_PHONE } from "@/const";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Botón WhatsApp */}
      <a
        href={`https://wa.me/${APP_PHONE.replace(/\s+/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Botón Llamada */}
      <a
        href={`tel:${APP_PHONE}`}
        className="group flex items-center justify-center w-14 h-14 bg-[#FF6B35] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl relative"
        aria-label="Llamar ahora"
      >
        {/* Efecto de pulso */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75 animate-ping"></span>
        
        <Phone className="h-7 w-7 relative z-10" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Llamar 24h
        </span>
      </a>
    </div>
  );
}
