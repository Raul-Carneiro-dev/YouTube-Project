import styled from 'styled-components';

export const Container = styled.div`
  width: 75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;

`;

export const Carousel = styled.div<{ color: boolean }>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    height: 32px;
    background-color: ${({color}) => color? 'black' : '#F2F2F2'};
    color: ${({color}) => color? 'white' : 'black'};
    border-radius: 10px;
    padding: 0 12px;
    margin: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: Roboto, Arial, sans-serif; 
    text-align: center;
    cursor: pointer;
    transition: .2s;
    flex: none;
  }

  div:hover {
    background-color: ${({color}) => color? 'none' : '#e6e6e6'};
  }
`;

export const ButtonContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  border-radius: 50%;
  padding: 5px;
  transition: .2s;

  &:hover {
    background-color: #E5E5E5;
  }

  &:first-child img {
    transform: rotate(180deg)
  }

`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;