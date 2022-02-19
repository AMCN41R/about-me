import React from 'react';
import styled from 'styled-components';

const GridStyled = styled.div<IProps>`
  grid-template-columns: repeat(1, 1fr);
  display: grid;
  grid-gap: ${p => p.gridGap || '1rem'};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface IProps {
  gridGap?: string;
  className?: string;
}

const Grid: React.FC<IProps> = (props): JSX.Element => (
  <GridStyled className={props.className} {...props}>
    {props.children}
  </GridStyled>
)

export default Grid;
