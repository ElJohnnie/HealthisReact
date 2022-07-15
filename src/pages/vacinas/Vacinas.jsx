import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DivLoader } from '../../UI';
import Table from '../../components/table/Table';
import { getVacinas } from '../../services/vacinas';
import Loader from 'react-loader-spinner';
import ApiNotFound from '../../components/apinotfound/ApiNotFound';
import DataNotFound from '../../components/datanotfound/DataNotFound';
import NavButton from '../../components/buttons/navbuttons/NavButtons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  background: white;
  margin: 1em 1em 1em;
  border-radius: 25px;
  box-shadow: 2px 2px 20px #2a2a2a;
  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Title = styled.h2``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 90%;
`;
//cabeçalho

//componente
const Vacinas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiNotFound, setApiNotFound] = useState(false);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const head = [
    {
      nome: 'Marca do Medicamento',
      nomeGrupoMedicamento: 'Nome do Medicamento',
      nomeLaboratorio: 'Laboratório',
      quantidadeApresentacao: 'Apresentação',
    },
  ];
  const setIsModal = false;

  const loadingApi = async () => {
    const vacinas = await getVacinas();
    if (vacinas.status === 404) {
      setIsLoading(false);
      setApiNotFound(true);
    } else {
      setData(vacinas.data);
      setIsLoading(false);
      setApiNotFound(false);
    }
  };

  useEffect(() => {
    loadingApi();
  }, []);

  if (!apiNotFound) {
    return (
      <Container>
        {isLoading === false ? (
          <>
            <Content>
              <RowContent>
                <NavButton label="Cadastrar vacinas" path="/formvacinas" />
              </RowContent>
              <Title>Informações de vacinação</Title>
              {data.length > 0 ? (
                <Table
                  head={head}
                  dados={data}
                  setIsModal={setIsModal}
                  setEditData={setEditData}
                  path={`/medication/`}
                ></Table>
              ) : (
                <DataNotFound />
              )}
            </Content>
          </>
        ) : (
          <DivLoader>
            <Loader type="Bars" color="#00BFFF" height={100} width={100} />
          </DivLoader>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <ApiNotFound></ApiNotFound>
      </Container>
    );
  }
};

export default Vacinas;
