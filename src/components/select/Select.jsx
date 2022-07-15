import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from 'react-select';
const DivSelect = styled.div`
  text-align: start;
  margin: 0 20px 20px 0;
  margin-bottom: 10px;
  width: ${(props) => (props.width ? props.width : `45%`)};
  @media (max-width: 768px) {
    justify-content: center;
    width: 90%;
  }
`;

const SelectBase = styled.select`
  z-index: -5;
  position: relative;
  top: 30px;
`;

const InputSelect = styled(Select)`
  width: 100%;
`;

const SelectInput = ({
  options,
  label,
  placeholder,
  setInput,
  required,
  isDisabled,
  width,
  Value,
  Ref,
  valueDefault,
}) => {
  return (
    <DivSelect width={width}>
      <label>{label}</label>
      <SelectBase required={required} selected={Value}>
        <option>{Value}</option>
      </SelectBase>
      <InputSelect
        ref={Ref}
        options={options}
        placeholder={placeholder}
        onChange={(e) => {
          e ? setInput([e.value, e.label]) : setInput([null, null]);
        }}
        isDisabled={isDisabled != null ? isDisabled : ''}
        defaultValue={valueDefault}
      />
    </DivSelect>
  );
};

SelectInput.propTypes = {
  options: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  setInput: PropTypes.func,
  isDisabled: PropTypes.any,
  Ref: PropTypes.any,
  Value: PropTypes.any,
  required: PropTypes.bool,
  width: PropTypes.string,
  valueDefault: PropTypes.string,
};

export default SelectInput;
