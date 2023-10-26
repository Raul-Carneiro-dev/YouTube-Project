import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;


export const Container = styled.div<{ openmenu: boolean }>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openmenu})=> openmenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 15px;
  row-gap: 50px;
  padding-bottom: 70px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    padding-bottom: 30px;
  }
`;

export const ImageBanner = styled.img<{ openmenu: boolean }>`
  width: 100%;
  height: ${({ openmenu })=> openmenu? '227px' : '209px'};
  background-size: cover;
  background-position: center;
  border-radius: 12px;

  &:hover {
    background-image: url('https://media.tenor.com/i2ykUtROILwAAAAC/michael-jackson-thriller.gif');
  }

  @media (max-width: 768px) {
    height: 209px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
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
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  color: #0f0f0f;
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;
