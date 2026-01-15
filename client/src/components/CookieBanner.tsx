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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50 p-4 md:p-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              Esta página web únicamente utiliza cookies técnicas con la
              finalidad de optimizar el sitio web y asegurar su correcto
              funcionamiento. No recaba ni cede datos de carácter personal de
              los usuarios. Para obtener información adicional sobre el uso de
              las cookies, acceda a nuestra{" "}
              <Link
                href="/politica-cookies"
                className="text-[#A52A2A] underline hover:text-[#8B2323]"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              onClick={acceptCookies}
              className="bg-[#A52A2A] hover:bg-[#8B2323] text-white"
            >
              Aceptar
            </Button>
            <Button
              onClick={rejectCookies}
              variant="outline"
              className="border-gray-300"
            >
              Rechazar
            </Button>
            <button
              onClick={rejectCookies}
              className="p-2 hover:bg-gray-100 rounded-full"
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

