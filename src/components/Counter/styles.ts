import styled from '@emotion/styled';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-width: 400px;
  padding: 20px;
  background-color: rgb(137, 162, 170);
  border-radius: 4px;

  @media (max-width: 600px){
    background-color: rgb(57, 131, 156);
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100px;
`;

export const CounterResult = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: rgb(19, 19, 87);
`;