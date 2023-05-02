import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import CheckoutPage from "./pages/CheckoutPage"
import AutenticacaoContext from "./pages/contexts/AutenticacaoContext"
import { useState } from "react"



export default function App() {
  const [token, setToken] = useState(undefined)
  const [usuario, setUsuario] = useState(undefined)

  return (
    
    <PagesContainer>
      <AutenticacaoContext.Provider value={{token, setToken, usuario, setUsuario}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </AutenticacaoContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #5A619E;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
