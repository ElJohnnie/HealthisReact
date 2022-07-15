import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ViewButton } from '../../../UI';
import { Link } from 'react-router-dom';

const Nav = styled(Link)`
  text-decoration: none;
`;

const NavButton = ({ label, path }) => {
  if (path) {
    return (
      <Nav to={path}>
        <ViewButton>{label}</ViewButton>
      </Nav>
    );
  } else {
    return null;
  }
};

NavButton.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};

export default NavButton;
