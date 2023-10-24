import { useContext, useRef } from 'react';
import {
    Container,
    Carousel,
    ButtonContainer,
    ButtonIcon
} from './styles';
import { UserContexts } from '../../contexts/openmenu';
import SetIcon from '../../assets/216151_right_chevron_icon.png'

function Category() {

    const {color, setColor} = useContext(UserContexts);

    const carousel = useRef(null);

    const category = [
        {id: '1', name: 'Terror'},
        {id: '2', name: 'Ao vivo'},
        {id: '3', name: 'Jogos'},
        {id: '4', name: 'Música'},
        {id: '5', name: 'Comédia'},
        {id: '6', name: 'Romance'},
        {id: '7', name: 'Ficção cientifica'},
        {id: '8', name: 'Música popular brasileira'},
        {id: '9', name: 'Notícias'},
        {id: '10', name: 'Assistidos'},
        {id: '11', name: 'Assistidos'},
        {id: '12', name: 'Assistidos'},
        {id: '13', name: 'Assistidos'},
        {id: '14', name: 'Assistidos'},
        {id: '15', name: 'Assistidos'},
        {id: '16', name: 'Assistidos'},
        {id: '17', name: 'Assistidos'},
        {id: '18', name: 'Assistidos'},
        {id: '19', name: 'Assistidos'},
        {id: '20', name: 'Assistidos'},
        {id: '21', name: 'Assistidos'},
        {id: '22', name: 'Assistidos'},
       
    ]

   
    

    return(
        <Container>
            <ButtonContainer >
                <ButtonIcon  alt="sidebar" src={SetIcon} />
            </ButtonContainer>
            <Carousel color={color} ref={carousel}>
                {category.map((information) => (
                    <div onClick={() => setColor(!color)} key={information.id}>{information.name}</div>
                ))}
            </Carousel>
            <ButtonContainer >
                <ButtonIcon alt="sidebar" src={SetIcon} />
            </ButtonContainer>
        </Container>
    )
}

export default Category;