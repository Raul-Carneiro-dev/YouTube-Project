import { useContext } from 'react';
import { UserContexts } from "../../contexts/openmenu";
import { 
    Container, 
    MenuItem,
    ButtonIcon,
    MenuItemSecondCore,
    BetweenCore,
    SecondCore,
    FooterMenu
 } from "./styles";
import { useNavigate } from 'react-router-dom';

const firstCore = [
    {id: '1', title: 'Inicio', icone: 'https://lordicon.com/icons/system/outline/41-home.svg', link: '/'}, 
    {id: '2', title: 'Shorts', icone: 'https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15252.png', link: '/shorts'}, 
    {id: '3', title: 'Inscrições', icone: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png', link: '/inscricoes'}
]

const secondCore = [
    {id: '1', title: 'Biblioteca', icone: 'https://cdn-icons-png.flaticon.com/512/2989/2989835.png', link: '/biblioteca'}, 
    {id: '2', title: 'Histórico', icone: 'https://cdn-icons-png.flaticon.com/128/3503/3503786.png', link: '/historico'}, 
    {id: '3', title: 'Seus vídeos', icone: 'https://cdn-icons-png.flaticon.com/512/160/160205.png', link: '/seusvideos'},
    {id: '4', title: 'Seus filmes', icone: 'https://cdn-icons-png.flaticon.com/512/92/92197.png', link: '/seusfilmes'},
    {id: '5', title: 'Assitir mais tarde', icone: 'https://cdn-icons-png.flaticon.com/128/3311/3311693.png', link: '/assistirmaistarde'},
    {id: '6', title: 'Seus clipes', icone: 'https://cdn.icon-icons.com/icons2/1518/PNG/512/scissormono_105867.png', link: '/seusclipes'},
]

const thirdCore = [
    {id: '1', title: 'Em alta', icone: 'https://icon-library.com/images/burn-calories-icon/burn-calories-icon-4.jpg', link: '/emalta'}, 
    {id: '2', title: 'Shopping', icone: 'https://pic.onlinewebfonts.com/thumbnails/icons_568456.svg', link: '/shopping'}, 
    {id: '3', title: 'Música', icone: 'https://cdn1.iconfinder.com/data/icons/lightly-selected/30/music-alt-480.png', link: '/musica'},
    {id: '4', title: 'Filmes', icone: 'https://cdn-icons-png.flaticon.com/512/92/92197.png', link: '/filmes'},
    {id: '5', title: 'Ao vivo', icone: 'https://cdn-icons-png.flaticon.com/512/6329/6329580.png', link: '/aovivo'},
    {id: '6', title: 'Jogos', icone: 'https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png', link: '/jogos'},
    {id: '7', title: 'Notícias', icone: 'https://static.thenounproject.com/png/3282670-200.png', link: '/noticias'},
    {id: '8', title: 'Esportes', icone: 'https://cdn-icons-png.flaticon.com/512/196/196049.png', link: '/esportes'},
    {id: '9', title: 'Aprender', icone: 'https://cdn-icons-png.flaticon.com/128/82/82648.png', link: '/aprender'},
]

const fourthCore = [
    {id: '1', title: 'YouTube Premium', icone: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png', link: '/youtubepremium'}, 
    {id: '2', title: 'YouTube Studio', icone: 'https://static.wikia.nocookie.net/logopedia/images/5/51/YouTube_Studio_icon_2021.png', link: '/youtubestudio'}, 
    {id: '3', title: 'YouTube Music', icone: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/240px-Youtube_Music_icon.svg.png', link: '/youtubemusic'},
    {id: '4', title: 'YouTube Kids', icone: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/1267px-YouTube_Kids_LogoVector.svg.png', link: '/youtubekids'},
]

const fivethCore = [
    {id: '1', title: 'Configurações', icone: 'https://img.freepik.com/icones-gratis/engrenagem_318-864870.jpg', link: '/configuracoes'}, 
    {id: '2', title: 'Histórico de denúncias', icone: 'https://www.svgrepo.com/download/125014/flag.svg', link: '/historicodedenuncias'}, 
    {id: '3', title: 'Ajuda', icone: 'https://cdn-icons-png.flaticon.com/512/6559/6559261.png', link: '/ajuda'},
    {id: '4', title: 'Enviar feedback', icone: 'https://icons.veryicon.com/png/o/miscellaneous/heg-main-function-icon/feedback-26.png', link: '/enviarfeedback'},
]


function Menu() {

    const {openMenu} = useContext(UserContexts);
    
    const navigate = useNavigate();

    return (
        <Container openmenu={openMenu}>
            {firstCore.map((description) => (
                <MenuItem openmenu={openMenu} key={description.id} onClick={() => navigate(description.link)}>
                    <ButtonIcon  alt="NotificationIcon" src={description.icone} />
                    <span>{description.title}</span>
                </MenuItem>
            ))}
            <BetweenCore openmenu={openMenu}>
            </BetweenCore>
            <SecondCore>
                {secondCore.map((description) => (
                    <MenuItemSecondCore openmenu={openMenu} key={description.id} onClick={() => navigate(description.link)}>
                        <ButtonIcon alt="NotificationIcon" src={description.icone} />
                        <span>{description.title}</span>
                    </MenuItemSecondCore>
                ))}
                <BetweenCore openmenu={openMenu}>
                </BetweenCore>
            </SecondCore>
            <SecondCore>
                <span className='title-core'>Explorar</span>
                {thirdCore.map((description) => (
                    <MenuItemSecondCore openmenu={openMenu} key={description.id} onClick={() => navigate(description.link)}>
                        <ButtonIcon  alt="NotificationIcon" src={description.icone} />
                        <span>{description.title}</span>
                    </MenuItemSecondCore>
                ))}
                <BetweenCore openmenu={openMenu}>
                </BetweenCore>
            </SecondCore>
            <SecondCore>
                <span className='title-core' style={{marginRight: '20%'}}>Mais do YouTube</span>
                {fourthCore.map((description) => (
                    <MenuItemSecondCore openmenu={openMenu} key={description.id} onClick={() => navigate(description.link)}>
                        <ButtonIcon  alt="NotificationIcon" src={description.icone} />
                        <span>{description.title}</span>
                    </MenuItemSecondCore>
                ))}
                <BetweenCore openmenu={openMenu}>
                </BetweenCore>
            </SecondCore>
            <SecondCore>
                {fivethCore.map((description) => (
                    <MenuItemSecondCore openmenu={openMenu} key={description.id} onClick={() => navigate(description.link)}>
                        <ButtonIcon  alt="NotificationIcon" src={description.icone} />
                        <span>{description.title}</span>
                    </MenuItemSecondCore>
                ))}
                <BetweenCore openmenu={openMenu}>
                </BetweenCore>
            </SecondCore>
            <SecondCore>
                <FooterMenu openmenu={openMenu}>
                    <div className='footer-sobre'>
                        <div>
                            <span>Sobre</span>
                            <span>Imprensa</span>
                        </div>
                        <span>Direitos autorais</span>
                        <span>Criadores de conteúdo</span>
                        <div>
                            <span>Publicidade</span>
                            <span>Desenvolvedores</span>
                        </div>
                    </div>
                    <div className='footer-termos'>
                        <div>
                            <span>Termos</span>
                            <span>Privacidade</span>
                        </div>
                        <span>Política e segurança</span>
                        <span>Como funciona o Youtube</span>
                        <span>Testar os novos recursos</span>
                    </div>
                    <span className='copy'>&copy; 2023 Google LLC | Todos os direitos reservados</span>
                </FooterMenu>
            </SecondCore>
        </Container>
    )
}

export default Menu;