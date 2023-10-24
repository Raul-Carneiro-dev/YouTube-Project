import { useContext, useState } from "react";
import { UserContext } from '../../context/userContext'
import { 
    LoginContainer,
    LoginContent
 } from './styles';
 import YoutubeLogo from '../../assets/YouTube-Logo.png';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { handleLogin } = useContext(UserContext)

    

    return (
        <LoginContainer>
            <LoginContent>
                <img src={YoutubeLogo} alt='' className="title-login"/>
                <input  placeholder="Digite seu email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input  placeholder="Digite seu senha" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => handleLogin(email, password)} >Log-in</button>
                <span className="register-content">Ainda não tem uma conta?<span onClick={() => navigate('/register')} className="gotoregister">Criar conta</span></span>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login;