import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SchemaMarkup from "./components/SchemaMarkup";
import Home from "./pages/Home";
import Zarzaquemada from "./pages/Zarzaquemada";
import SanNicasio from "./pages/SanNicasio";
import ElCarrascal from "./pages/ElCarrascal";
import LaFortuna from "./pages/LaFortuna";
import LeganesNorte from "./pages/LeganesNorte";
import ArroyoCulebro from "./pages/ArroyoCulebro";
import Valdepelayo from "./pages/Valdepelayo";
import VeredaEstudiantes from "./pages/VeredaEstudiantes";
import LosSantos from "./pages/LosSantos";
import Solagua from "./pages/Solagua";
import PozaDelAgua from "./pages/PozaDelAgua";
import Centro from "./pages/Centro";
import AperturaPuertas from "./pages/AperturaPuertas";
import CambioCerraduras from "./pages/CambioCerraduras";
import CambioBombin from "./pages/CambioBombin";
import Amaestramiento from "./pages/Amaestramiento";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import AvisoLegal from "./pages/AvisoLegal";
import Testimonios from "./pages/Testimonios";
import CookieBanner from "./components/CookieBanner";
import FloatingActionButtons from "./components/FloatingActionButtons";

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <>
      <CookieBanner />
      <FloatingActionButtons />
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
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
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

