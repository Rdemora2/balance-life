import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Award,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Subcategory {
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  icon: React.ElementType;
  description: string;
  benefits: string[];
  experience: string;
  quote: string;
  image: string;
  subcategories?: Subcategory[];
}

const services: Service[] = [
  {
    id: 1,
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
    subcategories: [
      {
        title: "Slackline Básico",
        description:
          "Aprenda os fundamentos do slackline, incluindo a montagem do equipamento, postura correta e técnicas básicas de equilíbrio.",
      },
      {
        title: "Slackline Intermediário",
        description:
          "Domine técnicas avançadas de equilíbrio, como caminhar de costas, girar e recuperar o equilíbrio após quedas.",
      },
      {
        title: "Slackline Avançado",
        description:
          "Explore manobras desafiadoras, como saltos, giros e combinações de movimentos, para elevar sua prática a um novo nível.",
      },
      {
        title: "Yogaline",
        description:
          "Combine yoga e slackline para melhorar flexibilidade, equilíbrio e concentração, realizando posturas desafiadoras na fita.",
      },
      {
        title: "Longline",
        description:
          "Pratique em fitas longas (acima de 30m) para desenvolver resistência, foco e controle em distâncias maiores.",
      },
      {
        title: "Trickline",
        description:
          "Aprenda manobras acrobáticas e dinâmicas, como saltos mortais e giros, para dominar o lado mais espetacular do slackline.",
      },
    ],
  },
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
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
];

interface SubcategoriesAccordionProps {
  subcategories?: Subcategory[];
}

const SubcategoriesAccordion: React.FC<SubcategoriesAccordionProps> = ({
  subcategories,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!subcategories || subcategories.length === 0) return null;

  return (
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
          {subcategories.map((subcategory, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">
                {subcategory.title}
              </h3>
              <p className="mt-2 text-gray-600">{subcategory.description}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-gray-600">
        ID do serviço não encontrado.
      </div>
    );
  }
  const serviceId = parseInt(id, 10);
  const service = services.find((s) => s.id === serviceId);
  const [imageLoaded, setImageLoaded] = useState(false);

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

          {/* Subcategorias (se houver) */}
          <SubcategoriesAccordion subcategories={service.subcategories} />

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
