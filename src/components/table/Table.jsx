import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Back from '../../assets/img/table/back.svg';
import Next from '../../assets/img/table/front.svg';
import { Button, Icon } from '../../UI/index';

import ButtonTable from '../buttons/buttontable/ButtonTable';

const DivTable = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 90%;
  background-color: #ffffff;
  min-height: 10vh;
  margin: 0.5rem 0rem 0.5rem;
  overflow-y: scroll;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

const DivPage = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.page === 0 ? `end` : `space-between`)};
  margin-top: 0.5%;
  margin-bottom: 0.5%;
`;

const PageIcon = styled(Icon)`
  height: 32px;
  width: 32px;
  margin-right: 5px;
  filter: brightness(0) invert(1);
`;

const PageButton = styled(Button)`
  margin: 0 5px;
  width: auto;
  height: 35px;
`;

const Th = styled.th`
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Tr = styled.tr`
  border: none;
  display: table-row;

  @media screen and (max-width: 1024px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

const Td = styled.td`
  padding: 0.625em;
  text-align: center;
  width: auto;
  @media screen and (max-width: 1024px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:last-child {
      width: auto !important;
    }
  }
`;

const Thead = styled.thead`
  display: table-header-group;
  font-weight: 500;
  background-color: #ffffff;
  @media screen and (max-width: 1024px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

const Tbody = styled.tbody`
  & ${Tr}:nth-child(odd) {
    background: #f2f2f2;
  }
`;

const Tabled = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    border: 0;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    padding: 1% 2% 1%;
  }
`;

const NoTableData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: #f0f0f0;
`;

const Table = ({
  dados,
  head,
  setEditData,
  setIsModal,
  setInputLabelModal,
  buttons,
  path,
  heandleDelete,
}) => {
  const keys = Object.keys(head[0]);
  return (
    <>
      <DivTable>
        <Tabled>
          <Thead>
            <Tr>
              {keys.map((key) => {
                return <Th key={key}>{head[0][key]}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {dados.map((data, id) => {
              return (
                <Tr key={data.id}>
                  {keys.map((key) => {
                    return (
                      <Td
                        data-label={head[0][key]}
                        key={key}
                        style={{
                          boxSizing: 'border-box',
                          wordBreak: 'break-word',
                        }}
                      >
                        {data[key]}
                      </Td>
                    );
                  })}
                  {buttons ? (
                    <Td style={{ width: 20 }}>
                      <BtnGroup>
                        {buttons.map((index, key) => {
                          return (
                            <ButtonTable
                              id={id}
                              key={key}
                              type={index}
                              setIsModal={setIsModal}
                              setEditData={setEditData}
                              heandleDelete={heandleDelete}
                              setInputLabelModal={setInputLabelModal}
                              data={data}
                              path={path}
                            />
                          );
                        })}
                      </BtnGroup>
                    </Td>
                  ) : (
                    ''
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Tabled>
      </DivTable>
    </>
  );
};

Table.propTypes = {
  head: PropTypes.any,
  dados: PropTypes.array,
  tableSearch: PropTypes.string,
  setEditData: PropTypes.any,
  setIsModal: PropTypes.any,
  setInputLabelModal: PropTypes.any,
  buttons: PropTypes.array,
  path: PropTypes.any,
  heandleDelete: PropTypes.func,
  setPage: PropTypes.any,
  page: PropTypes.number,
  totalPage: PropTypes.number,
};

export default Table;
