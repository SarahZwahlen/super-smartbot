import { HTTPPostClient } from "../../tools/httpClients/post.http";
import "./sendMail.scss";

export const SendMail = () => {
  const sendMail = async () => {
    await HTTPPostClient("send-mail");
  };

  return (
    <button className="button-primary send-button" onClick={sendMail}>
      Send mail
    </button>
  );
};
