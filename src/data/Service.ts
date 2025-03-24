import { Activity, Users, Award, Calendar } from "lucide-react";
import { Service } from "../models/Service";
import { ServiceSchema } from "../models/Service";

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
    quote: "Desafie seus limites, um passo de cada tempo.",
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

const validatedServices = ServiceSchema.array().parse(services);

export { validatedServices as services };
