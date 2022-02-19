import React from 'react';
import styled from 'styled-components';

const GridItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IProps {

}

const GridItem: React.FC<IProps> = (props): JSX.Element => (
  <GridItemStyled>
    {props.children}
  </GridItemStyled>
)

GridItem.defaultProps = {
  displayRow: false,
}

export default GridItem;
