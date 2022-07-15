import React from 'react';
import SideButton from '../buttons/sidebuttons/SideButton';
import LabIcon from '../../assets/img/sideButtons/lab.svg';
import HistoryIcon from '../../assets/img/sideButtons/history.svg';
import MedGroupIcon from '../../assets/img/sideButtons/med-group.svg';
import AdmIcon from '../../assets/img/sideButtons/administrations.svg';
import styled from 'styled-components';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  background-color: rgb(158, 161, 163, 0.2);
  justify-content: space-around;
  overflow-y: scroll;
  position: relative;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Sidebar = () => {
  return (
    <>
      <SideBar>
        <SideButton name="Informações" src={AdmIcon} link={'/informacao'} />
        <SideButton
          name="Informações de vacinação"
          src={AdmIcon}
          link={'/vacinacao'}
        />
        <SideButton name="Histórico" src={HistoryIcon} link={'/history'} />
      </SideBar>
    </>
  );
};

export default Sidebar;
