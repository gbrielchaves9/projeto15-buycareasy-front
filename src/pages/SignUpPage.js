import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nome, email, senha, confirmarSenha } = formData;
    if (senha !== confirmarSenha) {
      alert("Senhas não conferem");
      return;
    }
    try {
     
      alert("Cadastro realizado com sucesso!");
      navigate('/');
    } catch (error) {
      console.log(error);
      alert("Erro ao realizar cadastro.");
    }
  };

  return (
    <SingUpContainer>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
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
        <input
          placeholder="Confirme a senha"
          type="password"
          name="confirmarSenha"
          value={formData.confirmarSenha}
          onChange={handleInputChange}
          autoComplete="new-password"
        />
        <button>Cadastrar</button>
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
`
