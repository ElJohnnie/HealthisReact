import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../UI/index';
import { SubmitButton } from '../../UI/index';
import Input from '../../components/input/Input';

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  //overflow-y: scroll;
  background: white;
  margin: 1em 1em 1em;
  border-radius: 25px;
  box-shadow: 2px 2px 20px #2a2a2a;
  //overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
  @media (max-height: 550px) {
    overflow-y: scroll;
  }
`;

const Title = styled.h2`
  align-items: center;
  margin-top: 10px;
  font-weight: bold;
  @media (min-height: 700px) {
    margin-top: 5%;
  }
`;

const Divform = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  margin-top: 5%;
  @media (min-height: 700px) {
    margin-top: 6%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: center;
    width: auto;
  }
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivButtonTop = styled.div`
  display: flex;
  padding-left: 20rem;
  margin-top: 1%;
  @media (min-width: 1300px) {
    margin-top: 7%;
    padding-left: 30rem;
  }
`;

const MarginTop = styled.div`
  display: flex;
  align-items: baseline;
`;

const TitleDiv = styled.div`
  display: flex;
  padding-left: 28rem;
  @media (min-width: 1300px) {
    padding-left: 38rem;
  }
`;

const Margin = styled.div`
  margin: 40px;
  @media (min-height: 700px) {
    margin-top: 28%;
  }
`;

const Formvacina = () => {
  const [nomeVacina, setNomeVacina] = useState('');
  const [quantidadeDose, SetQuantidadeDose] = useState('');
  const [validade, setValidade] = useState('');
  const [lote, setLote] = useState('');

  return (
    <Main>
      <TitleDiv>
        <MarginTop>
          <Title>
            <Title>Vacinas</Title>
          </Title>
          <DivButtonTop>
            <SubmitButton type="submit">Voltar</SubmitButton>
          </DivButtonTop>
        </MarginTop>
      </TitleDiv>
      <Divform>
        <Form>
          <Input
            name="nomeVacina"
            typeInput={'text'}
            setInputValue={setNomeVacina}
            id={'inputText'}
            label={'Nome Vacina'}
            required={true}
            width={'65%'}
          />
          <Input
            name="quantidadeDose"
            typeInput={'number'}
            setInputValue={SetQuantidadeDose}
            id={'inputText'}
            label={'Quantidade Doses'}
            required={true}
            width={'25%'}
            marginRight={'1%'}
          />
          <Input
            name="validade"
            typeInput={'date'}
            setInputValue={setValidade}
            id={'inputText'}
            label={'Validade'}
            required={true}
            width={'20%'}
          />
          <Input
            name="lote"
            typeInput={'text'}
            setInputValue={setLote}
            id={'inputText'}
            label={'Lote'}
            required={true}
            width={'70%'}
          />
          <DivButton>
            <Margin>
              <Button type="submit">Registrar</Button>
            </Margin>
          </DivButton>
        </Form>
      </Divform>
    </Main>
  );
};
export default Formvacina;
