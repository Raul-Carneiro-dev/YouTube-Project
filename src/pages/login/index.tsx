import { useContext, useState } from "react";
import { UserContext } from '../../context/userContext'
import { 
    LoginContainer,
    LoginContent,
    LogoContainer
 } from './styles';
 import YoutubeLogo from '../../assets/YouTube-Icon-Full.png';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { handleLogin } = useContext(UserContext)

    

    return (
        <LoginContainer>
            <LoginContent>
                <LogoContainer>
                    <img src={YoutubeLogo} alt='' className="title-login" />
                    <span>YouTube</span>
                </LogoContainer>
                <input  placeholder="Digite seu email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input  placeholder="Digite seu senha" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => handleLogin(email, password)} >Log-in</button>
                <span className="register-content">Ainda não tem uma conta?<span onClick={() => navigate('/register')} className="gotoregister">Criar conta</span></span>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login;