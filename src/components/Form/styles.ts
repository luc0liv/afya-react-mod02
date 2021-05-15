import styled from 'styled-components';

export const CardContent = styled.div `
border-radius: 22px;
background: white;
padding: 22px;

& h3 {
  margin: 10px 0;
}

& form {
  display: grid;
  gap: 10px;

  & input {
    width: 100%;
    height: 18px;
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
