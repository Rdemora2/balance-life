import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useServices } from "../contexts/ServicesContext";

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
  const { services } = useServices();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Link
                to={`/service/${service.id}`}
                className="group block bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label={`Saiba mais sobre ${service.title}`}
              >
                <div className="h-64 relative overflow-hidden bg-gray-200">
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Carregando...
                    </div>
                  )}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:opacity-90 transition-opacity duration-500">
                    <motion.div whileHover={{ scale: 1.2, y: -5 }}>
                      <Icon className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </div>

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
