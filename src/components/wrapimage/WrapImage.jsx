import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  //border-left: 1px solid;
  //border-color: darkgrey;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const WrapImage = () => {
  return (
    <>
      <Wrap></Wrap>
    </>
  );
};

export default WrapImage;
