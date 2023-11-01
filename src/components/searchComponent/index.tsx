import { useContext, useEffect, useState } from 'react'
import { UserContexts } from "../../contexts/openmenu";

import { 
    ChannelImage,
    Container,
    Content, 
    MainContainer,
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer,
    Description, 
    ContainerFalse
 } from "./styles";
import axios from 'axios';
import moment from 'moment';
import { SearchContexts } from '../../contexts/searchContext';

function SearchComponent() {

    const {openMenu} = useContext(UserContexts)

    interface Videos {
        id: string;
        snippet: {
          title: string;
          thumbnails: {
            high: {
              url: string
            }
            maxres: {
              url: string;
            }
          }
          channelTitle: string;
          publishedAt: string;
          description: string;
        }
      }

      const [videos, setVideos] = useState<Videos[]>([]);
      const {search} = useContext(SearchContexts)
      
      const API_KEY = 'AIzaSyDQdA6cW_D8IwKyMHrxHeNDGu0LLsUr3lA';

      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`
      
      useEffect(() => {
        load()
      },[search])

      async function load() {

        if(search !== '') {
            try {
                const resposta = await axios.get(url)
                setVideos(resposta.data.items)
            } catch (erro) {
                console.log(erro)
            }
        }
      }

    // function formatViewCount(viewCount: number) {
    //     if (viewCount >= 1000000) {
    //         return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
    //     } else if (viewCount >= 1000) {
    //         return `${(viewCount / 1000).toFixed(0)} mil de visualizações`;
    //     } else {
    //         return `${viewCount} visualizações`;
    //     }
    // }

    function getPublisheTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days')

        if (diffDays <= 0) {
            return 'Hoje';
        } else if (diffDays === 1) {
            return 'há 1 dia';
        } else if (diffDays <= 7) {
            return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
            const diffWeeks = Math.floor(diffDays / 7);
            if (diffWeeks === 1) {
                return 'há 1 semana';
            } else {
                return `há ${diffWeeks} semanas`;
            }
        } else if (diffDays <= 365) {
            const diffMonths = Math.floor(diffDays / 30);
            if (diffMonths === 1) {
                return 'há 1 mês';
            } else {
                return `há ${diffMonths} meses`;
            }
        } else {
            const diffYears = Math.floor(diffDays / 365);
            if (diffYears === 1) {
                return 'há 1 ano';
            } else {
                return `há ${diffYears} anos`;
            }
        }
    }



    return (
        <MainContainer>
            {search?
            
            <Container openmenu={openMenu}>
                {videos.map((video) => (
                    <div key={video.id}>
                        <Content>
                            <ImageBanner openmenu={openMenu} thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url} />
                            <TitleContainer>
                                <TextContainer>
                                    <Title>{video.snippet.title}</Title>
                                    <TextCard>{getPublisheTime(video.snippet.publishedAt)}</TextCard>
                                    <div>
                                        <ChannelImage>
                                            {video.snippet.channelTitle.charAt(0).toUpperCase()}
                                        </ChannelImage>
                                        <TextCard>{video.snippet.channelTitle}</TextCard>
                                    </div>
                                        <Description>{video.snippet.description}</Description>
                                </TextContainer>
                            </TitleContainer>
                        </Content>
                    </div>
                ))}
            </Container>

            :

            <ContainerFalse>Nenhum resultado encontrado</ContainerFalse>
            
            }
        </MainContainer>
    )
}

export default SearchComponent;