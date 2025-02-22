import React from "react";
import { useParams } from "react-router-dom";
import { Activity, Users, Award, Calendar } from "lucide-react";

const services = {
  slackline: {
    title: "Slackline",
    icon: Activity,
    description:
      "O slackline é uma prática que desenvolve equilíbrio, força e concentração. Através de uma fita elástica tensionada entre dois pontos, os praticantes aprendem a caminhar e realizar manobras, desenvolvendo habilidades físicas e mentais.",
    benefits: [
      "Melhora do equilíbrio e coordenação motora",
      "Fortalecimento muscular",
      "Desenvolvimento da concentração",
      "Redução do estresse",
    ],
    levels: [
      "Iniciante: Primeiros passos e postura básica",
      "Intermediário: Caminhadas e poses estáticas",
      "Avançado: Manobras dinâmicas e truques",
    ],
    image:
      "https://images.unsplash.com/photo-1516687401797-25297ff1462c?auto=format&fit=crop&q=80",
  },
  "balance-board": {
    title: "Balance Board",
    icon: Users,
    description:
      "O treinamento com balance board é uma excelente forma de desenvolver equilíbrio, propriocepção e força core. Ideal para preparação física, reabilitação e melhoria do desempenho esportivo.",
    benefits: [
      "Desenvolvimento da propriocepção",
      "Fortalecimento do core",
      "Melhoria da postura",
      "Prevenção de lesões",
    ],
    levels: [
      "Básico: Exercícios estáticos",
      "Intermediário: Movimentos dinâmicos",
      "Avançado: Exercícios complexos e combinados",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
  },
  parkour: {
    title: "Parkour",
    icon: Award,
    description:
      "O parkour é uma disciplina que ensina a superar obstáculos de forma eficiente e segura. Através de movimentos naturais como correr, saltar e escalar, os praticantes desenvolvem força, agilidade e autoconfiança.",
    benefits: [
      "Desenvolvimento da força e agilidade",
      "Melhoria da autoconfiança",
      "Superação de medos",
      "Consciência espacial",
    ],
    levels: [
      "Fundamentos: Movimentos básicos e quedas",
      "Progressão: Técnicas intermediárias",
      "Performance: Combinações e fluidez",
    ],
    image:
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?auto=format&fit=crop&q=80",
  },
  eventos: {
    title: "Recreação em Eventos",
    icon: Calendar,
    description:
      "Oferecemos serviços de recreação para diversos tipos de eventos, com atividades adaptadas ao perfil do público e espaço disponível. Ideal para eventos corporativos, festas e encontros.",
    benefits: [
      "Integração entre participantes",
      "Atividades personalizadas",
      "Monitores experientes",
      "Equipamentos de qualidade",
    ],
    activities: [
      "Slackline recreativo",
      "Circuitos de equilíbrio",
      "Jogos cooperativos",
      "Atividades temáticas",
    ],
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Serviço não encontrado</div>;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="relative h-[400px]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <Icon className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-8">{service.description}</p>

            <h2 className="text-2xl font-bold mb-4">Benefícios</h2>
            <ul className="mb-8">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="mb-2">
                  {benefit}
                </li>
              ))}
            </ul>

            {service.levels && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Níveis de Treinamento
                </h2>
                <ul className="mb-8">
                  {service.levels.map((level, index) => (
                    <li key={index} className="mb-2">
                      {level}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {service.activities && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Atividades Disponíveis
                </h2>
                <ul className="mb-8">
                  {service.activities.map((activity, index) => (
                    <li key={index} className="mb-2">
                      {activity}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8">
              <a
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
              >
                Agende uma Aula
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
