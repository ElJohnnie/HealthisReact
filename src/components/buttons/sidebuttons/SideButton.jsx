import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../../UI/index.js';
import { NavLink } from 'react-router-dom';

const SideIcon = styled(Icon)`
  margin-right: 5px;
  height: 30px;
  width: 30px;
`;

const SideBtn = styled(NavLink)`
  color: #4d4d4d !important;
  height: 15vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  padding: 0.5rem 2rem 0.5rem;
  background-color: white;
  border: 1px solid darkgrey;
  border-radius: 0 100px 100px 0;
  transition: 0.2s;
  box-sizing: border-box;
  word-break: break-all;
  transform: translate(-15px);
  flex-wrap: nowrap;
  text-decoration: none;
  font-size: 18px;
  &.selected {
    background-color: #257dbc;
    color: white !important;
    transform: translate(0px);
    opacity: 0.8;
  }
  &.selected > ${SideIcon} {
    filter: invert(100%) sepia(51%) saturate(0%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
  }

  &:hover {
    cursor: pointer;
    background-color: #257dbc;
    color: white !important;
    transform: translate(0px);
    opacity: 0.8;
  }
  &:hover > ${SideIcon} {
    filter: invert(100%) sepia(51%) saturate(0%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextBtn = styled.p`
  word-break: break-word;
`;

const SideButton = ({ name, src, link }) => {
  return (
    <SideBtn to={link} activeClassName="selected">
      <SideIcon src={src} alt="" />
      <TextBtn>{name}</TextBtn>
    </SideBtn>
  );
};

SideButton.propTypes = {
  name: PropTypes.string,
  src: PropTypes.any,
  link: PropTypes.any,
};

export default SideButton;
