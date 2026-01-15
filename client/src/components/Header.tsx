import { APP_LOGO, APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useDynamicPricing, getPricingText } from "@/hooks/useDynamicPricing";
import PricingWarningBanner from "@/components/PricingWarningBanner";
import WeatherWarningBanner from "@/components/WeatherWarningBanner";
import WeatherTopBar from "@/components/WeatherTopBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { currentPrice, isNormalHours } = useDynamicPricing();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#zonas", label: "Zonas" },
    { href: "#por-que-elegirnos", label: "Por qué elegirnos" },
    { href: "/blog", label: "Blog" },
    { href: "#contacto", label: "Contacto" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* Top bar con información meteorológica y tiempos */}
      <WeatherTopBar />
      
      {/* Banner de aviso meteorológico */}
      <WeatherWarningBanner />
      
      {/* Banner de aviso de cambio de tarifa */}
      <PricingWarningBanner />
      
      {/* Banner superior con disponibilidad y precio dinámico */}
      <div className="bg-[#A52A2A] text-white py-3 text-center text-sm md:text-base font-semibold" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="container flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>Servicio 24h</span>
          <span className="hidden md:inline">•</span>
          <span className="text-lg font-bold">Abrimos tu puerta por {currentPrice}€</span>
          <span className="hidden md:inline">•</span>
          <span className="text-xs md:text-sm">{getPricingText(isNormalHours)}</span>
        </div>
      </div>

      {/* Header principal */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo con tagline */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo-aguado.jpg"
                alt={APP_BUSINESS_NAME}
                className="h-12 md:h-14 w-auto"
              />
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-semibold text-gray-800">
                  Cerrajeros 24h en {APP_LOCATION}
                </span>
                <span className="text-xs text-gray-600">
                  Urgencias en 20-30 min
                </span>
              </div>
            </Link>

            {/* Navegación desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-gray-700 hover:text-[#A52A2A] font-medium transition-colors cursor-pointer"
                    style={{ '--hover-color': 'var(--secondary)' } as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[#A52A2A] font-medium transition-colors"
                    style={{ '--hover-color': 'var(--secondary)' } as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Botón de teléfono */}
            <div className="hidden md:block">
              <Button
                asChild
                size="lg"
                className="bg-[#A52A2A] hover:bg-[#8B2323] text-white font-bold"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <a href={`tel:${APP_PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {APP_PHONE_DISPLAY}
                </a>
              </Button>
            </div>

            {/* Botón menú móvil */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-gray-700 hover:text-[#A52A2A] font-medium py-2 cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-[#A52A2A] font-medium py-2"
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Button
                asChild
                size="lg"
                className="bg-[#A52A2A] hover:bg-[#8B2323] text-white font-bold w-full"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <a href={`tel:${APP_PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {APP_PHONE_DISPLAY}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
