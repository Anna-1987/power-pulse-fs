import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const LogoutIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: none;
`;

export const LogoutWrap = styled.button`
  color: ${styleGuide.whiteColor};
  display: flex;
  align-items: center;
  gap: 8px;
`;
