import styled from 'styled-components';

export const FormSignInContent = styled.div `
  width: 400px;
  min-height: 550px;
  background-color: lightgray;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  & form {
  display: grid;
  gap: 10px;

  & input {
    width: 100%;
    height: 18px;

    &:focus {
      outline-color: red;
    }
  }

  & button {
    margin: 10px 0;
    background-color: #f70054;
    border: none;
    border-radius: 12px;
    height: 30px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

  }
  }
`