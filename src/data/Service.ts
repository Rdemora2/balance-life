import { Activity, Users, Award, Calendar } from "lucide-react";
import { Service } from "../models/Service";
import { ServiceSchema } from "../models/Service";

const services: Service[] = [
  {
    id: 1,
    title: "Slackline",
    icon: Activity,
    description:
      "Desenvolva equilíbrio, força e concentração através da prática do slackline. Aulas para todos os níveis.",
    image:
      "https://images.unsplash.com/photo-1516687401797-25297ff1462c?auto=format&fit=crop&w=800&q=80",
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
    ],
  },
  {
    id: 2,
    title: "Balance Board",
    icon: Users,
    description:
      "Treinamento especializado com balance board para melhorar equilíbrio e coordenação motora.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Parkour",
    icon: Award,
    description:
      "Aprenda a se movimentar com eficiência e segurança, superando obstáculos urbanos.",
    image:
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Recreação em Eventos",
    icon: Calendar,
    description:
      "Atividades recreativas e esportivas para eventos corporativos, festas e encontros.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
  },
];

const validatedServices = ServiceSchema.array().parse(services);

export { validatedServices as services };
