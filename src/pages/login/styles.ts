import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.div`
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

  input {
    width: 250px;
    height: 40px;
    background-color: #f2f2f2;
    margin-top: 1rem;
    border: solid 1px black;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 1rem;
    font-size: 14px;

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

`;