import { APP_LOGO, APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useDynamicPricing, getPricingText } from "@/hooks/useDynamicPricing";
import PricingWarningBanner from "@/components/PricingWarningBanner";
import WeatherWarningBanner from "@/components/WeatherWarningBanner";
import WeatherTopBar from "@/components/WeatherTopBar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Home as HomeIcon,
  MapPin,
  Wrench,
  Clock,
  Shield,
  Key,
  ChevronRight,
  Zap,
  Lock,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { currentPrice, isNormalHours } = useDynamicPricing();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ];

  const services = [
    { title: "Apertura de Puertas", href: "/apertura-puertas", icon: <Key className="h-5 w-5" />, desc: "Apertura sin daños 24h" },
    { title: "Cambio de Cerraduras", href: "/cambio-cerraduras", icon: <Lock className="h-5 w-5" />, desc: "Alta seguridad y marcas" },
    { title: "Cambio de Bombín", href: "/cambio-bombin", icon: <Shield className="h-5 w-5" />, desc: "Protección antibumping" },
    { title: "Urgencias 24h", href: "/urgencias-24h", icon: <Clock className="h-5 w-5" />, desc: "Llegamos en 20 min" },
    { title: "Amaestramientos", href: "/amaestramiento", icon: <Star className="h-5 w-5" />, desc: "Llave única para todo" },
  ];

  const zones = [
    { label: "El Viso", href: "/cerrajeros-el-viso" },
    { label: "Prosperidad", href: "/cerrajeros-prosperidad" },
    { label: "Ciudad Jardín", href: "/cerrajeros-ciudad-jardin" },
    { label: "Hispanoamérica", href: "/cerrajeros-hispanoamerica" },
    { label: "Nueva España", href: "/cerrajeros-nueva-espana" },
    { label: "Castilla", href: "/cerrajeros-castilla" },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.includes("#") ? href.split("#")[1] : null;
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      } else if (location !== "/") {
        // Si no estamos en la home y no encontramos el elemento, navegamos
        setLocation("/");
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

            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#EE6C4D] to-[#293241] rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                <div className="relative flex items-center bg-white px-2 py-1 rounded-md">
                  <span className="text-3xl font-black italic tracking-tighter text-[#293241]">
                    YOTEA<span className="text-[#EE6C4D]">BRO</span>
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col border-l border-gray-100 pl-3">
                <span className="text-sm font-bold text-[#293241] leading-tight">
                  Cerrajeros Chamartín
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                  YOTEABRO 24H
                </span>
              </div>
            </Link>

            {/* Navegación Desktop con Mega Menu */}
            <nav className="hidden lg:flex items-center gap-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Inicio
                    </Link>
                  </NavigationMenuItem>

                  {/* Mega Menu Servicios */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 font-semibold h-10">Servicios</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-gray-100 rounded-3xl shadow-2xl">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-br from-[#293241] to-[#3D5A80] p-6 no-underline outline-none focus:shadow-md group overflow-hidden relative"
                              href="/urgencias-24h"
                            >
                              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <Zap className="h-24 w-24 text-white" />
                              </div>
                              <Zap className="h-8 w-8 text-[#EE6C4D] mb-4" />
                              <div className="mb-2 mt-4 text-xl font-black text-white italic uppercase tracking-tighter">
                                Emergencias <br />
                                <span className="text-[#EE6C4D]">24 Horas</span>
                              </div>
                              <p className="text-sm leading-tight text-gray-300 font-medium">
                                Atención inmediata en Chamartín. Llegamos en <span className="text-white font-bold">20 minutos</span> reales.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {services.map((service) => (
                          <li key={service.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#EE6C4D] focus:bg-gray-50 group"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-[#EE6C4D]/10 group-hover:text-[#EE6C4D] transition-colors">
                                    {service.icon}
                                  </div>
                                  <div className="text-sm font-bold leading-none text-[#293241]">{service.title}</div>
                                </div>
                                <p className="line-clamp-1 text-xs leading-snug text-gray-400 pl-11">
                                  {service.desc}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Mega Menu Zonas */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 font-semibold h-10">Zonas</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-6 md:w-[500px] md:grid-cols-2 lg:w-[550px] bg-white border border-gray-100 rounded-3xl shadow-2xl">
                        {zones.map((zone) => (
                          <li key={zone.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={zone.href}
                                className="flex items-center justify-between group select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all hover:bg-[#EE6C4D]/5"
                              >
                                <div className="flex items-center gap-3">
                                  <MapPin className="h-4 w-4 text-[#EE6C4D]" />
                                  <span className="text-sm font-bold text-[#293241] group-hover:text-[#EE6C4D]">{zone.label}</span>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="md:col-span-2 pt-4 border-t border-gray-100 mt-2">
                          <p className="text-[10px] text-center font-black uppercase tracking-[0.3em] text-gray-400">
                            Cobertura total en el distrito de Chamartín
                          </p>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {navItems.slice(1).map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Acciones Right Side: Precio + Call Button */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Badge de Precio Premium Dinámico */}
              <div className="hidden md:flex flex-col items-end pr-4 border-r border-gray-100">
                <div className="flex items-center gap-1.5 text-[#c44536] font-bold text-lg leading-none">
                  <span className="text-sm font-medium text-gray-600">Desde</span>
                  {currentPrice}€
                </div>
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">
                  {isNormalHours ? "Tarifa Comercial" : "Tarifa Urgencias"}
                </span>
              </div>

              <Button
                asChild
                className="bg-[#EE6C4D] hover:bg-[#d85c3d] text-white font-bold h-11 px-6 rounded-xl shadow-lg shadow-[#EE6C4D]/20 active:scale-95 transition-all text-sm md:text-base"
              >
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2" aria-label={`Llamar a ${APP_BUSINESS_NAME} al ${APP_PHONE_DISPLAY}`}>
                  <Phone className="h-4 w-4 md:h-5 md:w-5 animate-pulse text-white" />
                  <span className="whitespace-nowrap text-white">{APP_PHONE_DISPLAY}</span>
                </a>
              </Button>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2 text-gray-800 hover:text-[#EE6C4D] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Refinado */}
        <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 transition-all duration-300 overflow-y-auto ${mobileMenuOpen ? 'max-h-[90vh] py-8' : 'max-h-0'}`}>
          <nav className="container flex flex-col gap-8 pb-10">
            {/* Inicio Link Directo */}
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-black text-[#293241] uppercase italic tracking-tighter">
              Inicio
            </Link>

            {/* Categoría Servicios */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EE6C4D]">Nuestros Servicios</p>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div className="p-2 rounded-lg bg-white text-[#EE6C4D] shadow-sm">
                      {service.icon}
                    </div>
                    <span className="font-bold text-gray-800">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categoría Zonas */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EE6C4D]">Zonas en Chamartín</p>
              <div className="grid grid-cols-2 gap-2">
                {zones.map((zone) => (
                  <Link
                    key={zone.href}
                    href={zone.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-3 rounded-xl bg-gray-50/50 border border-gray-100 text-sm font-bold text-gray-600"
                  >
                    <MapPin className="h-3 w-3 text-[#EE6C4D]" />
                    {zone.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Otros Enlaces */}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="p-6 bg-[#293241] rounded-[2.5rem] text-white overflow-hidden relative">
              <Zap className="absolute top-0 right-0 h-32 w-32 text-white/5 -mr-10 -mt-10" />
              <div className="relative z-10 flex flex-col gap-4">
                <div>
                  <p className="text-xs text-[#EE6C4D] font-black uppercase tracking-widest mb-1">Precio ahora</p>
                  <p className="text-4xl font-black italic">{currentPrice}€</p>
                </div>
                <Button asChild className="bg-[#EE6C4D] hover:bg-[#d85c3d] text-white font-black py-6 rounded-2xl">
                  <a href={`tel:${APP_PHONE}`} className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    Llamar Urgente
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
