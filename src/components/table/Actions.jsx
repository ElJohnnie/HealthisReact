import React from 'react';
import styled from 'styled-components';
import { Td, Icon } from '../../UI';
import { DelButton, EditButton, ViewButton } from '../../UI/index.js';
import EditIcon from '../../assets/img/table/edit.svg';
import DelIcon from '../../assets/img/table/delete.svg';
import ViewIcon from '../../assets/img/table/viewIcon.svg';

const ButtonIcon = styled(Icon)`
  max-height: 24px;
  max-width: 24px;
  filter: invert(100%);
`;

export const Actions = () => {
  return (
    <Td>
      <ViewButton>
        <ButtonIcon src={ViewIcon}></ButtonIcon>
      </ViewButton>
      <EditButton>
        <ButtonIcon src={EditIcon}></ButtonIcon>
      </EditButton>
      <DelButton>
        <ButtonIcon src={DelIcon}></ButtonIcon>
      </DelButton>
    </Td>
  );
};
