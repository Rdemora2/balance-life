import React from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";

const InitialLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-50 flex items-center justify-center">
      <div className="absolute inset-0">
        <LoadingAnimation />
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Balance Life
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Carregando...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default InitialLoading;
