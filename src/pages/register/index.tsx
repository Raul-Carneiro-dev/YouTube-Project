import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from '../../context/userContext'
import { 
    LoginContainer,
    LoginContent,
    LogoContainer,
    UserNameInput,
    UserEmailInput,
    UserPassword,
    MessageContainer,
    CheckboxContent
 } from '../login/styles';
 import YoutubeLogo from '../../assets/YouTube-Icon-Full.png';

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmed, setPasswordConfirmed] = useState('')

    const [userNameValid, setUserNameValid] = useState(true)
    const [userEmailValid, setUserEmailValid] = useState(true)
    const [userPasswordValid, setUserPasswordValid] = useState(true)
    const [formatEmailValid, setFormatEmailValid] = useState(true)
    const [samePassword, setSamePassword] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const comparePasswordRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        if(nameRef.current !== null) {
            nameRef.current.focus();
        }
    },[])

    const { handleRegister } = useContext(UserContext)

    const createUser = () => {

        if (name.trim() !== '') {
          setUserNameValid(true)
        }
        if (email.trim() !== '') {
          setUserEmailValid(true)
        }
        if (password.trim() !== '' && passwordConfirmed.trim() !== '') {
          setUserPasswordValid(true)
        }
        if (name.trim() === '' && email.trim() === '' && password.trim() === '') {
          setUserNameValid(false)
          setUserEmailValid(false)
          setUserPasswordValid(false)
          if (nameRef.current) {
            nameRef.current.focus();
          }
        }
        else if (name.trim() === '') {
          setUserNameValid(false)
          if (nameRef.current) {
            nameRef.current.focus();
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
        else if (password.trim() === '' || password.length < 8) {
          setUserPasswordValid(false)
          if (passwordRef.current) {
            passwordRef.current.focus()
          }
        }
        else if (passwordConfirmed.trim() === '') {
          setUserPasswordValid(false)
          if (comparePasswordRef.current) {
            comparePasswordRef.current.focus()
          }
        }
        else if (password !== passwordConfirmed) {
          setUserPasswordValid(false)
          setSamePassword(false)
          if (comparePasswordRef.current) {
            comparePasswordRef.current.focus()
          }
        }
        else {
            handleRegister(name, email, password)
          
        }
      }

    

    return (
      <LoginContainer>
        <LoginContent valid={userNameValid}>
          <LogoContainer>
            <img src={YoutubeLogo} alt='' className="title-login" />
          </LogoContainer>
          <UserNameInput valid={userNameValid} placeholder="Digite seu nome" type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <MessageContainer valid={userNameValid}>
            <span>Digite seu nome</span>
          </MessageContainer>
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
          <div>
            <UserPassword padding='5px' width='118px' valid={userPasswordValid} className="input-password" placeholder="Digite seu senha" type={showPassword? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
            <UserPassword padding='5px' width='118px' valid={userPasswordValid} className="input-password" placeholder="Corfirmar senha" type={showPassword? 'text' : 'password'} value={passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} />
          </div>
          <MessageContainer valid={userPasswordValid}>
            <span>
              {
              samePassword?
              'Digite uma senha de pelo menos 8 caracteres e confirme'
              :
              'Senha inválida. Verifique se estão iguais'
              }
            </span>
          </MessageContainer>
          <CheckboxContent>
                  <input type="checkbox" id='show-password' checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
                  <label htmlFor="show-password">Mostrar senha</label>
                </CheckboxContent>
          <button onClick={createUser} >Sign-up</button>
        </LoginContent>
      </LoginContainer>
    )
}

export default Register;