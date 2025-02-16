"use client";
import { designContextType, pageDesign } from "@/types/types";
import { createContext, useState } from "react";

export const designContext = createContext<designContextType | null>(null);

const DesignContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentDesign, setCurrentDesign] = useState<pageDesign[]>([]);

  return (
    <designContext.Provider value={{ currentDesign, setCurrentDesign }}>
      {children}
    </designContext.Provider>
  );
};
export default DesignContextProvider;
