import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { APP_PHONE } from "@/const";
import { trackFormStart, trackFormSubmit, trackFormSuccess, trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

interface FormData {
  nombre: string;
  telefono: string;
  problema: string;
}

export default function QuickContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    problema: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formStartTime = useRef<number | null>(null);
  const hasTrackedStart = useRef(false);

  const handleFormFocus = () => {
    if (!hasTrackedStart.current) {
      trackFormStart("quick_contact_form");
      formStartTime.current = Date.now();
      hasTrackedStart.current = true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate form completion time
    const completionTime = formStartTime.current
      ? Date.now() - formStartTime.current
      : undefined;

    // Track form submit
    trackFormSubmit("quick_contact_form", {
      problem_selected: formData.problema,
      delivery_method: "whatsapp",
      form_completion_time_ms: completionTime,
    });

    // Simular envío (aquí conectarías con tu backend o servicio)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Abrir WhatsApp con los datos del formulario
    const message = encodeURIComponent(
      `🔑 SOLICITUD URGENTE\n\n` +
        `👤 Nombre: ${formData.nombre}\n` +
        `📞 Teléfono: ${formData.telefono}\n` +
        `🚨 Problema: ${formData.problema}\n\n` +
        `Enviado desde la web yoteabro.`
    );

    window.open(
      `https://wa.me/${APP_PHONE.replace(/\s+/g, "")}?text=${message}`,
      "_blank"
    );

    // Track WhatsApp click from form
    trackWhatsAppClick("form_submit", {
      page_type: window.location.pathname,
      message_type: "service_specific",
    });

    // Track form success
    trackFormSuccess("quick_contact_form");

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset después de 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nombre: "", telefono: "", problema: "" });
      hasTrackedStart.current = false;
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
        <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-black text-green-700 mb-2">¡Recibido!</h3>
        <p className="text-green-600 font-medium">
          Te llamamos en menos de 2 minutos
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
      <div className="text-center mb-6">
        <span className="text-[#EE6C4D] font-black text-xs uppercase tracking-[0.3em] mb-2 block">
          Respuesta inmediata
        </span>
        <h3 className="text-2xl font-black text-[#293241] uppercase italic tracking-tighter">
          ¿Urgencia? Te <span className="text-[#EE6C4D]">llamamos</span>
        </h3>
        <p className="text-gray-500 text-sm mt-2">
          Rellena el formulario y te contactamos en menos de 2 minutos
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-nombre" className="sr-only">Tu nombre</label>
          <input
            id="contact-nombre"
            type="text"
            placeholder="Tu nombre"
            required
            aria-label="Tu nombre"
            value={formData.nombre}
            onFocus={handleFormFocus}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#EE6C4D] focus:ring-2 focus:ring-[#EE6C4D]/20 outline-none transition-all font-medium text-[#293241] placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="contact-telefono" className="sr-only">Teléfono de contacto</label>
          <input
            id="contact-telefono"
            type="tel"
            placeholder="Teléfono de contacto"
            required
            aria-label="Teléfono de contacto"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#EE6C4D] focus:ring-2 focus:ring-[#EE6C4D]/20 outline-none transition-all font-medium text-[#293241] placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="contact-problema" className="sr-only">¿Cuál es tu problema?</label>
          <select
            id="contact-problema"
            required
            aria-label="Selecciona tu problema"
            value={formData.problema}
            onChange={(e) =>
              setFormData({ ...formData, problema: e.target.value })
            }
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#EE6C4D] focus:ring-2 focus:ring-[#EE6C4D]/20 outline-none transition-all font-medium text-[#293241] bg-white appearance-none cursor-pointer"
          >
            <option value="" disabled>
              ¿Cuál es tu problema?
            </option>
            <option value="Me he quedado fuera de casa">
              Me he quedado fuera de casa
            </option>
            <option value="Cerradura rota o atascada">
              Cerradura rota o atascada
            </option>
            <option value="Quiero cambiar la cerradura">
              Quiero cambiar la cerradura
            </option>
            <option value="Robo o intento de robo">
              Robo o intento de robo
            </option>
            <option value="Otro problema">Otro problema</option>
          </select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#EE6C4D] hover:bg-[#d85c3d] text-white font-black py-6 rounded-2xl text-lg shadow-lg shadow-[#EE6C4D]/30 transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Que me llamen YA
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400 mb-3">¿Prefieres llamar tú?</p>
        <a
          href={`tel:${APP_PHONE}`}
          onClick={() => trackPhoneClick("quick_contact_form")}
          className="inline-flex items-center gap-2 text-[#EE6C4D] font-bold hover:underline"
        >
          <Phone className="h-4 w-4" />
          Llamar ahora
        </a>
      </div>
    </div>
  );
}
