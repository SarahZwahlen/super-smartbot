import { HTTPPostClient } from "../../tools/httpClients/post.http";

export const SendMail = () => {
  const sendMail = async () => {
    await HTTPPostClient("send-mail");
  };

  return <button onClick={sendMail}>Send mail</button>;
};
