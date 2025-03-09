import React from "react";
import { Instagram, Github, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Balance Life</h3>
            <p className="text-gray-400">
              Transformando vidas através do movimento e do equilíbrio.
            </p>
          </div>
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400">Email: contato@balancelife.com.br</p>
            <p className="text-gray-400">Tel: (11) 95245-4104</p>
            <p className="text-gray-400">São Paulo, SP</p>
          </div>
          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/gabriel_nafita?igsh=bG1hZHdhbmk2bnI2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511952454104"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 Balance Life. Todos os direitos reservados.
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

export default React.memo(Footer);
