import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { Activity, Users, Award, Calendar } from 'lucide-react';

const services = [
  {
    id: 'slackline',
    title: 'Slackline',
    icon: Activity,
    description: 'Aprenda a arte do equilíbrio e desenvolva força e concentração.',
  },
  {
    id: 'balance-board',
    title: 'Balance Board',
    icon: Users,
    description: 'Melhore seu equilíbrio e coordenação com treinos personalizados.',
  },
  {
    id: 'parkour',
    title: 'Parkour',
    icon: Award,
    description: 'Supere obstáculos e desenvolva agilidade com técnicas seguras.',
  },
  {
    id: 'eventos',
    title: 'Recreação em Eventos',
    icon: Calendar,
    description: 'Atividades dinâmicas e divertidas para todos os tipos de eventos.',
  },
];

const Home = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative">
        <ImageCarousel />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full container-padding">
            <div className="max-w-xl slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Descubra o Poder do Equilíbrio
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transforme sua vida através do movimento e da consciência corporal
                com aulas personalizadas e experiências únicas.
              </p>
              <Link to="/contact" className="button-primary text-lg">
                Comece Sua Jornada
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 fade-in">
            Oferecemos uma variedade de atividades para desenvolver seu equilíbrio,
            força e confiança através de métodos comprovados e seguros.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/service/${service.id}`}
                  className="card scale-in"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-rose-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que escolher a Balance Life?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                    <span className="text-rose-500 text-sm">✓</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Metodologia Exclusiva</h3>
                    <p className="text-gray-600">
                      Desenvolvemos um método único que combina diferentes técnicas
                      para maximizar seus resultados.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                    <span className="text-rose-500 text-sm">✓</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Instrutores Qualificados</h3>
                    <p className="text-gray-600">
                      Nossa equipe é formada por profissionais experientes e
                      certificados nas melhores técnicas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1">
                    <span className="text-rose-500 text-sm">✓</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Aulas Personalizadas</h3>
                    <p className="text-gray-600">
                      Adaptamos o treinamento ao seu nível e objetivos para
                      garantir a melhor evolução.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="Treinamento Balance Life"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;