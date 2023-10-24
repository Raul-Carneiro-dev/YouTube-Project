import styled from 'styled-components';


export const Container = styled.div<{ openmenu: boolean}>`
  width: ${({openmenu}) => openmenu? '270px' : '100px' };
  height: calc(100vh - 55px);
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  top: 55px;


  .title-core {
    display: ${({openmenu}) => openmenu? 'flex' : 'none'};
    font-size: 16px;
    font-weight: 400;
    margin-right: 50%;
    font-family: Roboto, Arial, sans-serif;
    text-align: center;
  }
`;

export const SecondCore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BetweenCore = styled.div<{ openmenu: boolean }>`
  width: 97%;
  border-bottom: ${({openmenu}) => openmenu? 'solid 2px #E5E5E5' : 'none' };
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MenuItem = styled.div<{ openmenu: boolean }>`
  width: 98%;
  min-height: ${({openmenu}) => openmenu? '45px' : '70px' };
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({openmenu}) => openmenu? 'row' : 'column' };;
  align-items: center;
  justify-content: ${({openmenu}) => openmenu? 'none' : 'center' };
  transition: .2s;

  span {
    font-weight: ${({openmenu}) => openmenu? '500' : '400' };
    margin-left: ${({openmenu}) => openmenu? '20px' : 'none' };
    font-size: ${({openmenu}) => openmenu? '14px' : '12px' };
    color: ${({openmenu}) => openmenu? '#0f0f0f' : '#0f0f0f' };
    font-family: Roboto, Arial, sans-serif;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const MenuItemSecondCore = styled.div<{ openmenu: boolean }>`
  width: 95%;
  min-height: 40px;
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 17px;
  box-sizing: border-box;
  display: ${({openmenu}) => openmenu? 'flex' : 'none' };;
  flex-direction: row;
  align-items: center;
  transition: .2s;

  span {
    font-weight: 500;
    margin-left: 20px;
    font-size: 14px;
    color: #0f0f0f;
    font-family: Roboto, Arial, sans-serif;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
`;

export const FooterMenu = styled.div<{ openmenu: boolean }>`
  display: ${({openmenu})=> openmenu? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  font-size: 13px;
  font-weight: bold;
  font-family: Roboto, Arial, sans-serif;
  color: #606060;
  padding: 12px;

  .footer-sobre {
    display: flex;
    flex-direction: column;
    row-gap: 2px;

    div {
      display: flex;
      column-gap: 8px;
    }
  }

  .footer-termos {
    display: flex;
    flex-direction: column;
    row-gap: 2px;

    div {
      display: flex;
      column-gap: 8px;
    }
  }

  .copy {
    font-size: 12px;
    font-weight: 400;
    color: #909090;
  }
`;