import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users, Award, Calendar } from 'lucide-react';

const services = [
  {
    id: 'slackline',
    title: 'Slackline',
    icon: Activity,
    description: 'Desenvolva equilíbrio, força e concentração através da prática do slackline. Aulas para todos os níveis.',
    image: 'https://images.unsplash.com/photo-1516687401797-25297ff1462c?auto=format&fit=crop&q=80',
  },
  {
    id: 'balance-board',
    title: 'Balance Board',
    icon: Users,
    description: 'Treinamento especializado com balance board para melhorar equilíbrio e coordenação motora.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
  },
  {
    id: 'parkour',
    title: 'Parkour',
    icon: Award,
    description: 'Aprenda a se movimentar com eficiência e segurança, superando obstáculos urbanos.',
    image: 'https://images.unsplash.com/photo-1518611507436-f9221403cca2?auto=format&fit=crop&q=80',
  },
  {
    id: 'eventos',
    title: 'Recreação em Eventos',
    icon: Calendar,
    description: 'Atividades recreativas e esportivas para eventos corporativos, festas e encontros.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 flex justify-end">
                  <span className="text-indigo-600 font-medium">Saiba mais →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;