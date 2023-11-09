import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from '../../context/userContext'
import { 
    LoginContainer,
    LoginContent,
    LogoContainer,
    UserEmailInput,
    UserPassword,
    MessageContainer,
    CheckboxContent
    
 } from './styles';
 import YoutubeLogo from '../../assets/YouTube-Icon-Full.png';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    


    const [userEmailValid, setUserEmailValid] = useState(true)
    const [userPasswordValid, setUserPasswordValid] = useState(true)
    const [formatEmailValid, setFormatEmailValid] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        if(emailRef.current !== null) {
            emailRef.current.focus();
        }
    },[])

    const { handleLogin } = useContext(UserContext)

    const LoginUser = () => {

        if (email.trim() !== '') {
          setUserEmailValid(true)
        }
        if (password.trim() !== '') {
          setUserPasswordValid(true)
        }
        if (email.trim() === '' && password.trim() === '') {
          setUserEmailValid(false)
          setUserPasswordValid(false)
          if (emailRef.current) {
            emailRef.current.focus();
          }
        }
        else if (email.trim() === '') {
          setUserEmailValid(false)
          setFormatEmailValid(true)
          if (emailRef.current) {
            emailRef.current.focus()
          } 
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
          setFormatEmailValid(false)
          setUserEmailValid(false)
          if (emailRef.current) {
            emailRef.current.focus()
          } 
        }
        else {
            handleLogin(email, password)
        }
      }

    

    return (
        <LoginContainer>
            <LoginContent>
                <LogoContainer>
                    <img src={YoutubeLogo} alt='' className="title-login" />
                </LogoContainer>
                <UserEmailInput valid={userEmailValid} placeholder="Digite seu email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <MessageContainer valid={userEmailValid}>
                    <span>
                    {
                    formatEmailValid?
                    'Digite seu e-mail'
                    :
                    'O formato desse e-mail é inválido. Digite um e-mail válido'
                    }
                    </span>
                </MessageContainer>
                <UserPassword padding='1rem' width='250px' valid={userPasswordValid} placeholder="Digite seu senha" type={showPassword? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                <MessageContainer valid={userPasswordValid}>
                    <span>Digite sua senha</span>
                </MessageContainer>
                <CheckboxContent>
                  <input type="checkbox" id='show-password' checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
                  <label htmlFor="show-password">Mostrar senha</label>
                </CheckboxContent>
                <button onClick={LoginUser} >Log-in</button>
                <span className="register-content">Ainda não tem uma conta?<span onClick={() => navigate('/register')} className="gotoregister">Criar conta</span></span>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login;