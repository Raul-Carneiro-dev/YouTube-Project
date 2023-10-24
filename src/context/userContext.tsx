import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({} as any)

export const UserStorage = ({ children }: any) => {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    
    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
         setUser(data.user)
         setLogin(true);
         navigate('/');
        }).catch((error) => {
          console.log('Usuário não autenticado', error)
        })
    }


    // useEffect(() => {
    //     getUser(token);
    // }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleRegister = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(() => {
           navigate('/login')
        }).catch ((error) => {
            console.log("Erro no cadastro", error);
        })
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
           setLogin(true);
           localStorage.setItem('token', data.token);
           setToken(data.token);
           getUser(data.token);
        }).catch ((error) => {
            console.log('Não foi possivel fazer o login', error);
        })
    }

    const handleRegisterVideos = (token: string, user_id: string, title: string, views: string, time: string) => {
        api.post('/videos/create-video', {headers: {Authorization: token}, user_id, title, views, time}).then(() => {
            alert('Registrado com sucesso')
         
        }).catch ((error) => { 
            console.log("Erro em cadastrar video", error);
        })
    }

    return (
        <UserContext.Provider value={{
            login,      
            user,
            handleLogin,
            logOut,
            handleRegister,
            handleRegisterVideos
        }}>
            {children}
        </UserContext.Provider>
    )
}