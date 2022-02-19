import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  alt?: boolean | undefined;
  className?: string;
}

const SectionStyled = styled.div<IProps>`
  padding: 0 15%;
  margin-bottom: 64px;
  text-align: center;

  ${p => p.alt && css`
    padding: 48px 15%;
    margin-bottom: 48px;
    text-align: center;
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.light};

    h1, h2, h3, h4, h5, h6 {
      color: ${p => p.theme.colors.white};
      font-weight: 500;
    }
  `}
`;

const Section: React.FC<IProps> = (props): JSX.Element => (
  <SectionStyled className={props.className} {...props}>
    {props.children}
  </SectionStyled>
)

export default Section;
