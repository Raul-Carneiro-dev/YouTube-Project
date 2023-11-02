import { useContext, useEffect, useState } from 'react'
import { UserContexts } from "../../contexts/openmenu";

import { 
    ChannelImage,
    Container, 
    MainContainer,
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer, 
 } from "./styles";
 import Category from '../../components/categorias';
import axios from 'axios';
import moment from 'moment';
import { CategoryContexts } from '../../contexts/searchcategory';
import { useNavigate } from 'react-router-dom';

function VideoComponent() {

    const {openMenu} = useContext(UserContexts)

    const navigate = useNavigate()

    // interface Videos {
    //     id: string;
    //     snippet: {
    //       title: string;
    //       thumbnails: {
    //         high: {
    //           url: string
    //         }
    //         maxres: {
    //           url: string;
    //         }
    //       }
    //       channelTitle: string;
    //       publishedAt: string;
    //     },
    //     statistics: {
    //       viewCount: string;
    //     }
    //   }

      const {videos, setVideos} = useContext(CategoryContexts)
      const {categoryId} = useContext(CategoryContexts);

      const API_KEY = 'AIzaSyDQdA6cW_D8IwKyMHrxHeNDGu0LLsUr3lA';

      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`
      
      useEffect(() => {
        load()
      },[categoryId])

      async function load() {
        try {
            const resposta = await axios.get(url)
            setVideos(resposta.data.items)
        } catch (erro) {
            console.log(erro)
        }
      }

    function formatViewCount(viewCount: number) {
        if (viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        } else if (viewCount >= 1000) {
            return `${(viewCount / 1000).toFixed(0)} mil de visualizações`;
        } else {
            return `${viewCount} visualizações`;
        }
    }

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
            <Category />
            <Container openmenu={openMenu} >
                {videos.map((video: any) => (
                    <div key={video.id} onClick={() => navigate(`/video/${video.id}`)}>
                        <ImageBanner openmenu={openMenu} src={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}/>
                        <TitleContainer>
                            <ChannelImage>
                                {video.snippet.channelTitle.charAt(0).toUpperCase()}
                            </ChannelImage>
                            <TextContainer>
                                <Title>{video.snippet.title}</Title>
                                <TextCard>{video.snippet.channelTitle}</TextCard>
                                <TextCard>{`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublisheTime(video.snippet.publishedAt)}`}</TextCard>
                            </TextContainer>
                        </TitleContainer>
                    </div>
                ))}
            </Container>
        </MainContainer>
    )
}

export default VideoComponent;