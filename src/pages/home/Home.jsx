import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import WrapImage from '../../components/wrapimage/WrapImage';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../../components/GlobalStyle';
import img from '../../assets/img/home/home.jpg';
import Vacinas from '../vacinas/Vacinas';
import Register from '../register/Register';
import UnidadeSaude from '../unidadeSaude/UnidadeSaude';
import FormVacina from '../formVacina/FormVacina';
import FormVacinacao from '../formVacinacao/FormVacinacao';
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario';

const Main = styled.main`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Switch>
          <Route exact path={'/'}>
            <WrapImage />
          </Route>
          <Route path="/vacinacao">
            <Vacinas />
          </Route>
          <Route path="/cadstroUsuario">
            <CadastroUsuario />
          </Route>
          <Route path="/localVacinacao">
            <UnidadeSaude />
          </Route>
          <Route path="/formvacina">
            <FormVacina />
          </Route>
          <Route path="/formvacinacao">
            <FormVacinacao />
          </Route>
          <Route path="/registrarusuario">
            <Register />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
