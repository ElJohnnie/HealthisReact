import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputField = styled.input`
  border: 1px solid #cccccc !important;
  border-radius: 10px;
  height: ${(props) => (props.style ? '25' : '35')}px;
  width: ${(props) => (props.style ? '75' : '')}%;
  padding-left: 12px;
  margin-bottom: 2%;

  &:focus {
    outline-color: #468fc2;
  }
`;

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 1em;
  height: auto;
  padding-right: ${(props) => (props.paddingRight ? props.paddinRight : ``)};
  width: ${(props) => (props.width ? props.width : `45%`)};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Input = ({
  typeInput,
  placeholder,
  label,
  setInputValue,
  textInput,
  required,
  style,
  width,
  paddingRight,
  step,
  min,
  max,
}) => {
  return (
    <DivInput width={width} marginRight={paddingRight}>
      <label>{label}</label>
      <InputField
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        style={style}
        type={typeInput}
        value={textInput}
        required={required}
        min={min ? min : ''}
        max={max ? max : ''}
        step={step ? step : ''}
      />
    </DivInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string | null,
  setInputValue: PropTypes.any,
  typeInput: PropTypes.string,
  textInput: PropTypes.string,
  width: PropTypes.string,
  paddingRight: PropTypes.string,
  style: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default Input;
