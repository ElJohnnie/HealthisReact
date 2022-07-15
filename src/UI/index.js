import styled from 'styled-components';

export const Icon = styled.img`
  width: 24px;
`;

// export const TooltipText = styled.span`
//   visibility: hidden;
//   width: 120px;
//   background-color: #555;
//   color: #fff;
//   text-align: center;
//   padding: 5px 0;
//   border-radius: 6px;
//   position: absolute;
//   z-index: 1;
//   bottom: 125%;
//   left: 50%;
//   margin-left: -60px;
//   opacity: 0;
//   transition: opacity 0.3s;
//   &::after {
//     content: '';
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     margin-left: -5px;
//     border-width: 5px;
//     border-style: solid;
//     border-color: #555 transparent transparent transparent;
//   }
// `;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  margin: 10px 5px;
  height: 40px;
  background-color: #0275d8;
  border-radius: 5px;
  color: white;
  border: none;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  text-decoration: none;
`;

export const DelButton = styled(Button)`
  background-color: #d9534f !important;
  width: 90px;
  margin: 0 5px;
  height: 35px;
`;

export const SubmitButton = styled(Button)`
  width: 90px;
  height: 35px;
  font-weight: bold;
`;

export const EditButton = styled(DelButton)`
  background-color: #f0ad4e !important;
  width: 90px;
  margin: 0 5px;
  height: 35px;
`;

export const ViewButton = styled(Button)`
  background-color: #66cdaa !important;
  margin: 0 5px;
  width: 90px;
  height: 35px;
`;

export const ButtonRevert = styled(Button)`
  background: #f0ad4e;
  padding: 2px 10px;
  width: 15%;
  height: 35px;
`;

export const ButtonIcon = styled(Icon)`
  height: 18px;
  width: 18px;
  filter: invert(100%);
  margin-right: 5px;
`;

export const TextErro = styled.p`
  color: red;
  height: 2rem;
`;

export const DivLoader = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
