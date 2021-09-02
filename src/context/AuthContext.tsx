import React, { useState } from "react";
import { useContext } from "react";
import { USER_PREFIX } from "../assets/constants/consts";
import useLocalStorage from "../Hooks/useLocalStorage";

export const AuthContext = React.createContext<any>(null);

export const useUser = () => {
  return useContext(AuthContext);
};

const init = {
  token: "",
  name: "",
  user_id: 0,
  role: "",
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getFromLocalStorage } = useLocalStorage();
  const [user, setUser] = useState(getFromLocalStorage(USER_PREFIX) || init);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
