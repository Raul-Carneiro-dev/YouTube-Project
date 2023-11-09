import styled from "styled-components";

interface InputValid {
  valid?: boolean,
  width?: string,
  padding?: string
}

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  img.title-login {
    width: 140px;
    height: 90px;
  }


  span {
    color: black;
    font-size: 30px;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 600;
  }
`;

export const LoginContent = styled.div<InputValid>`
  width: 448px;
  height: 500px;
  border: solid 1.7px #DADCE0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title-login {
    width: 150px;
    height: 100px;
  }

  button {
    margin-top: 2rem;
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 12px;
    background-color: red;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 600;
  }

  .register-content {
    margin-top: 1rem;
    font-family: Roboto, Arial, sans-serif;
  }

  .gotoregister {
    color: red;
    cursor: pointer;
    margin-left: 5px;
  }

  div {
    display: flex;
    column-gap: 1rem;
  }


  @media (max-width: 768px) {
    width: 340px;
    height: 440px;
  }
`;

export const UserNameInput = styled.input<InputValid>`
  width: 250px;
  height: 40px;
  background-color: #f2f2f2;
  margin-top: 1rem;
  border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
  box-sizing: border-box;
  border-radius: 12px;
  padding: 1rem;
  font-size: 14px;
`;

export const UserEmailInput = styled.input<InputValid>`
  width: 250px;
  height: 40px;
  background-color: #f2f2f2;
  margin-top: 1rem;
  border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
  box-sizing: border-box;
  border-radius: 12px;
  padding: 1rem;
  font-size: 14px;

`;

export const UserPassword = styled.input<InputValid>`
  width: ${({width}) => width};
  height: 40px;
  background-color: #f2f2f2;
  margin-top: 1rem;
  border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
  box-sizing: border-box;
  border-radius: 12px;
  padding: ${({padding}) => padding};
  font-size: 14px;
`;

export const MessageContainer = styled.div<InputValid>`

  span {
    width: 250px;
    display: ${({valid}) => valid? 'none' : 'flex'};
    color: red;
    font-size: 14px;
  }
`;

export const CheckboxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-right: 8rem;

  #show-password {
    cursor: pointer;
    padding: 1rem;
  }

  label {
    cursor: pointer;
    margin-left: -12px;
  }
`;