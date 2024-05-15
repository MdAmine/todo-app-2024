import { Login } from "../components/Login/Login";

export default function Authentication({ onLogin }) {
  return (
    <>
      <Login onLogin={onLogin} />
    </>
  );
}