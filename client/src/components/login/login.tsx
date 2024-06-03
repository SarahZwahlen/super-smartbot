import { useState } from "react";
import "./Login.scss";
import { UserAuthData } from "../../models/userAuthData.model";
import { useAuth } from "../../store/auth.context";

export const Login = () => {
  const [userData, setUserData] = useState<UserAuthData>({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleLoginForm = (data: React.ChangeEvent<HTMLInputElement>) => {
    if (data.target.name === "email") {
      setUserData({ ...userData, email: data.target.value });
    }
    if (data.target.name === "password") {
      setUserData({ ...userData, password: data.target.value });
    }
  };

  const logUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <form className="login-form">
      <label htmlFor="email">Email utilisateur</label>
      <input
        type="email"
        name="email"
        required
        placeholder="toto@mail.com"
        onChange={handleLoginForm}
        value={userData.email}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="password"
        required
        onChange={handleLoginForm}
        value={userData.password}
      />
      <button className="button-primary" onClick={logUser}>
        Se connecter
      </button>
    </form>
  );
};
