import { Login } from "./login/login";
import { SendMail } from "./send-mail/SendMail";

export const Main = () => {
  return (
    <main>
      <Login />
      <SendMail />
    </main>
  );
};
