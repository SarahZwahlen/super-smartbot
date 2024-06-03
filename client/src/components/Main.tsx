import { Login } from "./login/login";
import { SendMail } from "./send-mail/SendMail";
import "./Main.scss";
import { authenticationTool } from "../tools/auth/authentication";
import { useEffect, useState } from "react";
export const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    authenticationTool.isLogged
  );

  useEffect(() => {
    console.log("use effect !");
  }, [authenticationTool.isLogged]);

  return (
    <main>
      {!authenticationTool.isLogged && <Login />}
      {authenticationTool.isLogged && <SendMail />}
    </main>
  );
};
