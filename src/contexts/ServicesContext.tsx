import React, { createContext, useContext } from "react";
import { Service } from "../models/Service";
import { services } from "../data/Service";

interface ServicesContextType {
  services: Service[];
}

const ServicesContext = createContext<ServicesContextType>({ services });

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ServicesContext.Provider value={{ services }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
