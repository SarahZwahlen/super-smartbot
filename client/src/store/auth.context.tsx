import { createContext, useContext, useState } from "react";
import { UserAuthData } from "../models/userAuthData.model";
import { HTTPPostClient } from "../tools/httpClients/post.http";
import { HTTPDeleteClient } from "../tools/httpClients/delete.http";

type AuthContextType = {
  isLogged: boolean;
  login: (userData: UserAuthData) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext({
  isLogged: false,
  login: (userData: UserAuthData) => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const login = async (userData: UserAuthData) => {
    const response = await HTTPPostClient("login", JSON.stringify(userData));
    setIsLogged(response.status === 200);
  };

  const logout = async () => {
    const response = await HTTPDeleteClient("logout");
    setIsLogged(response.status === 200 ? false : true);
  };

  const authContext: AuthContextType = {
    isLogged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
