import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import BuyCarEasylogo from "../images/BuyCarEasy-logo.png"
import AutenticacaoContext from "./contexts/AutenticacaoContext"
import axios from "axios";

export default function SignInPage() {
  const navigate = useNavigate();
  const {setToken, setUsuario} = useContext(AutenticacaoContext)
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/login`, formData)
    .then(res => {
      setToken(res.data.token)
      setUsuario(res.data.nome)
      navigate("/home")
    })
    .catch(err => console.log(err.response.data))
  };

  return (
    <SingInContainer>
    <img src={BuyCarEasylogo}></img>
    <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          placeholder="Senha"
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          autoComplete="new-password"
        />
        <button>Entrar</button>
      </form>

      <Link to="/cadastro">Não possui um cadastro? Clique aqui!</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 300px;
  }
  
  a {
    font-size: 16px;
  }

  p { font-size: 50px;
      color: white;
      font-family: 'Faster One', cursive;
      margin-bottom: 50px;
  }
`
