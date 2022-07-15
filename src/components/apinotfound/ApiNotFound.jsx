import React from 'react';
import styled from 'styled-components';
import img404 from '../../assets/img/404/404.png';

const DivCentered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 60vh;
  margin: auto;
  padding: auto;
`;

const ApiNotFound = () => {
  return (
    <DivCentered>
      <Img src={img404}></Img>
    </DivCentered>
  );
};

export default ApiNotFound;
