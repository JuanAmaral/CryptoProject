import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #211d28;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const Tittle = styled.h1`
  color: white;
`;
export const SubTittle = styled.h2`
  opacity: 0.5;
  color: white;
`;

export const Input = styled.input`
  border: 2px #575353 solid;
  background: transparent;
  border-radius: 5px 5px 0px 0px;
  min-width: 20rem;
  height: 2.5rem;
  color: #575353;

  :hover {
    border-color: #bb1fd2;
  }
`;
export const InputBottom = styled(Input)`
  border-radius: 0px 0px 5px 5px;
`;

export const ContainerForgot = styled.button`
  min-width: 20.5rem;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  background: transparent;
  border: none;
`;

export const TextForgot = styled.h2`
  color: #bb1fd2;
  font-size: 1rem;
`;

export const ButtonLogin = styled.button`
  min-width: 20.5rem;
  min-height: 3rem;
  background: linear-gradient(135deg, #9a4dff 0%, #f600dd 100%);
  box-shadow: 0px 4px 20px rgba(188, 49, 243, 0.5);
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 2rem;
`;
