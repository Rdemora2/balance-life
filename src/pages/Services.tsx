import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Users, Award, Calendar } from "lucide-react";

const services = [
  {
    id: "slackline",
    title: "Slackline",
    icon: Activity,
    description:
      "Desenvolva equilíbrio, força e concentração através da prática do slackline. Aulas para todos os níveis.",
    image:
      "https://images.unsplash.com/photo-1516687401797-25297ff1462c?auto=format&fit=crop&q=80",
  },
  {
    id: "balance-board",
    title: "Balance Board",
    icon: Users,
    description:
      "Treinamento especializado com balance board para melhorar equilíbrio e coordenação motora.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
  },
  {
    id: "parkour",
    title: "Parkour",
    icon: Award,
    description:
      "Aprenda a se movimentar com eficiência e segurança, superando obstáculos urbanos.",
    image:
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?auto=format&fit=crop&q=80",
  },
  {
    id: "eventos",
    title: "Recreação em Eventos",
    icon: Calendar,
    description:
      "Atividades recreativas e esportivas para eventos corporativos, festas e encontros.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
  },
];

// Variáveis de animação
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services: React.FC = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center mb-16 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Nossos Serviços
      </motion.h1>

      {/* Grade agora com 2 colunas para visual mais equilibrado */}
      <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Link
                to={`/service/${service.id}`}
                className="group block bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Saiba mais sobre ${service.title}`}
              >
                {/* Imagem padronizada */}
                <div className="h-64 relative overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:opacity-90 transition-opacity duration-500">
                    <motion.div whileHover={{ scale: 1.2, y: -5 }}>
                      <Icon className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Conteúdo padronizado */}
                <div className="p-8 flex flex-col justify-between h-[320px]">
                  <h2 className="text-3xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <motion.span
                      className="text-blue-500 font-medium group-hover:text-blue-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Saiba mais →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
