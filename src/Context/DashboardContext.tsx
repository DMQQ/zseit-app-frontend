import { createContext, useContext } from "react";

const DashboardContext = createContext({});

export function useDashboardContext() {
  return useContext(DashboardContext);
}

interface IDashboardProps {
  children: React.ReactNode;
}

export default function DashboardContextProvider({
  children,
}: IDashboardProps) {
  return (
    <DashboardContext.Provider value={{}}>{children}</DashboardContext.Provider>
  );
}
