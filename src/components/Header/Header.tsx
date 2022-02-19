import * as React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  background: url(/img/header-bg.jpg) no-repeat center top;
  padding-top: 140px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  min-height: 425px;
  width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Name = styled.div`
  color: ${p => p.theme.colors.white};
  font-size: 80px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: 20px;
  margin: 1rem 0;
`;

const SubTitle = styled.h3`
  color: ${p => p.theme.colors.white};
`;

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderDiv>
      <div>
        <Name>Alex McNair</Name>
        <Title>Software Engineer, Architect, Consultant</Title>
        <SubTitle>Dog Owner, Guitarist, Coffee Lover</SubTitle>
      </div>
    </HeaderDiv>
  );
};

export default Header;
