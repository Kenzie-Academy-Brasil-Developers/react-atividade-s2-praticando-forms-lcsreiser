import { Link } from "react-router-dom";
import "./style.css";

function Card({ users }) {
  return (
    <div className="divCard">
      <h2 className="dataUser">Dados do usuário</h2>
      <h3 className="user">Usuário - {users.user}</h3>
      <h3 className="user">Nome completo - {users.name}</h3>
      <h3 className="user">E-mail - {users.email}</h3>
      <h3 className="user last">Senha - {users.password}</h3>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Card;
