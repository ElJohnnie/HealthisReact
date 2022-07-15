import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../../UI/index';
import Input from '../../components/input/Input';
import AlertComponent from '../../components/alert/AlertComponent';
import { postRegister } from '../../services/register';
import { authToken } from '../../services/authenticate';
import { AuthContext } from '../../contexts/Auth';

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  overflow-y: scroll;
  background: white;
  margin: 1em 1em 1em;
  border-radius: 25px;
  box-shadow: 2px 2px 20px #2a2a2a;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Title = styled.h2`
  align-items: center;
`;

const Divform = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  vertical-align: center;
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

const Margin = styled.div`
  margin: 10px;
`;

const Register = () => {
  const { user, setUser, setToken, admin } = useContext(AuthContext);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    const body = {
      userName,
      email,
      password,
      confirmPassword,
    };
    const result = await postRegister(body);
    if (result.status === 200) {
      handleAuthToken();
    } else {
      console.log(result);
    }
  };

  const handleAuthToken = async () => {
    const data = {
      grant_type: 'password',
      username: userName,
      password: confirmPassword,
    };
    const result = await authToken(data);
    if (result.token === true) {
      setToken(result.token);
    }
  };

  return (
    <Main>
      <Title>Criar usuário</Title>
      <AlertComponent text={true} textValue={'teste'} />
      <Divform>
        <Form onSubmit={handleRegisterUser}>
          <Input
            name="userName"
            typeInput={'text'}
            setInputValue={setUserName}
            id={'inputText'}
            label={'Usuário'}
            required={true}
            width={'45%'}
          />
          <Input
            name="email"
            typeInput={'email'}
            setInputValue={setEmail}
            id={'inputText'}
            label={'Email'}
            required={true}
            width={'45%'}
          />
          <Input
            name="password"
            typeInput={'password'}
            setInputValue={setPassword}
            id={'inputText'}
            label={'Senha'}
            required={true}
            width={'45%'}
          />
          <Input
            name="confirmPassword"
            typeInput={'password'}
            setInputValue={setConfirmPassword}
            id={'inputText'}
            label={'Confirmar senha'}
            required={true}
            width={'45%'}
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
export default Register;
