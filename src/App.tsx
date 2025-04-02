import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ServicesProvider } from "./contexts/ServicesContext";
import ErrorBoundary from "./components/ErrorBoundary";
import ResourcePreloader from "./components/ResourcePreloader";
import CacheManager from "./components/CacheManager";
import InitialLoading from "./components/InitialLoading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useInitialLoading } from "./hooks/useInitialLoading";

// Recursos críticos para pré-carregar
const criticalResources = {
  images: [
    "https://i.ibb.co/BVTpZxvF/Imagem-do-WhatsApp-de-2025-02-21-s-22-11-12-1527fdbd.jpg",
    "https://i.ibb.co/RWkHqDd/buda.jpg",
    "https://i.ibb.co/qF1CwKBj/Imagem-do-WhatsApp-de-2025-02-21-s-22-11-10-b65b045c.jpg",
  ],
  fonts: [
    // Adicione fontes aqui, caso necessário
  ],
};

function App() {
  const isLoading = useInitialLoading();

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ServicesProvider>
          <Router>
            <ResourcePreloader {...criticalResources} />
            <CacheManager />
            {isLoading && <InitialLoading />}
            <div
              className={`min-h-screen bg-gray-50 flex flex-col ${
                isLoading ? "opacity-0" : "opacity-100"
              } transition-opacity duration-500`}
            >
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/service/:id" element={<ServiceDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ServicesProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
