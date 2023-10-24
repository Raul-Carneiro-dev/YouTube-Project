import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;

`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string, backgroundcolor?: any }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({margin}) => margin? margin : 0};
  background-color: ${({backgroundcolor}) => backgroundcolor?  backgroundcolor : ''};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #f2f2f2;
  }

`;

export const ButtonIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width: 200px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  width: 128px;
  height: 35px;
  border-radius: 15px;
  color: #065FD4;
  background-color: #ffff;
  border: solid 1px #E5E5E5;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  margin-left: 10px;
  position: absolute;
  right: 1rem;
`;

export const DropMenu = styled.div<{ dropmenu: boolean }>`
  width: 250px;
  height: 100px;
  position: absolute;
  top: 10px;
  right: 6rem;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
  display: ${({dropmenu}) => dropmenu? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid 1px #E5E5E5;
  padding-bottom: 5px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const LogOut = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  
  span {
    width: 100%;
    padding-left: 5px;
    cursor: pointer;
    font-size: 14px;
    font-family: Roboto, Arial, sans-serif;
  }

  img {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }
`;

export const LogOutContent = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #E5E5E5;
  }
`;