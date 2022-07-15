import React from 'react';
import styled from 'styled-components';
import NotFound from '../../assets/img/geral/NotFound.svg';

const DivCentered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 50vh;
  margin: auto;
  padding: auto;
`;

const DataNotFound = () => {
  return (
    <DivCentered>
      <Img src={NotFound}></Img>
    </DivCentered>
  );
};

export default DataNotFound;
