import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const AlertComponent = ({ head, headValue, text, textValue, variantType }) => {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <Alert variant={variantType} onClose={() => setShow(false)} dismissible>
        {head ? <Alert.Heading>{headValue}!</Alert.Heading> : ''}
        {text ? <p> {textValue} </p> : ''}
      </Alert>
    );
  } else return null;
};

AlertComponent.propTypes = {
  head: PropTypes.any,
  headValue: PropTypes.string,
  text: PropTypes.any,
  textValue: PropTypes.string,
  variantType: PropTypes.string,
};

export default AlertComponent;
