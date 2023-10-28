import { useContext, useState } from "react";
import { UserContext } from '../../context/userContext'
import { 
    LoginContainer,
    LoginContent,
    LogoContainer
 } from '../login/styles';
 import YoutubeLogo from '../../assets/YouTube-Icon-Full.png';

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleRegister } = useContext(UserContext)

    

    return (
        <LoginContainer>
            <LoginContent>
                <LogoContainer>
                    <img src={YoutubeLogo} alt='' className="title-login" />
                    <span>YouTube</span>
                </LogoContainer>
                <input placeholder="Digite seu nome" type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Digite seu email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Digite seu senha" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => handleRegister(name, email, password)} >Sign-up</button>
            </LoginContent>
        </LoginContainer>
    )
}

export default Register;