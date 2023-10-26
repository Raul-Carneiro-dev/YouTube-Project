import { useContext, useRef } from 'react';
import {
    Container,
    Carousel,
    ButtonContainer,
    ButtonIcon
} from './styles';
import { UserContexts } from '../../contexts/openmenu';
import SetIcon from '../../assets/216151_right_chevron_icon.png'
import { CategoryContexts } from '../../contexts/searchcategory';

function Category() {

    const {color, openMenu} = useContext(UserContexts);
    const {setCategoryId} = useContext(CategoryContexts)

    const carousel = useRef(null as any);

    const category = [
        { id: '0', name: 'Tudo'},
        { id: '20', name: 'Games'},
        { id: '17', name: 'Futebol'},
        { id: '24', name: 'Entretenimento'},
        { id: '10', name: 'Música'},
        { id: '22', name: 'Pessoas e blogs'},
        { id: '2', name: 'Automóveis e veículos'},
        { id: '15', name: 'Animais e pets'},
        { id: '25', name: 'Notícias e política'},
        { id: '23', name: 'Comédia'},
        { id: '26', name: 'Shorts'},
        { id: '1', name: 'Infantil'},
        { id: '22', name: 'Vida a dois'},
        { id: '17', name: 'Esportes'},
        { id: '23', name: 'Memes'},
        { id: '20', name: 'Jogos pc'},
        { id: '25', name: 'Jornais'},
        { id: '1', name: 'Kids'},
        { id: '10', name: 'Hits do momento'},
        { id: '22', name: 'História das civilizações'},
        { id: '15', name: 'Ciências'},
        { id: '24', name: 'Viagens pelo mundo'},
        { id: '23', name: 'Séries'},
        { id: '24', name: 'Novidades'},
        { id: '1', name: 'Educação'}, 
        { id: '2', name: 'Ciência e tecnologia'}, 
        { id: '26', name: 'Documentários'}, 
        { id: '25', name: 'Economia'}, 
        { id: '20', name: 'Investimentos e finanças'}, 
        { id: '23', name: 'Moda e estilo'},
        { id: '10', name: 'Comunicação'},
        { id: '24', name: 'Beleza'},
    ]

    function searchCategory(id: string) {
        setCategoryId(id)
    }

    const handleLeftClick = (e: any) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRighttClick = (e: any) => {
        e.preventDefault();
        carousel.current.scrollLeft += 350
    }

    return(
        <Container openMenu={openMenu}>
            <ButtonContainer onClick={handleLeftClick}>
                <ButtonIcon  alt="sidebar" src={SetIcon} />
            </ButtonContainer>
            <Carousel color={color} ref={carousel}>
                {category.map((information, index) => (
                    <button onClick={() => searchCategory(information.id)} key={index}>{information.name}</button>
                ))}
            </Carousel>
            <ButtonContainer onClick={handleRighttClick}>
                <ButtonIcon alt="sidebar" src={SetIcon} />
            </ButtonContainer>
        </Container>
    )
}

export default Category;