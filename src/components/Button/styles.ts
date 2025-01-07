import styled from '@emotion/styled';

interface MainButtonProps {
  disabled: boolean;
}

export const MainButton = styled.button<MainButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  background: ${({ disabled }) => disabled ? '#b8b6ae' : '#1f27f5'};
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`;


