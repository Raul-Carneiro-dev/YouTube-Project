import { useContext, useState } from 'react';
import {
    ContainerRegister,
    ContentRegister
} from './styles'
import { UserContext } from '../../context/userContext';

function RegisterVideos() {

    const [user_id, setUser_Id] = useState('');
    const [title, setTitle] = useState('');
    const [views, setViews] = useState('');
    const [time, setTime] = useState('');

    const { handleRegisterVideos } = useContext(UserContext)

    return (
         <ContainerRegister>
            <ContentRegister>
                <input placeholder="Digite seu id de usuário" type='text' value={user_id} onChange={(e) => setUser_Id(e.target.value)} />
                <input placeholder="Digite o titulo do video" type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="Digite o numero de visualizações" type='text' value={views} onChange={(e) => setViews(e.target.value)} />
                <input placeholder="Digite a quanto tempo o video está disponivel" type='text' value={time} onChange={(e) => setTime(e.target.value)} />
                <button onClick={() => handleRegisterVideos( user_id, title, views, time )} >Sign-up</button>
            </ContentRegister>
         </ContainerRegister>
    )
}

export default RegisterVideos;