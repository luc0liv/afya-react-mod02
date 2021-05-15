import React from 'react';

import LogoAfya from '../../assets/images/logo.png';

import { NavContent } from './styles';

import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <NavContent>
      <Link to="/">
      <img src={LogoAfya} alt="Logo Afya" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
    </NavContent>
  );
}

export default Nav;