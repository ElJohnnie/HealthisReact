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
  padding-left: 16rem;
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
  padding-left: 23rem;
  @media (min-width: 1300px) {
    padding-left: 38rem;
  }
`;

const Margin = styled.div`
  margin: 4px;
  @media (min-height: 700px) {
    margin-top: 28%;
  }
`;

const UnidadeSaude = () => {
  const [unidadeSaude, setUnidadeSaude] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  return (
    <Main>
      <TitleDiv>
        <MarginTop>
          <Title>
            <Title>Unidade de Saúde</Title>
          </Title>
          <DivButtonTop>
            <SubmitButton type="submit">Voltar</SubmitButton>
          </DivButtonTop>
        </MarginTop>
      </TitleDiv>
      <Divform>
        <Form>
          <Input
            name="nomeUnidade"
            typeInput={'text'}
            setInputValue={setUnidadeSaude}
            id={'inputText'}
            label={'Unidade Saúde'}
            required={true}
            width={'92%'}
          />
          <Input
            name="rua"
            typeInput={'text'}
            setInputValue={setRua}
            id={'inputText'}
            label={'Rua'}
            required={true}
            width={'70%'}
            marginRight={'1%'}
          />
          <Input
            name="numero"
            typeInput={'text'}
            setInputValue={setNumero}
            id={'inputText'}
            label={'Nº'}
            required={true}
            width={'20%'}
          />
          <Input
            name="bairro"
            typeInput={'text'}
            setInputValue={setBairro}
            id={'inputText'}
            label={'Bairro'}
            required={true}
            width={'70%'}
          />
          <Input
            name="cep"
            typeInput={'text'}
            setInputValue={setCep}
            id={'inputText'}
            label={'CEP'}
            required={true}
            width={'20%'}
          />
          <Input
            name="cidade"
            typeInput={'text'}
            setInputValue={setCidade}
            id={'inputText'}
            label={'Cidade'}
            required={true}
            width={'70%'}
          />
          <Input
            name="uf"
            typeInput={'text'}
            setInputValue={setUf}
            id={'inputText'}
            label={'UF'}
            required={true}
            width={'20%'}
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
export default UnidadeSaude;
