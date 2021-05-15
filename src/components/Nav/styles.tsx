import styled from 'styled-components';

export const NavContent = styled.nav`
    align-items: center;
    background-color: #F70054;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
    height: 80px;

    & img {
      width: 80px;
      height: auto;
    }

    & a {
      text-decoration: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
    }
`