import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/header/logon.png';
import { Icon } from '../../UI/index.js';
import sair from '../../assets/img/header/sair-icon.svg';
import BurguerIcon from '../../assets/img/header/menu.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideMobile from '../sidemobile/SideMobile';
import AdmIcon from '../../assets/img/sideButtons/administrations.svg';
import { AuthContext } from '../../contexts/Auth';

const Head = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  vertical-align: center;
  justify-content: space-between;
  padding: 0.5rem 2rem 0.5rem;
  border-bottom: 2px solid;
  border-color: darkgrey;
  border-bottom: 0.5vh solid;
  height: auto;
  background-color: #ffffff;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const LogoHSC = styled.img`
  max-width: 125px;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  vertical-align: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navlist = styled.ul`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ConfigIcon = styled(Icon)`
  transition-duration: 2s;
  transition-property: transform;
  margin: 3px 0px 0px 3px;
`;

const SairIcon = styled(ConfigIcon)`
  transition-duration: 0.2s;
`;

const Burguer = styled(Icon)`
  @media (min-width: 768px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Navitem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  padding: 0.2vh 1vh 0.2vh;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid;
    border-color: darkgrey;
    &:hover > ${ConfigIcon} {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
    &:hover > ${SairIcon} {
      transform: translateX(5px);
      -webkit-transform: translateX(5px);
    }
  }
`;

const Anchor = styled(NavLink)`
  text-decoration: none;
  color: var(--dark-blue);
  font-size: 16px;
`;

//import { Route, Link } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user, admin } = useContext(AuthContext);
  return (
    <>
      <Head>
        <Burguer
          onClick={() => {
            setMenu(true);
          }}
          src={BurguerIcon}
        />
        <Link to="/">
          <Brand>
            <LogoHSC src={logo} alt="Logo do HSC" />
          </Brand>
        </Link>
        <Nav>
          <Navlist>
            {admin !== false && (
              <Navitem src={AdmIcon}>
                <Anchor to={'/informacao'}>Informações administrativas</Anchor>
              </Navitem>
            )}
            <Navitem>
              <Anchor to={'/vacinacao'}>Informações de vacinação</Anchor>
            </Navitem>
            {admin !== false && (
              <Navitem>
                <Anchor to={'/cadastrosaptos'}>Aptidão de vacinação</Anchor>
              </Navitem>
            )}
            {user !== null && (
              <Navitem>
                Sair
                <SairIcon src={sair}></SairIcon>
              </Navitem>
            )}
          </Navlist>
        </Nav>
        <SideMobile menu={menu} setMenu={setMenu} />
      </Head>
    </>
  );
};

export default Header;
