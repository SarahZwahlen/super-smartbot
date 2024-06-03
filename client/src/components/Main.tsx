import { Login } from "./login/login";
import { SendMail } from "./send-mail/SendMail";
import "./Main.scss";
import { useAuth } from "../store/auth.context";
import { Logout } from "./logout/Logout";
export const Main = () => {
  const { isLogged } = useAuth();

  return (
    <main>
      {!isLogged && <Login />}
      {isLogged && <SendMail />}
      {isLogged && <Logout />}
    </main>
  );
};
