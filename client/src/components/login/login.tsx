import { useState } from "react";

interface UserAuthData {
  email: string | null;
  password: string | null;
}

export const Login = () => {
  const [userData, setUserData] = useState<UserAuthData>({
    email: null,
    password: null,
  });

  const handleLoginForm = (data: React.ChangeEvent<HTMLInputElement>) => {
    if (data.target.name === "email") {
      setUserData({ ...userData, email: data.target.value });
    }
    if (data.target.name === "password") {
      setUserData({ ...userData, password: data.target.value });
    }
  };

  return (
    <form>
      <label htmlFor="email">Email utilisateur</label>
      <input
        type="email"
        name="email"
        required
        placeholder="toto@mail.com"
        onChange={handleLoginForm}
      />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" name="password" required />
    </form>
  );
};
