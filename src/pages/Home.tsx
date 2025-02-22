import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageCarousel from "../components/ImageCarousel";
import { Activity, Users, Award, Calendar } from "lucide-react";

const services = [
  {
    id: "slackline",
    title: "Slackline",
    icon: Activity,
    description:
      "Aprenda a arte do equilíbrio e desenvolva força e concentração.",
  },
  {
    id: "balance-board",
    title: "Balance Board",
    icon: Users,
    description:
      "Melhore seu equilíbrio e coordenação com treinos personalizados.",
  },
  {
    id: "parkour",
    title: "Parkour",
    icon: Award,
    description:
      "Supere obstáculos e desenvolva agilidade com técnicas seguras.",
  },
  {
    id: "eventos",
    title: "Recreação em Eventos",
    icon: Calendar,
    description:
      "Atividades dinâmicas e divertidas para todos os tipos de eventos.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative">
          <ImageCarousel />
          {/* Camada de degradê para melhorar a visibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
          {/* Efeito de blur sutil para tornar a leitura mais confortável */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
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
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transforme sua vida através do movimento e da consciência
                corporal com aulas personalizadas e experiências únicas.
              </p>
              <Link to="/contact" className="button-primary text-lg">
                Comece Sua Jornada
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Serviços */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          >
            Oferecemos uma variedade de atividades para desenvolver seu
            equilíbrio, força e confiança através de métodos comprovados e
            seguros.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <Link to={`/service/${service.id}`}>
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-rose-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que escolher a Balance Life?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Metodologia Exclusiva",
                    desc: "Método único que combina diferentes técnicas para maximizar seus resultados.",
                  },
                  {
                    title: "Instrutores Qualificados",
                    desc: "Profissionais experientes e certificados nas melhores técnicas.",
                  },
                  {
                    title: "Aulas Personalizadas",
                    desc: "Treinamento adaptado ao seu nível e objetivos para garantir a melhor evolução.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                        <span className="text-rose-500 text-sm">✓</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="Treinamento Balance Life"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
