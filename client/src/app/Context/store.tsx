"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type TLead = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

type TContextProps = {
  leads: TLead[];
  setLeads: Dispatch<SetStateAction<TLead[]>>;
};

const GlobalContext = createContext<TContextProps>({
  leads: [],
  setLeads: () => {},
});

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [leads, setLeads] = useState<TLead[]>([]);

  return (
    <GlobalContext.Provider value={{ leads, setLeads }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext };
