import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useServices } from "../contexts/ServicesContext";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { services } = useServices();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!id) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-gray-600">
        ID do serviço não encontrado.
      </div>
    );
  }

  const serviceId = parseInt(id, 10);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-gray-600">
        Serviço não encontrado.
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-gray-900"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Banner */}
      <div className="relative h-[500px] overflow-hidden flex items-center justify-center">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-8">
          <Icon className="w-20 h-20 mb-4" />
          <h1 className="text-5xl font-extrabold">{service.title}</h1>
          <p className="mt-2 text-lg italic opacity-80">"{service.quote}"</p>
        </motion.div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <motion.div className="bg-white shadow-xl rounded-xl p-12">
          <p className="text-xl mb-6">{service.description}</p>
          <h2 className="text-2xl font-bold mb-4">Por que experimentar?</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {service.benefits?.map((benefit, index) => (
              <motion.li
                key={index}
                className="text-lg flex items-center gap-3 p-3 bg-gray-100 rounded-lg"
                whileHover={{ scale: 1.03 }}
              >
                ✅ {benefit}
              </motion.li>
            ))}
          </ul>
          <p className="mt-8 text-lg italic">{service.experience}</p>

          {/* Subcategorias (se houver) */}
          {service.subcategories && (
            <div className="mt-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                <span>Modalidades:</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-4"
                >
                  {service.subcategories.map((subcategory, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {subcategory.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {subcategory.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="relative inline-block px-10 py-4 font-semibold text-white bg-black rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-gray-900"
            >
              Experimente Agora 🚀
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
