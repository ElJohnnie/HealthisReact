import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EditIcon from '../../../assets/img/table/edit.svg';
import DelIcon from '../../../assets/img/table/delete.svg';
import ViewIcon from '../../../assets/img/table/viewIcon.svg';
import { Link } from 'react-router-dom';
import { DelButton, EditButton, ViewButton, Icon } from '../../../UI/index';

const ButtonIcon = styled(Icon)`
  height: 22px;
  width: 22px;
  filter: invert(100%);
  margin-right: 5px;
`;

const ButtonTable = ({
  data,
  setIsModal,
  setInputLabelModal,
  setEditData,
  type,
  path,
  id,
  heandleDelete,
}) => {
  if (type === 'edit') {
    return (
      <>
        <EditButton
          onClick={() => {
            setIsModal([true, 'edit']);
            setInputLabelModal(data.nome);
            setEditData({ id: data.id, name: data.nome });
          }}
        >
          <ButtonIcon src={EditIcon}></ButtonIcon>
          <p>Editar</p>
        </EditButton>
      </>
    );
  }
  if (type === 'formEdit') {
    return (
      <>
        <Link style={{ textDecoration: 'none' }} to={path + 'edit/' + data.id}>
          <EditButton>
            <ButtonIcon src={EditIcon}></ButtonIcon>
            <p>Editar</p>
          </EditButton>
        </Link>
      </>
    );
  }
  if (type === 'delete') {
    return (
      <DelButton
        onClick={(e) => {
          e.preventDefault();
          if (setIsModal) {
            setIsModal([true, 'delete']);
            setEditData({ id: data.id, name: data.nome });
          } else {
            heandleDelete(id);
          }
        }}
      >
        <ButtonIcon src={DelIcon}></ButtonIcon>
        <p>Excluir</p>
      </DelButton>
    );
  }
  if (type === 'view') {
    return (
      <Link style={{ textDecoration: 'none' }} to={path + data.id}>
        <ViewButton>
          <ButtonIcon src={ViewIcon}></ButtonIcon>
          <p>Mostrar mais</p>
        </ViewButton>
      </Link>
    );
  }
};

ButtonTable.propTypes = {
  data: PropTypes.object,
  setEditData: PropTypes.any,
  setIsModal: PropTypes.any,
  setInputLabelModal: PropTypes.any,
  type: PropTypes.string,
  path: PropTypes.any,
  id: PropTypes.number,
  heandleDelete: PropTypes.func,
};

export default ButtonTable;
