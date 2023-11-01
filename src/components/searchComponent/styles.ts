import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div<{ openmenu: boolean }>`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 4rem 4rem 4rem 0;
  

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 0;
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  column-gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageBanner = styled.img<{ openmenu: boolean, thumbnail: string }>`
  max-width: 360px;
  min-width: 360px;
  max-height: 202px;
  min-height: 202px;
  background-image: url(${({thumbnail}) => thumbnail});
  background-size: cover;
  background-position: center;
  border-radius: 12px;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 0 0 1rem;
    display: flex;
    justify-content: flex-start;
  }
`;

export const ChannelImage = styled.div`
  background-color: beige;
  min-width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  color: #0f0f0f;
  margin-top: 4px;

  @media (max-width: 768px) {
    margin-left: 3rem;
  }
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 14px;
  margin-top: 2px;

  @media (max-width: 768px) {
    margin-left: 3rem;
  }
`;

export const Description = styled.div`
  font-size: 13px;
  color: #6079B2;
  font-family: Roboto, Arial, sans-serif; 

  @media (max-width: 768px) {
    
  }
`;

export const ContainerFalse = styled.h1`
  font-family: Roboto, Arial, sans-serif;
`;
