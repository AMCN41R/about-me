import * as React from 'react';
import styled from 'styled-components';
import { faInbox, faSignature, } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import NavItem from './components/nav-item';

const Div = styled.div`
  position: absolute;
  right: 16px;
  z-index: 3;
  top: 16px;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 2px 0;
  background-color: transparent;
`;

const Tooltip = styled.div`
  color: ${p => p.theme.colors.white};
  font-family: Pacifico;
  font-size: 24px;
  margin-top: 6px;
  text-align: center;
`;

const Toolbar: React.FC = (): JSX.Element => {
  const [tip, setTip] = React.useState<string>('');

  return (
    <Div>
      <List>
        <NavItem
          href="mailto:hello@alexmcnair.net"
          icon={faInbox}
          onMouseEnter={() => setTip('email')}
          onMouseLeave={() => setTip('')}
        />
        <NavItem
          href="https://amcn41r.github.io/blog"
          icon={faSignature}
          onMouseEnter={() => setTip('blog')}
          onMouseLeave={() => setTip('')}
        />
        <NavItem
          href="https://www.linkedin.com/in/alexander-mcnair"
          icon={faLinkedin}
          onMouseEnter={() => setTip('linked in')}
          onMouseLeave={() => setTip('')}
        />
        <NavItem
          href="https://github.com/AMCN41R"
          icon={faGithub}
          onMouseEnter={() => setTip('github')}
          onMouseLeave={() => setTip('')}
        />
      </List>
      <Tooltip>
        {tip}
      </Tooltip>
    </Div>
  );
};

export default Toolbar;
