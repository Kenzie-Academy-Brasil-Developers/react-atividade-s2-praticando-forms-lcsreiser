import "./reset.css";
import "./App.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Card from "./pages/card";
import Login from "./pages/login";

function App() {
  const formSchema = yup.object().shape({
    user: yup
      .string()
      .required("Usuário obrigatório")
      .min(3, "O usuário precisa ter mais de 3 letras"),
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    emailConfirm: yup
      .string()
      .oneOf([yup.ref("email"), null], "E-mail diferente"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Sua senha deve conter uma letra maíscula, uma minúcula, um número e um caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha diferente"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [users, setUsers] = useState("");

  const onSubmitHandle = (data) => {
    setUsers(data);

    history.push("/card");

    // Fazer uma consulta a api utilizando esses dados
    // Enviar para api
  };

  return (
    <div className="divContainer">
      <Switch>
        <Route exact path="/">
          <form className="form" onSubmit={handleSubmit(onSubmitHandle)}>
            <input
              placeholder="Nome do usuário"
              {...register("user")}
              maxLength="18"
              autoComplete="off"
            />
            <p>{errors.user?.message}</p>
            <input
              placeholder="Nome completo"
              {...register("name")}
              autoComplete="off"
            />
            <p>{errors.name?.message}</p>
            <input
              placeholder="Endereço de e-mail"
              {...register("email")}
              autoComplete="off"
            />
            <p>{errors.email?.message}</p>
            <input
              placeholder="Confirme seu e-mail"
              {...register("emailConfirm")}
              autoComplete="off"
            />
            <p>{errors.emailConfirm?.message}</p>
            <input
              className="senha"
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <input
              className="senha"
              type="password"
              placeholder="Confirme sua senha"
              {...register("passwordConfirm")}
            />
            <p>{errors.password?.message}</p>
            <p>{errors.passwordConfirm?.message}</p>
            <button type="submit" onClick={() => onSubmitHandle}>
              CADASTRAR
            </button>
            <Link to="/login">Já possui uma conta ?</Link>
          </form>
        </Route>
        <Route exact path="/card">
          <Card users={users} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
