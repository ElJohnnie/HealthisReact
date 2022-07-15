import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/header/logon.png';
import { Icon } from '../../UI/index.js';
import BurguerIcon from '../../assets/img/header/menu.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MobileButton from '../buttons/mobilebuttons/MobileButton';
import LabIcon from '../../assets/img/sideButtons/lab.svg';
import HistoryIcon from '../../assets/img/sideButtons/history.svg';
import MedGroupIcon from '../../assets/img/sideButtons/med-group.svg';
import AdmIcon from '../../assets/img/sideButtons/administrations.svg';

const MenuMobile = styled.nav`
  background: #ffffff;
  transform: ${({ menu }) => (menu ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 80vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  a {
    justify-content: center;
    padding: 1rem 0;
    font-weight: bold;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const DivBurguer = styled.div`
  display: flex;
  align-items: right;
  justify-content: end;
`;

const LogoHSC = styled.img`
  max-width: 300px;
  position: relative;
  padding: 5px 0 0 0;
`;

const BrandMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BurguerMobile = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`;

const SideMobile = ({ menu, setMenu }) => {
  return (
    <MenuMobile menu={menu}>
      <DivBurguer>
        <BurguerMobile
          onClick={() => {
            setMenu(!menu);
          }}
          src={BurguerIcon}
        />
      </DivBurguer>
      <Link to="/">
        <BrandMobile>
          <LogoHSC src={logo} alt="Logo do HSC" />
        </BrandMobile>
      </Link>
      <MobileButton
        name="Medicamentos"
        src={MedGroupIcon}
        link={'/groups'}
        menu={menu}
        setMenu={setMenu}
      />
      <MobileButton
        name="Laboratórios"
        src={LabIcon}
        link={'/lab'}
        menu={menu}
        setMenu={setMenu}
      />
      <MobileButton
        name="Administrações"
        src={AdmIcon}
        link={'/administrations'}
        menu={menu}
        setMenu={setMenu}
      />
      <MobileButton
        name="Histórico"
        src={HistoryIcon}
        link={'/history'}
        menu={menu}
        setMenu={setMenu}
      />
    </MenuMobile>
  );
};

SideMobile.propTypes = {
  menu: PropTypes.any,
  setMenu: PropTypes.func,
};

export default SideMobile;
