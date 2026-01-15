import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SchemaMarkup from "./components/SchemaMarkup";
import Home from "./pages/Home";

// Lazy loading for other pages to reduce initial JS bundle
const Zarzaquemada = lazy(() => import("./pages/Zarzaquemada"));
const SanNicasio = lazy(() => import("./pages/SanNicasio"));
const ElCarrascal = lazy(() => import("./pages/ElCarrascal"));
const LaFortuna = lazy(() => import("./pages/LaFortuna"));
const LeganesNorte = lazy(() => import("./pages/LeganesNorte"));
const ArroyoCulebro = lazy(() => import("./pages/ArroyoCulebro"));
const Valdepelayo = lazy(() => import("./pages/Valdepelayo"));
const VeredaEstudiantes = lazy(() => import("./pages/VeredaEstudiantes"));
const LosSantos = lazy(() => import("./pages/LosSantos"));
const Solagua = lazy(() => import("./pages/Solagua"));
const PozaDelAgua = lazy(() => import("./pages/PozaDelAgua"));
const Centro = lazy(() => import("./pages/Centro"));
const Urgencias24h = lazy(() => import("./pages/Urgencias24h"));
const AperturaPuertas = lazy(() => import("./pages/AperturaPuertas"));
const CambioCerraduras = lazy(() => import("./pages/CambioCerraduras"));
const CambioBombin = lazy(() => import("./pages/CambioBombin"));
const Amaestramiento = lazy(() => import("./pages/Amaestramiento"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PoliticaPrivacidad = lazy(() => import("./pages/PoliticaPrivacidad"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const AvisoLegal = lazy(() => import("./pages/AvisoLegal"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Testimonios = lazy(() => import("./pages/Testimonios"));

const CookieBanner = lazy(() => import("./components/CookieBanner"));
const FloatingActionButtons = lazy(() => import("./components/FloatingActionButtons"));

// Fallback component while loading a lazy route
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#001529]">
    <div className="h-12 w-12 border-4 border-[#FF6B35] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <>
      <Suspense fallback={null}>
        <CookieBanner />
        <FloatingActionButtons />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path="/cerrajeros-zarzaquemada" component={Zarzaquemada} />
          <Route path="/cerrajeros-san-nicasio" component={SanNicasio} />
          <Route path="/cerrajeros-el-carrascal" component={ElCarrascal} />
          <Route path="/cerrajeros-la-fortuna" component={LaFortuna} />
          <Route path="/cerrajeros-leganes-norte" component={LeganesNorte} />
          <Route path="/cerrajeros-arroyo-culebro" component={ArroyoCulebro} />
          <Route path="/cerrajeros-valdepelayo" component={Valdepelayo} />
          <Route path="/cerrajeros-vereda-estudiantes" component={VeredaEstudiantes} />
          <Route path="/cerrajeros-los-santos" component={LosSantos} />
          <Route path="/cerrajeros-solagua" component={Solagua} />
          <Route path="/cerrajeros-poza-del-agua" component={PozaDelAgua} />
          <Route path="/cerrajeros-centro" component={Centro} />
          <Route path="/urgencias-24h" component={Urgencias24h} />
          <Route path="/apertura-puertas" component={AperturaPuertas} />
          <Route path="/cambio-cerraduras" component={CambioCerraduras} />
          <Route path="/cambio-bombin" component={CambioBombin} />
          <Route path="/amaestramiento" component={Amaestramiento} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/testimonios" component={Testimonios} />
          <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
          <Route path="/politica-cookies" component={PoliticaCookies} />
          <Route path="/aviso-legal" component={AvisoLegal} />
          <Route path="/contacto" component={Contacto} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider
          defaultTheme="light"
        // switchable
        >
          <TooltipProvider>
            <Toaster />
            <SchemaMarkup />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;

