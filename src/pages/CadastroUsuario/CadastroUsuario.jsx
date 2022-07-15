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
  background: white;
  margin: 1em 1em 1em;
  border-radius: 25px;
  box-shadow: 2px 2px 20px #2a2a2a;
  /* overflow-y: scroll; */
  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }

  @media (max-height: 768px) {
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

const DivButtonTop = styled.div`
  display: flex;
  padding-left: 15rem;
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
  padding-left: 22rem;
  @media (min-width: 1300px) {
    padding-left: 38rem;
  }
`;

const SubTitle = styled.h4`
  align-items: center;
  margin-top: 1px;
  font-size: 15px;
  font-weight: bold;
  @media (min-height: 700px) {
    margin-top: 1%;
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

const Margin = styled.div`
  margin: 4px;
  @media (min-height: 700px) {
    margin-top: 6%;
  }
`;

const Divform = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  @media (min-height: 700px) {
    margin-top: 1%;
  }
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
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
            <Title>Cadastro de Usuário</Title>
          </Title>
          <DivButtonTop>
            <SubmitButton type="submit">Voltar</SubmitButton>
          </DivButtonTop>
        </MarginTop>
      </TitleDiv>
      <SubTitle>
        <SubTitle>Cadastro de dados pessoais</SubTitle>
      </SubTitle>
      <Divform>
        <Form>
          <Input
            name="nome"
            typeInput={'text'}
            setInputValue={setNome}
            id={'inputText'}
            label={'Nome'}
            required={true}
            width={'45%'}
          />
          <Input
            name="dataNascimento"
            typeInput={'date'}
            setInputValue={setDataNascimento}
            id={'inputText'}
            label={'Data Nascimento'}
            required={true}
            width={'20%'}
          />
          <Input
            name="sexo"
            typeInput={'text'}
            setInputValue={setSexo}
            id={'inputText'}
            label={'Sexo'}
            required={true}
            width={'20%'}
          />
          <Input
            name="email"
            typeInput={'email'}
            setInputValue={setEmail}
            id={'inputText'}
            label={'E-mail'}
            required={true}
            width={'45%'}
          />
          <Input
            name="telefone"
            typeInput={'text'}
            setInputValue={setTelefone}
            id={'inputText'}
            label={'Telefone'}
            required={true}
            width={'20%'}
          />
          <Input
            name="cpf"
            typeInput={'number'}
            setInputValue={setCpf}
            id={'inputText'}
            label={'CPF'}
            required={true}
            width={'20%'}
          />
        </Form>
      </Divform>
      <SubTitle>
        <SubTitle>Cadastro de endereço</SubTitle>
      </SubTitle>
      <Divform>
        <Form>
          <Input
            name="rua"
            typeInput={'text'}
            setInputValue={setRua}
            id={'inputText'}
            label={'Rua'}
            required={true}
            width={'45%'}
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
            width={'20%'}
          />
          <Input
            name="cidade"
            typeInput={'text'}
            setInputValue={setCidade}
            id={'inputText'}
            label={'Cidade'}
            required={true}
            width={'45%'}
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
            name="uf"
            typeInput={'text'}
            setInputValue={setUf}
            id={'inputText'}
            label={'UF'}
            required={true}
            width={'20%'}
          />
        </Form>
      </Divform>
      <DivButton>
        <Margin>
          <Button type="submit">Registrar</Button>
        </Margin>
      </DivButton>
    </Main>
  );
};
export default CadastroUsuario;
