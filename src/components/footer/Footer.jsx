import React from 'react';

import styled from 'styled-components';
import { darkgrey } from '../../UI/variaveis.js';

const Rodape = styled.footer`
  color: ${darkgrey};
  font-size: 14px;
  height: 9.5vh;
  font-weight: bold;
  text-align: center;
  border-top: 0.5vh solid;
  border-color: ${darkgrey};
`;

const Footer = () => {
  return (
    <Rodape>
      <p>Healthis</p>
    </Rodape>
  );
};

export default Footer;
