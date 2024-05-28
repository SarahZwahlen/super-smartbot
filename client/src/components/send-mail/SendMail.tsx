export const SendMail = () => {
  const sendMail = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/send-mail`,
      { method: "post", body: JSON.stringify({ user: "coucou" }) }
    );
    console.log("response", response);
  };

  return <button onClick={sendMail}>Send mail</button>;
};
