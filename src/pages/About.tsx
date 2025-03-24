import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white text-gray-900"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Seção de Abertura - História da Balance Life */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}
        <motion.img
          src="https://images.unsplash.com/photo-1516687401797-25297ff1462c?auto=format&w=2000&q=80"
          alt="Gabriel Renan em ação"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white"></div>
        <motion.div className="relative text-white max-w-3xl z-10">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Balance Life
          </h1>
          <p className="mt-4 text-xl font-light drop-shadow-md">
            Transformamos movimento em evolução.
          </p>
        </motion.div>
      </section>

      {/* Blocos de História - Layout Diferenciado */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-20">
        {/* Bloco 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Onde tudo começou</h2>
            <p className="text-lg leading-relaxed">
              Gabriel Renan cresceu explorando limites. Seu fascínio por
              esportes radicais começou cedo, quando percebia que o corpo humano
              era capaz de feitos incríveis.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Em uma viagem de autodescoberta, ele se aprofundou no{" "}
              <strong>slackline, parkour e treinos funcionais</strong>,
              entendendo que movimento é mais do que técnica — é uma linguagem
              universal.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1518611507436-f9221403cca2?auto=format&w=1000&q=80"
              loading="lazy"
              alt="Primeiros passos de Gabriel"
              className="rounded-xl shadow-md w-full object-cover h-64"
            />
          </div>
        </motion.div>

        {/* Bloco 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&w=1000&q=80"
              loading="lazy"
              alt="Desenvolvimento da Balance Life"
              className="rounded-xl shadow-md w-full object-cover h-64"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              A criação da Balance Life
            </h2>
            <p className="text-lg leading-relaxed">
              A paixão de Gabriel não poderia ficar restrita a ele. Ele queria
              mais. Criar algo que ajudasse outras pessoas a experimentarem a
              mesma transformação.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Assim nasceu a <strong>Balance Life</strong>: uma empresa dedicada
              a ensinar equilíbrio, controle corporal e superação por meio do
              movimento.
            </p>
          </div>
        </motion.div>

        {/* Bloco 3 */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Missão e Propósito</h2>
            <p className="text-lg leading-relaxed">
              A missão da Balance Life é clara:{" "}
              <strong>proporcionar experiências que mudam vidas</strong>. Não
              importa a idade ou nível de habilidade, cada aluno aprende a
              dominar seu corpo de forma única.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Cada aula, cada evento, cada treino é desenhado para despertar{" "}
              <strong>
                confiança, força e uma nova visão sobre o movimento.
              </strong>
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&w=1000&q=80"
              loading="lazy"
              alt="Missão da Balance Life"
              className="rounded-xl shadow-md w-full object-cover h-64"
            />
          </div>
        </motion.div>
      </section>

      {/* Seção de Chamada para Ação */}
      <section className="text-center py-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-extrabold">
          Junte-se à revolução do movimento
        </h2>
        <p className="mt-4 text-lg">
          Descubra o que seu corpo é capaz de fazer.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-md hover:bg-gray-200 transition-all"
        >
          Agende uma aula agora 🚀
        </a>
      </section>
    </motion.div>
  );
};

export default About;
