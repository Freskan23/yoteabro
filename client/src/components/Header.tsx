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
  const [, setLocation] = useLocation();
  const { currentPrice, isNormalHours } = useDynamicPricing();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#zonas", label: "Zonas" },
    { href: "#ventajas", label: "Ventajas" },
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
    <div className="contents">
      {/* Top bar minimalista */}
      <WeatherTopBar />

      {/* Banners de aviso (se mantienen para utilidad pero con diseño integrado) */}
      <WeatherWarningBanner />
      <PricingWarningBanner />

      {/* Header Principal con Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo y Branding */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src="/logo-aguado.jpg"
                  alt={APP_BUSINESS_NAME}
                  className="relative h-10 md:h-12 w-auto"
                />
              </div>
              <div className="hidden sm:flex flex-col border-l border-gray-100 pl-3">
                <span className="text-sm font-bold text-[#001529] leading-tight">
                  Cerrajeros Leganés
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                  Confianza Certificada
                </span>
              </div>
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                  }}
                  className="text-sm font-semibold text-gray-600 hover:text-[#FF6B35] transition-all relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Acciones Right Side: Precio + Call Button */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Badge de Precio Premium Dinámico */}
              <div className="hidden md:flex flex-col items-end pr-4 border-r border-gray-100">
                <div className="flex items-center gap-1.5 text-[#FF6B35] font-bold text-lg leading-none">
                  <span className="text-sm font-medium opacity-70">Desde</span>
                  {currentPrice}€
                </div>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                  {isNormalHours ? "Tarifa Comercial" : "Tarifa Urgencias"}
                </span>
              </div>

              <Button
                asChild
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold h-11 px-6 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-sm md:text-base"
              >
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                  <span className="whitespace-nowrap">{APP_PHONE_DISPLAY}</span>
                </a>
              </Button>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-[#001529]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Refinado */}
        <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] py-6' : 'max-h-0'}`}>
          <nav className="container flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-lg font-bold text-gray-800 hover:text-[#FF6B35] flex items-center justify-between"
              >
                {item.label}
                <div className="h-1 w-1 rounded-full bg-gray-200"></div>
              </Link>
            ))}
            <div className="mt-4 p-4 bg-orange-50 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Apertura ahora</p>
                <p className="text-xl font-bold text-[#001529]">{currentPrice}€</p>
              </div>
              <p className="text-[10px] text-gray-500 max-w-[100px] text-right">
                {getPricingText(isNormalHours)}
              </p>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
