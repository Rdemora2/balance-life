import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpCircle, CheckCircle } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import { useServices } from "../contexts/ServicesContext";

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const scaleEffect = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { services } = useServices();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative">
        <ImageCarousel />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm pointer-events-none z-10"></div>

        <div className="absolute inset-0 flex items-center z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto w-full container-padding">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="max-w-lg text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Equilíbrio. Desafio. Evolução.
              </h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Transforme sua vida através do movimento e da consciência
                corporal com treinos personalizados.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition transform hover:scale-105 pointer-events-auto"
              >
                Comece Sua Jornada
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full text-white shadow-lg hover:bg-blue-700 transition z-40"
          aria-label="Voltar ao topo"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpCircle size={32} />
        </motion.button>
      )}

      <section className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            variants={fadeInUp}
          >
            Por que Escolher a Balance Life?
          </motion.h2>
          <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Treinamento 100% personalizado",
              "Instrutores certificados e experientes",
              "Aulas seguras e progressivas",
              "Método validado por especialistas",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg shadow-md bg-gray-50 hover:bg-blue-50 transition-all"
                variants={scaleEffect}
              >
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <p className="text-lg text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            variants={fadeInUp}
          >
            Nossos Serviços
          </motion.h2>
          <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden p-8 hover:shadow-2xl transition-all duration-500"
                variants={scaleEffect}
              >
                <Link to={`/service/${service.id}`} className="block">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
