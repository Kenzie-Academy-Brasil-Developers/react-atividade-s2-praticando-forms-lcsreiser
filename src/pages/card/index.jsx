import { Link } from "react-router-dom";
import "./style.css";

function Card({ users }) {
  console.log(users);
  return (
    <div className="divCard">
      <h2>Dados do usuário</h2>
      <h3>Usuário - {users.user}</h3>
      <h3>Nome completo - {users.name}</h3>
      <h3>E-mail - {users.email}</h3>
      <h3>Senha - {users.password}</h3>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Card;
