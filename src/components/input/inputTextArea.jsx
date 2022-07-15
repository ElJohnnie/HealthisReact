import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextAreaField = styled.textarea`
  border: 1px solid #cccccc !important;
  border-radius: 10px;
  height: ${(props) => (props.height ? props.height : ``)};
  width: ${(props) => (props.style ? '75' : '')}%;
  padding-left: 12px;
  margin-bottom: 2%;

  &:focus {
    outline-color: #468fc2;
  }
`;

const DivTextArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 1em;
  padding-right: ${(props) => (props.paddingRight ? props.paddinRight : ``)};
  width: ${(props) => (props.width ? props.width : `45%`)};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const InputTextArea = ({
  typeInput,
  placeholder,
  label,
  setInputValue,
  textInput,
  required,
  style,
  width,
  height,
  paddingRight,
  step,
  min,
  max,
}) => {
  return (
    <DivTextArea width={width} marginRight={paddingRight} height={height}>
      <label>{label}</label>
      <TextAreaField
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
    </DivTextArea>
  );
};

InputTextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string | null,
  setInputValue: PropTypes.any,
  typeInput: PropTypes.string,
  textInput: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  paddingRight: PropTypes.string,
  style: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default InputTextArea;
