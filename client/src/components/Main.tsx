import { Login } from "./login/login";
import { SendMail } from "./send-mail/SendMail";
import "./Main.scss";

export const Main = () => {
  return (
    <main>
      <Login />
      <SendMail />
    </main>
  );
};
