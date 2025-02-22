import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1516687401797-25297ff1462c?auto=format&fit=crop&q=80"
            alt="Gabriel Renan em ação"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
          <div className="prose prose-lg">
            <p className="mb-4">
              A Balance Life nasceu da paixão de Gabriel Renan pelos esportes de equilíbrio e movimento. Com anos de experiência
              em slackline, parkour e treinamento funcional, Gabriel desenvolveu uma metodologia única que combina
              técnica, segurança e progressão personalizada.
            </p>
            <p className="mb-4">
              Nossa missão é proporcionar experiências transformadoras através do movimento, ajudando pessoas de todas as
              idades a desenvolverem força, equilíbrio e autoconfiança.
            </p>
            <p>
              Seja para uma aula particular ou para animar seu evento, trazemos profissionalismo e energia positiva
              para cada interação, garantindo que todos os participantes tenham uma experiência memorável e segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;