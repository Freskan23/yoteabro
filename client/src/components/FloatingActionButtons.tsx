import { Phone, MessageCircle } from "lucide-react";
import { APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { useLocation } from "wouter";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

// Genera mensaje de WhatsApp según la página actual
function getWhatsAppMessage(pathname: string): string {
  const baseMessage = "Hola, necesito un cerrajero";

  // Páginas de zonas
  if (pathname.includes("cerrajeros-el-viso")) {
    return `${baseMessage} urgente en El Viso. ¿Pueden ayudarme?`;
  }
  if (pathname.includes("cerrajeros-prosperidad")) {
    return `${baseMessage} urgente en Prosperidad. ¿Pueden ayudarme?`;
  }
  if (pathname.includes("cerrajeros-ciudad-jardin")) {
    return `${baseMessage} urgente en Ciudad Jardín. ¿Pueden ayudarme?`;
  }
  if (pathname.includes("cerrajeros-hispanoamerica")) {
    return `${baseMessage} urgente en Hispanoamérica. ¿Pueden ayudarme?`;
  }
  if (pathname.includes("cerrajeros-nueva-espana")) {
    return `${baseMessage} urgente en Nueva España. ¿Pueden ayudarme?`;
  }
  if (pathname.includes("cerrajeros-castilla")) {
    return `${baseMessage} urgente en Castilla. ¿Pueden ayudarme?`;
  }

  // Páginas de servicios
  if (pathname.includes("apertura-puertas")) {
    return "Hola, me he quedado fuera de casa y necesito abrir la puerta. ¿Cuánto tardarían en llegar?";
  }
  if (pathname.includes("cambio-cerraduras")) {
    return "Hola, quiero cambiar la cerradura de mi puerta. ¿Pueden darme presupuesto?";
  }
  if (pathname.includes("cambio-bombin")) {
    return "Hola, necesito cambiar el bombín de mi cerradura. ¿Tienen bombines antibumping?";
  }
  if (pathname.includes("urgencias")) {
    return "¡URGENTE! Necesito un cerrajero ahora mismo en Chamartín. ¿Pueden venir ya?";
  }
  if (pathname.includes("amaestramiento")) {
    return "Hola, estoy interesado en un amaestramiento de cerraduras. ¿Pueden informarme?";
  }

  // Página por defecto
  return `${baseMessage} en Chamartín. ¿Están disponibles?`;
}

export default function FloatingActionButtons() {
  const [location] = useLocation();
  const whatsappMessage = encodeURIComponent(getWhatsAppMessage(location));
  const whatsappUrl = `https://wa.me/${APP_PHONE.replace(/\s+/g, "")}?text=${whatsappMessage}`;

  return (
    <>
      {/* Botones flotantes - Ocultos en móvil porque hay barra sticky */}
      <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 items-end sm:bottom-8 sm:right-8">
        {/* Botón WhatsApp con mensaje contextual */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("floating_button", { page_type: location, message_type: location.includes("urgencias") ? "urgent" : "general" })}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-2xl active:scale-95 border-2 border-white/20"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-full mr-4 bg-[#25D366] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0 border border-white/10 uppercase tracking-wider hidden sm:block">
            WhatsApp Directo
          </span>
        </a>

        {/* Botón Llamada Flotante - Solo Desktop/Tablet */}
        <a
          href={`tel:${APP_PHONE}`}
          onClick={() => trackPhoneClick("floating_desktop", { page_path: location })}
          className="hidden sm:flex group items-center justify-center w-16 h-16 bg-[#EE6C4D] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-2xl active:scale-95 relative border-2 border-white/20"
          aria-label="Llamar ahora"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#EE6C4D] opacity-40 animate-ping"></span>
          <Phone className="h-8 w-8 relative z-10 animate-shake" />
          <span className="absolute right-full mr-4 bg-[#EE6C4D] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0 border border-white/10 uppercase tracking-wider">
            Llamar 24h: {APP_PHONE_DISPLAY}
          </span>
        </a>
      </div>

      {/* Barra de Llamada Sticky - Solo Móvil */}
      <div className="fixed bottom-0 left-0 right-0 w-full sm:hidden z-[60]">
        <a
          href={`tel:${APP_PHONE}`}
          onClick={() => trackPhoneClick("floating_mobile", { page_path: location })}
          className="flex items-center justify-center gap-3 w-full h-14 bg-[#EE6C4D] text-white font-black text-base active:bg-[#d62828] transition-colors shadow-[0_-4px_20px_rgba(238,108,77,0.4)]"
        >
          <Phone className="h-5 w-5" />
          <span>Llamar: {APP_PHONE_DISPLAY}</span>
        </a>
      </div>
    </>
  );
}
