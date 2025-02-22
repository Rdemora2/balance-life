import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = useMemo(
    () => [
      {
        id: "slackline",
        title: "Slackline",
        description:
          "Aprenda a arte do equilíbrio e desenvolva força e concentração.",
      },
      {
        id: "balance-board",
        title: "Balance Board",
        description:
          "Melhore seu equilíbrio e coordenação com treinos personalizados.",
      },
      {
        id: "parkour",
        title: "Parkour",
        description:
          "Supere obstáculos e desenvolva agilidade com técnicas seguras.",
      },
      {
        id: "eventos",
        title: "Recreação em Eventos",
        description:
          "Atividades dinâmicas e divertidas para todos os tipos de eventos.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section com Carrossel */}
      <div className="relative">
        <ImageCarousel />
        {/* Blur mais leve e degradê reduzido */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm pointer-events-none z-10"></div>

        {/* Texto do Carrossel */}
        <div className="absolute inset-0 flex items-center z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto w-full container-padding">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="max-w-xl text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Descubra o Poder do Equilíbrio
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Transforme sua vida através do movimento e da consciência
                corporal com aulas personalizadas e experiências únicas.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition pointer-events-auto"
              >
                Comece Sua Jornada
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Botão de Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition z-40 pointer-events-auto"
          aria-label="Voltar ao topo"
        >
          <ArrowUpCircle size={32} />
        </button>
      )}

      {/* Serviços */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          >
            Oferecemos uma variedade de atividades para desenvolver seu
            equilíbrio, força e confiança através de métodos comprovados e
            seguros.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <Link
                  to={`/service/${service.id}`}
                  className="pointer-events-auto"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
