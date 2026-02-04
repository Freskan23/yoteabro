import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-[60] p-4 md:p-6">
      {/* Close button - prominent on mobile */}
      <button
        onClick={rejectCookies}
        className="absolute top-2 right-2 p-3 hover:bg-gray-100 rounded-full bg-gray-50 border border-gray-200 shadow-sm md:hidden"
        aria-label="Cerrar"
      >
        <X className="h-6 w-6 text-gray-700" />
      </button>

      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-12 md:pr-0">
            <p className="text-sm text-gray-700 leading-relaxed">
              Esta página web únicamente utiliza cookies técnicas con la
              finalidad de optimizar el sitio web y asegurar su correcto
              funcionamiento. No recaba ni cede datos de carácter personal de
              los usuarios. Para obtener información adicional sobre el uso de
              las cookies, acceda a nuestra{" "}
              <Link
                href="/politica-cookies"
                className="text-[#EE6C4D] underline hover:text-[#d62828] font-medium"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </div>

          {/* Buttons - better spacing on mobile */}
          <div className="flex gap-3 flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
            <Button
              onClick={acceptCookies}
              className="bg-[#EE6C4D] hover:bg-[#d62828] text-white flex-1 md:flex-none py-3"
            >
              Aceptar
            </Button>
            <Button
              onClick={rejectCookies}
              variant="outline"
              className="border-gray-300 flex-1 md:flex-none py-3"
            >
              Rechazar
            </Button>
            {/* Desktop close button */}
            <button
              onClick={rejectCookies}
              className="hidden md:flex p-2 hover:bg-gray-100 rounded-full items-center justify-center"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
