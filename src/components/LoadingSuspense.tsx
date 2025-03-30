import React, { Suspense } from "react";
import { motion } from "framer-motion";

interface LoadingSuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback = () => (
  <motion.div
    className="flex items-center justify-center min-h-[200px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </motion.div>
);

const LoadingSuspense: React.FC<LoadingSuspenseProps> = ({
  children,
  fallback = <DefaultFallback />,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LoadingSuspense;
