import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BuyCarEasylogo from "../images/BuyCarEasy-logo.png"
import axios from "axios";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    if (formData.senha !== formData.confirmarSenha) {
      alert("Senhas não conferem");
    } 
    else {
      delete formData.confirmarSenha
      console.log(formData)
      const promise = axios.post(`${process.env.REACT_API}/cadastro`, formData)
      await promise.then((res) => {
        console.log(res.data)
        navigate("/")
        .catch(err => console.log(err.response.data))})
      }
    }
      
  


  return (
    <SingUpContainer>
      <img src={BuyCarEasylogo}></img>
    <p>Cadastro</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          autoComplete="new-password"
          required
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          name="confirmarSenha"
          value={formData.confirmarSenha}
          onChange={handleInputChange}
          autoComplete="new-password"
          required
        />
        <button
        type="submit">Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  );
}


const SingUpContainer = styled.section`
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
