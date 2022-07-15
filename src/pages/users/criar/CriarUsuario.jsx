import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../UI/index';
import Input from '../../components/input/Input';
import InputSelect from '../../components/select/Select';

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
  flex-direction: row;
  width: 90%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  vertical-align: middle;
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

const FormVacinas = () => {
  //estados
  const username = 'Jordana';
  const [nomePaciente, setNomePaciente] = useState('');
  const [idPaciente, setIdPaciente] = useState('');
  const [group, setGroup] = useState('');
  const [qtdAdm, setQtdAdm] = useState('');
  const [med, setMed] = useState('');
  const [medicamentos, setMedicamentos] = useState([]);
  const [adm, setAdm] = useState('');
  const [disabledMed, setDisabledMed] = useState(true);
  const [disabledAdm, setDisabledAdm] = useState(true);
  //estados para os selects
  const [selectDataGroup, setSelectDataGroup] = useState();
  const [selectDataMed, setSelectDataMed] = useState();
  const [selectDataAdm, setSelectDataAdm] = useState();

  useEffect(() => {
    const canShowAdm = med !== '';
    setDisabledAdm(!canShowAdm);
    console.log(med);
    console.log(medicamentos);
    const selectedMed = medicamentos.filter((m) => m.id === med[0])[0];
    const option = selectedMed?.diluicoes
      .map((d) => ({
        value: d.viaAdministracaoId,
        label: d.nomeViaAdministracao,
      }))
      .filter(
        (d, index, self) =>
          index === self.findIndex((t) => t.id === d.id && t.label === d.label)
      );
    setSelectDataAdm(option);
  }, [med]);

  return (
    <Main>
      <Title>Calculadora de Diluição</Title>
      <Divform>
        <Form>
          <Input
            name="nomePaciente"
            typeInput="text"
            setInputValue={setNomePaciente}
            id={'inputText'}
            label={'Nome do Paciente'}
            required={true}
            width={'45%'}
          />
          <Input
            name="idPaciente"
            typeInput={'text'}
            setInputValue={setIdPaciente}
            id={'inputNumero'}
            label={'Identificação do Paciente'}
            min={'0'}
            required={true}
            width={'45%'}
          />

          <InputSelect
            placeholder={'Selecione um medicamento'}
            options={selectDataGroup}
            label="Medicamento"
            setInput={setGroup}
            width={'90%'}
          />
          <InputSelect
            isDisabled={disabledMed}
            options={selectDataMed}
            placeholder={
              disabledMed
                ? 'Selecione o campo de Medicamento'
                : 'Selecione uma marca de medicamento'
            }
            label="Marca e laboratório"
            setInput={setMed}
            width={'90%'}
          />
          <InputSelect
            isDisabled={disabledAdm}
            options={selectDataAdm}
            placeholder={
              disabledAdm
                ? 'Selecione o campo de Marca '
                : 'Selecione a Administração'
            }
            label="Administração"
            setInput={setAdm}
            width={'90%'}
          />
          <Input
            name="qntpreesc"
            typeInput="number"
            setInputValue={setQtdAdm}
            step={'any'}
            id={'inputNumero'}
            label={'Quantidade prescrita (mg/UI)'}
            min={'0'}
            width={'45%'}
          />
          <DivButton>
            <Margin>
              <Button type="submit">Calcular</Button>
            </Margin>
          </DivButton>
        </Form>
      </Divform>
    </Main>
  );
};
export default FormVacinas;
