import { useContext, useRef, useState } from 'react';
import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    LoginButton,
    DropMenu,
    UserContainer,
    UserInfo,
    LogOut,
    LogOutContent,
    MenuMobileButton

 } from "./styles";

import HamburgerIcon from '../../assets/hamburger.png';
import YoutubeLogo from '../../assets/YouTube-Icon-Full.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { UserContexts } from '../../contexts/openmenu';
import { SearchContexts } from '../../contexts/searchContext';


function Header() {

    const { openMenu, setOpenMenu } = useContext(UserContexts);
    const {login, logOut, user} = useContext(UserContext);
    const [dropMenu, setDropMenu] = useState(false)
    const {setSearch} = useContext(SearchContexts)
    
    const [inputValue, setInputValue] = useState('')

    function handleInput(inputValue: string ) {
        setInputValue(inputValue)
    }

    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonIcon onClick={() => setOpenMenu(!openMenu)} alt="sidebar" src={HamburgerIcon}/>
                </ButtonContainer>
                <img
                   style={{cursor: 'pointer', width: '100px'}}
                   alt="youtube-logo"
                   className='youtube-icon'
                   src={YoutubeLogo}  
                   onClick={() => navigate('/')}             
                />
                <span>YouTube</span>
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput 
                      placeholder="Pesquisar"
                      value={inputValue}
                      onChange={(e) => {
                        handleInput(e.target.value)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                        }
                      }}
                      />
                </SearchInputContainer>
                <SearchButton onClick={() => {
                    if(inputValue.trim() === '') {
                        alert('Digite alguma palavra antes de tentar pesquisar')
                    }
                        setSearch(inputValue)
                        navigate('/search')
                }}>
                    <ButtonIcon alt="search" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px' backgroundcolor='#f2f2f2'>
                    <ButtonIcon alt="Microfone" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                
                {login ?
                    <>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon onClick={() => navigate('/registervideos')} alt="VideoIcon" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon alt="NotificationIcon" src={NotificationIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 0 0 10px' backgroundcolor='#f2f2f2' onClick={() => setDropMenu(!dropMenu)}>
                            <span>{user.nome.substr(0, 1)}</span>
                        </ButtonContainer>

                        <DropMenu dropmenu={dropMenu}>
                            <UserContainer>
                                <ButtonContainer margin='0 0 0 10px' backgroundcolor='#f2f2f2'>
                                    <span>{user.nome.substr(0, 1)}</span>
                                </ButtonContainer>
                                <UserInfo>
                                    <span className='user-name'>{user.nome}</span>
                                    <span className='user-email'>{user.email}</span>
                                </UserInfo>
                            </UserContainer>
                            <LogOut>
                                <LogOutContent>
                                    <img src='https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png' alt='logout-icon' />
                                    <span onClick={() => logOut()}>Sair</span>
                                </LogOutContent>
                            </LogOut>
                        </DropMenu>

                    </>
                    :
                    <>
                        <LoginButton onClick={() => navigate("/login")}>Fazer login</LoginButton>
                        <MenuMobileButton onClick={() => navigate("/login")}/>
                    </>
                }
            </HeaderButton>
        </Container>
    )
}

export default Header;