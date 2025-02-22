import React from 'react';
import { Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Balance Life</h3>
            <p className="text-gray-400">
              Transformando vidas através do movimento e do equilíbrio.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400">Email: contato@balancelife.com.br</p>
            <p className="text-gray-400">Tel: (XX) XXXXX-XXXX</p>
            <p className="text-gray-400">São Paulo, SP</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Balance Life. Todos os direitos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400">Desenvolvido por</span>
            <a
              href="https://github.com/Rdemora2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center ml-2 text-gray-400 hover:text-white transition-colors"
            >
              Roberto Moraes
              <Github className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;