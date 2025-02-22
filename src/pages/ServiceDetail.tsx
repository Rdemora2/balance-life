import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Users, Award, Calendar } from "lucide-react";

const services = {
  slackline: {
    title: "Slackline",
    icon: Activity,
    description:
      "Experimente a liberdade do equilíbrio. O slackline vai além de uma simples prática física — é uma jornada de controle corporal, foco e superação.",
    benefits: [
      "Aprimora o equilíbrio e fortalece a mente",
      "Ativa a musculatura profunda do corpo",
      "Melhora a postura e previne dores crônicas",
      "Desenvolve disciplina e concentração mental",
    ],
    experience:
      "Imagine caminhar sobre uma linha, desafiando a gravidade enquanto cada passo fortalece sua mente e corpo. A prática é progressiva e adaptável a qualquer nível.",
    quote: "Desafie seus limites, um passo de cada vez.",
    image:
      "https://images.unsplash.com/photo-1516687401797-25297ff1462c?auto=format&w=2000&q=80",
  },
  "balance-board": {
    title: "Balance Board",
    icon: Users,
    description:
      "Transforme seu treino diário. O balance board traz um novo nível de consciência corporal e estabilidade para qualquer pessoa, do iniciante ao atleta.",
    benefits: [
      "Melhora a coordenação motora e a propriocepção",
      "Fortalece o core e articulações",
      "Aprimora a estabilidade para esportes e atividades físicas",
      "Ajuda na reabilitação e prevenção de lesões",
    ],
    experience:
      "Cada movimento no balance board é um diálogo entre corpo e mente. Aprenda a reagir ao inesperado e fortaleça sua base de sustentação.",
    quote: "Equilíbrio não é apenas físico, é um estado mental.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&w=2000&q=80",
  },
  parkour: {
    title: "Parkour",
    icon: Award,
    description:
      "Descubra um novo jeito de enxergar o mundo. O parkour é mais do que saltos e obstáculos — é um estado de espírito onde cada barreira se torna uma oportunidade.",
    benefits: [
      "Desenvolve força explosiva e resistência",
      "Aprimora a autoconfiança e o controle corporal",
      "Expande a criatividade nos movimentos",
      "Melhora a mobilidade e agilidade em qualquer situação",
    ],
    experience:
      "Cada obstáculo superado é uma vitória mental. Aprenda a dominar seu corpo em qualquer ambiente e descubra o prazer do movimento livre.",
    quote: "O limite está na sua mente. Aprenda a superá-lo.",
    image:
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?auto=format&w=2000&q=80",
  },
  eventos: {
    title: "Recreação em Eventos",
    icon: Calendar,
    description:
      "Dê um toque especial ao seu evento com experiências interativas e dinâmicas. Atividades que engajam, divertem e deixam uma marca inesquecível.",
    benefits: [
      "Atividades personalizadas para qualquer público",
      "Monitores experientes e preparados",
      "Integração e engajamento entre os participantes",
      "Equipamentos de alta qualidade para segurança total",
    ],
    experience:
      "Imagine um evento onde cada participante se sente parte da experiência. Do slackline ao parkour, criamos momentos inesquecíveis.",
    quote: "A energia do evento vem da experiência que ele proporciona.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&w=2000&q=80",
  },
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = services[id as keyof typeof services];
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reseta o scroll ao abrir a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-gray-600">
        Serviço não encontrado
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
      {/* Banner Interativo */}
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
            {service.benefits.map((benefit, index) => (
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
