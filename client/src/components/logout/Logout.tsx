import { useAuth } from "../../store/auth.context";

export const Logout = () => {
  const { logout } = useAuth();
  return (
    <button className="button-primary" onClick={logout}>
      Se déconnecter
    </button>
  );
};
