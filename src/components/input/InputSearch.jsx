import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchIcon from '../../assets/img/table/search.svg';

const InputField = styled.input`
  background: url(${SearchIcon});
  width: 200px;
  padding-left: 30px;
  height: 30px;
  border: 1px solid #cccccc !important;
  border-radius: 5px;
  transition: border 1s;
  align-items: right;
  background-position: 5px 2px;
  background-repeat: no-repeat;
`;

const DivSearch = styled.div`
  width: 90%;
  display: flex;
  flex: row;
  justify-content: flex-end;
  height: auto;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const InputSearch = ({ typeInput, placeHolder, userSearch, labelMsg }) => {
  return (
    <DivSearch>
      <label>{labelMsg}</label>
      <InputField
        onChange={userSearch}
        type={typeInput}
        placeholder={placeHolder}
      />
    </DivSearch>
  );
};

InputSearch.propTypes = {
  labelMsg: PropTypes.string,
  placeHolder: PropTypes.string,
  typeInput: PropTypes.string,
  userSearch: PropTypes.any,
};

export default InputSearch;
