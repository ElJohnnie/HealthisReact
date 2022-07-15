import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/input/Input';
import PropTypes from 'prop-types';
import { Button, DelButton, Icon } from '../../UI';
import WarningIcon from '../../assets/img/modal/warning.svg';
import CheckIcon from '../../assets/img/modal/confirm.svg';
import { Link } from 'react-router-dom';

const ModalWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ModalInfos = styled.div`
  background-color: white;
  width: 50vw;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1% 5%;
  box-sizing: border-box;
  z-index: 3;
  @media screen and (max-width: 1024px) {
    width: 70vw;
  }
`;

const ModalButtons = styled.div`
  display: flex;
  width: 100%;
  padding: 5%;
  justify-content: space-between;
  & > Button {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const ModalButtonDelete = styled(DelButton)`
  padding: 1% 2% 1%;
  width: 220px;
  height: 40px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Warning = styled.span`
  font-size: 1.2rem;
  color: red;
`;

const ConfirmIcon = styled(Icon)`
  filter: invert(100%);
  width: 17px;
  margin-left: 5px;
`;

export const EditModal = ({
  setIsModal,
  inputTexte,
  setInputLabelModal,
  heandleEditGroupName,
}) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsModal([false, '']);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [setIsModal]);
  return (
    <ModalWrapper>
      <ModalInfos>
        <Title>Editar nome</Title>
        <Input
          textInput={inputTexte}
          typeInput={'text'}
          label={'Insira o novo nome'}
          setInputValue={setInputLabelModal}
        />
        <ModalButtons>
          <Button
            style={{ backgroundColor: 'grey' }}
            onClick={() => {
              setIsModal([false, '']);
            }}
          >
            Fechar
          </Button>
          <Button
            onClick={() => {
              heandleEditGroupName();
              setIsModal([false, '']);
            }}
          >
            Confirmar
            <ConfirmIcon src={CheckIcon} />
          </Button>
        </ModalButtons>
      </ModalInfos>
    </ModalWrapper>
  );
};

export const DeleteModal = ({ item, setIsModal, handleDelete }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsModal([false, '']);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [setIsModal]);
  return (
    <ModalWrapper>
      <ModalInfos>
        <Title>Confirmar exclusão?</Title>
        <Text>Item a ser excluído:</Text>
        <Warning>{item.name}</Warning>
        <ModalButtons>
          <Button
            style={{ backgroundColor: 'grey' }}
            onClick={(e) => {
              e.preventDefault();
              setIsModal([false, '']);
            }}
          >
            Fechar
          </Button>
          <ModalButtonDelete
            onClick={async (e) => {
              e.preventDefault();
              setIsModal([false, '']);
              await handleDelete(item.id);
            }}
          >
            Confirmar Exclusão
            <ConfirmIcon src={WarningIcon} />
          </ModalButtonDelete>
        </ModalButtons>
      </ModalInfos>
    </ModalWrapper>
  );
};

export const ErrorModal = ({ item, setIsModal, text, warningText }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsModal([false, '', warningText]);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [setIsModal]);
  return (
    <ModalWrapper>
      <ModalInfos>
        <Title>Não foi possível realizar a operação!</Title>
        <Text>{text}</Text>
        {!warningText && <Warning>{item.name}</Warning>}

        <Button
          style={{ backgroundColor: 'grey', marginTop: '10px' }}
          onClick={(e) => {
            e.preventDefault();
            setIsModal([false, '']);
          }}
        >
          Fechar
        </Button>
      </ModalInfos>
    </ModalWrapper>
  );
};

export const SuccessModal = ({ text, setIsModal, link, onClickBtn }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsModal([false, '']);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [setIsModal]);
  return (
    <ModalWrapper>
      <ModalInfos>
        <Title>Operação realizada com Sucesso!</Title>
        <Text>{text}</Text>
        {link === '' ? (
          <Button
            style={{ marginTop: '10px' }}
            onClick={(e) => {
              e.preventDefault();
              setIsModal([false, '']);
            }}
          >
            Confirmar
          </Button>
        ) : link ? (
          <Link to={link} style={{ textDecoration: 'none' }}>
            <Button style={{ marginTop: '10px' }}>Confirmar e Retornar</Button>
          </Link>
        ) : (
          <Button onClick={onClickBtn} style={{ marginTop: '10px' }}>
            Confirmar e Retornar
          </Button>
        )}
      </ModalInfos>
    </ModalWrapper>
  );
};

EditModal.propTypes = {
  setIsModal: PropTypes.func,
  inputTexte: PropTypes.any,
  setInputLabelModal: PropTypes.any,
  heandleEditGroupName: PropTypes.any,
};

DeleteModal.propTypes = {
  item: PropTypes.object,
  setIsModal: PropTypes.func,
  handleDelete: PropTypes.func,
};

ErrorModal.propTypes = {
  item: PropTypes.object,
  setIsModal: PropTypes.func,
  text: PropTypes.string,
  warningText: PropTypes.bool,
};

ErrorModal.defaultProps = {
  warningText: true,
};

SuccessModal.propTypes = {
  text: PropTypes.string,
  setIsModal: PropTypes.func,
  link: PropTypes.string,
  onClickBtn: PropTypes.any,
};
