import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../../../UI/index.js';
import { NavLink } from 'react-router-dom';

const SideIconMobile = styled(Icon)`
  height: 30px;
  width: 30px;
`;

const SideBtnMobile = styled(NavLink)`
  color: #4d4d4d !important;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border: 1px solid darkgrey;
  border-radius: 100px;
  margin: 5px 2px 5px;
  transition: 0.2s;
  box-sizing: border-box;
  text-decoration: none;
  z-index: 6;
  &.selected {
    background-color: #257dbc;
    color: white !important;
    opacity: 0.8;
  }
  &.selected > ${SideIconMobile} {
    filter: invert(100%) sepia(51%) saturate(0%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
  }

  &:hover {
    cursor: pointer;
    background-color: #257dbc;
    color: white !important;
  }
  &:hover > ${SideIconMobile} {
    filter: invert(100%) sepia(51%) saturate(0%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
  }

  @media screen and (max-width: 1366px) {
    min-height: 60px;
  }
`;

const TextBtnMobile = styled.p`
  font-size: 16px;
`;

const MobileButton = ({ name, src, link, menu, setMenu }) => {
  return (
    <SideBtnMobile
      to={link}
      activeClassName="selected"
      onClick={() => {
        setMenu(!menu);
      }}
    >
      <SideIconMobile src={src} alt="" />
      <TextBtnMobile>{name}</TextBtnMobile>
    </SideBtnMobile>
  );
};

MobileButton.propTypes = {
  name: PropTypes.string,
  src: PropTypes.any,
  link: PropTypes.any,
  menu: PropTypes.any,
  setMenu: PropTypes.any,
};

export default MobileButton;
