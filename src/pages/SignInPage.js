import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BuyCarEasylogo from "../images/BuyCarEasy-logo.png"

export default function SignInPage() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, senha } = formData;
    try {
   //   const response = await fazerLogin(email, senha);
    //  console.log(response);
 //     setToken(response.token);
    } catch (error) {
      console.log(error);
      alert('Erro ao fazer login.');
    }
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
  
  a {
    font-size: 16px;
  }

  p { font-size: 50px;
      color: white;
      font-family: 'Faster One', cursive;
      margin-bottom: 50px;
  }
`
