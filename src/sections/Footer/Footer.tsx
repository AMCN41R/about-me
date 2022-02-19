import * as React from 'react';
import Overlay from 'components/Overlay';
import styled from 'styled-components';

const FooterStyled = styled.div`
  position: relative;
  min-height: 400px;
  width: 100%;

  background: url(/img/band.jpg) no-repeat center top;
  background-position: center left;
  opacity: 0.8;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

interface IItemProps {
  href: string;
  iconClassName: string;
}

const FooterItem: React.FC<IItemProps> = (props): JSX.Element => (
  <div className="footer-item">
    <a href={props.href} target="_blank" rel="noreferrer">
      <i className={props.iconClassName}></i>
    </a>
  </div>
);

const footer: React.FC = (): JSX.Element => (
  <FooterStyled className="footer">
    <Overlay className="footer-content">
      <div>
        Get in touch
      </div>
      <div className="d-flex justify-content-center">
        <FooterItem
          href="mailto:hello@alexmcnair.net"
          iconClassName="fas fa-inbox fa-fw"
        />
        <FooterItem
          href="https://www.linkedin.com/in/alexander-mcnair"
          iconClassName="fab fa-linkedin fa-fw"
        />
      </div>
    </Overlay>
  </FooterStyled>
);

export default footer;
