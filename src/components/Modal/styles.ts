import styled from '@emotion/styled';
//Для дополнительной стилизации компонента из MaterialUI импортируем его в файл со стилями
import { Dialog } from '@mui/material';

export const StyledModal = styled(Dialog)`
& .MuiPaper-root {
  width: 400px;
  height: 500px;
  padding: 20px;
}
`