import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const formSchema = yup.object().shape({
    user: yup
      .string()
      .required("Usuário obrigatório")
      .min(3, "O usuário precisa ter mais de 3 letras"),
    password: yup.string().required("Senha obrigatória"),
  });

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
  };

  users && console.log(users);

  return (
    <div className="divContainer">
      <form className="form" onSubmit={handleSubmit(onSubmitHandle)}>
        <input
          placeholder="Nome do usuário"
          {...register("user")}
          maxLength="18"
          autoComplete="off"
        />
        <p>{errors.user?.message}</p>
        <input type="password" placeholder="Senha" {...register("password")} />
        <button type="submit">Entrar</button>
        <Link to="/">Voltar</Link>
      </form>
    </div>
  );
}

export default Login;
