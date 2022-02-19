import React from 'react';
import styled from 'styled-components';

const OverlayStyled = styled.div<{ opacity?: number }>`
  position: absolute;
  opacity: ${p => p.opacity || 0.5};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${p => p.theme.colors.dark};
`;

interface IProps {
  opacity?: number;
  className?: string;
}

const Overlay: React.FC<IProps> = (props): JSX.Element => (
  <OverlayStyled opacity={props.opacity}>
    {props.children}
  </OverlayStyled>
)

export default Overlay;
