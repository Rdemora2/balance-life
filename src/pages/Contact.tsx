import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ArrowUpCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Define o scroll no topo ao acessar a página

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 text-gray-900"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Título reposicionado com mais espaçamento superior */}
      <div className="relative max-w-4xl mx-auto text-center pt-28 pb-8">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fale Conosco
        </motion.h1>
        <motion.p
          className="mt-3 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Estamos aqui para te ajudar. Entre em contato conosco e tire suas
          dúvidas!
        </motion.p>
      </div>

      {/* Contato e Formulário */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 grid md:grid-cols-2 gap-12">
        {/* Formulário */}
        <motion.div
          className="bg-white shadow-lg rounded-xl p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} /> Enviar Mensagem
            </button>
          </form>
        </motion.div>

        {/* Informações de Contato */}
        <motion.div
          className="bg-white shadow-lg rounded-xl p-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            Outras formas de contato
          </h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-gray-900 mr-3" />
              <span>(11) 95245-4101</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-gray-900 mr-3" />
              <span>contato@balancelife.com.br</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-gray-900 mr-3" />
              <span>São Paulo, SP</span>
            </div>
          </div>

          {/* Botão para WhatsApp */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5511952454104"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all"
            >
              <MessageCircle size={20} /> Conversar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Botão de Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-gray-900 p-3 rounded-full text-white shadow-lg hover:bg-gray-800 transition z-40"
        >
          <ArrowUpCircle size={32} />
        </button>
      )}
    </motion.div>
  );
};

export default Contact;
