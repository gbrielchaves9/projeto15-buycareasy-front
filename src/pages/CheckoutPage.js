import styled from "styled-components"
import logo from "../images/logo.png"
import dots from "../images/dots.png"
import mastercard from "../images/mastercard.png"
export default function CheckoutPage() {
    return(
        <CheckoutContainer>
           <DivImage>
                <img src={logo}></img>
                <p>BuyCarEasy</p>
           </DivImage>
           <form>
                <DivInputCardNumber>
                    <p>Número do cartão</p>
                    <span>Coloque o número de 16 dígitos do cartão</span>
                    <img src={mastercard}></img>
               </DivInputCardNumber>
               <InputCreditCard
                        placeholder="2412 - 2412 - 2412 - 2412 "
                        required
                    />
                <DivInputSecurityNumber>
                    <div>
                        <p>Código de segurança</p>
                        <span>Coloque o número de 3 ou 04 dígitos no cartão</span>
                    </div>
                    <img src={dots}></img>
                    <InputSecurityNumber
                        placeholder="4412"
                        required
                    />
                </DivInputSecurityNumber>
                <DivInputExpirationDate>
                     <div>
                        <p>Data de validade</p>
                        <span>Coloque a data de validade do cartão</span>
                    </div>
                    <InputExpirationDate
                        placeholder="18"
                        required
                    />
                    <h3>/</h3>
                    <InputExpirationDate
                        placeholder="23"
                        required
                    />
                </DivInputExpirationDate>
                <DivInputCardPassword>
                    <div>
                        <p>Senha do cartão</p>
                        <span>Coloque a senha do cartão</span>
                    </div>
                    <img src={dots}></img>
                    <InputCardPassword
                        placeholder="*********"
                        required
                    />
                </DivInputCardPassword>
                <button>Pague agora</button>
           </form>
        </CheckoutContainer>
    )

}

//1266x832

const CheckoutContainer = styled.main`
    height: 100vh;
    background: #D0CBB5;
    border-radius: 30px;

    form { 
        display: flex;
        align-items: flex-start;
        padding: 30px;
        p {
            color: #000000;
            font-family: "Poppins";
            font-weight: bold;
            font-size: 28px;
        }
        span{
            color: #000000;
            opacity: 50%;
            line-height: 1px;
        }
    }
    button {
        background-color: #3E468E;
        opacity: 86%;
        height: 80px;
        width: 740px;
        margin-left: 20px;
        border-radius: 10px;
        font-size: 35px;
        font-family: "Poppins";
        color: #B8B1A8;
    }
`
const DivImage = styled.div` 
    display: flex;
    align-items: center;
    padding: 30px;

    img {
        height: 50px;
        margin-right: 10px;
    }
    p {
        font-family: "Faster One";
        color: #3E468E;
        font-size: 26px;
    }
`
const DivInputCardNumber = styled.div` 
    p {
        margin-bottom: 6px;
    }
    img {    
        width: 50px;
        position: absolute;
        right: 1050px;
        top: 255px;
    }
`
const InputCreditCard = styled.input`
    margin: 20px;
    width: 700px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #3E468E;
    background-color: #B8B1A8;
        
    ::placeholder {
        padding-left: 180px;
        color: #000000;
        opacity: 70%;
        font-size: 30px;
        font-family: "Poppins";
    }
`

const DivInputSecurityNumber = styled.div`
    display: flex;
    margin-top: 10px;

    div {
        margin-top: 10px;
         span{
            line-height: 30px;
        }
    }
    img{
        position: absolute;
        top: 390px;
        right: 480px;
    }
`
const InputSecurityNumber = styled.input`
    width: 354px;
    height: 50px;
    margin-left: 20px;
    border-radius: 10px;
    border: 1px solid #3E468E;
    background-color: #B8B1A8;

        ::placeholder {
            padding-left: 140px;
            color: #000000;
            font-size: 30px;
            font-family: "Poppins";
            
        }
`
const DivInputExpirationDate = styled.div`
    display: flex;
    margin-top: 10px;

    div {
        margin-top: 10px;
        margin-right: 90px;
         span{
            line-height: 30px;
        }
    }
    h3{
        font-size: 50px;
        margin-top: 20px;
        margin-right: 10px;
        margin-left: 10px;
    }
    
`
const InputExpirationDate = styled.input`
    width: 135px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #3E468E;
    background-color: #B8B1A8;

        ::placeholder {
            padding-left: 50px;
            color: #000000;
            font-size: 30px;
            font-family: "Poppins";
        }
`

const DivInputCardPassword = styled.div`
    display: flex;
    margin-top: 10px;

    div {
        margin-top: 10px;
         span{
            line-height: 30px;
        }
    }
    img{
        position: absolute;
        top: 608px;
        right: 475px;
    }
`
const InputCardPassword = styled.input`
    width: 354px;
    height: 50px;
    margin-left: 170px;
    border-radius: 10px;
    border: 1px solid #3E468E;
    background-color: #B8B1A8;

        ::placeholder {
            padding-left: 110px;
            color: #000000;
            font-size: 30px;
            font-family: "Poppins";
            font-weight: bold;
            
        }
`