import React, { useState } from 'react';

import styled from 'styled-components';
import Input from '../../components/input/Input';
import logo from '../../assets/img/header/logon.png';
import { SubmitButton } from './../../UI/index';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vw;
  width: 35vw;
  background: white;
  border-radius: 25px;
  box-shadow: 2px 2px 20px #2a2a2a;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const DivImg = styled.div``;

const Logo = styled.img`
  max-width: 275px;
  position: relative;
  margin: 45px 45px 5px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
`;

const SubTitle = styled.h4`
  font-size: 18px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <Main>
      <DivImg>
        <Logo src={logo} alt="Logo do HSC" />
      </DivImg>
      <Title>Login</Title>
      <DivForm>
        <Form>
          <Input
            name="email"
            typeInput="text"
            placeholder={'Digite um email'}
            label={'Usuário'}
            textInput={email}
            setInputValue={setEmail}
            required={false}
            width="145%"
          ></Input>
          <Input
            name="password"
            typeInput={show ? 'text' : 'password'}
            placeholder={'Digite sua senha'}
            label={'Senha'}
            setInputValue={setPassword}
            required={false}
            width="145%"
          ></Input>
          <DivButton>
            <SubmitButton>Entrar</SubmitButton>
          </DivButton>
        </Form>
      </DivForm>
      <DivButton>
        <SubTitle>Não tenho cadastro!</SubTitle>
        <SubmitButton>Cadastrar</SubmitButton>
      </DivButton>
    </Main>
  );
};

export default Login;
