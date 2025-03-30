import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      // Navegação
      home: "Início",
      services: "Serviços",
      about: "Sobre",
      contact: "Contato",

      // Home
      heroTitle: "Equilíbrio. Desafio. Evolução.",
      heroSubtitle:
        "Transforme sua vida através do movimento e da consciência corporal com treinos personalizados.",
      startJourney: "Comece Sua Jornada",
      whyChooseUs: "Por que Escolher a Balance Life?",
      ourServices: "Nossos Serviços",

      // Serviços
      servicesTitle: "Nossos Serviços",
      learnMore: "Saiba mais",
      loading: "Carregando...",
      error: "Ops! Algo deu errado",

      // Detalhes do Serviço
      whyTry: "Por que experimentar?",
      tryNow: "Experimente Agora",
      modalities: "Modalidades",

      // Contato
      contactTitle: "Entre em Contato",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar",
    },
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",

      // Home
      heroTitle: "Balance. Challenge. Evolution.",
      heroSubtitle:
        "Transform your life through movement and body awareness with personalized training.",
      startJourney: "Start Your Journey",
      whyChooseUs: "Why Choose Balance Life?",
      ourServices: "Our Services",

      // Services
      servicesTitle: "Our Services",
      learnMore: "Learn more",
      loading: "Loading...",
      error: "Oops! Something went wrong",

      // Service Details
      whyTry: "Why try it?",
      tryNow: "Try Now",
      modalities: "Modalities",

      // Contact
      contactTitle: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
