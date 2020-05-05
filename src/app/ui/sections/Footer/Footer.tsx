import * as React from 'react';

import Overlay from 'ui/components/Overlay';

interface IItemProps {
  href: string;
  iconClassName: string;
}

const FooterItem: React.SFC<IItemProps> = (props): JSX.Element => (
  <div className="footer-item">
    <a href={props.href} target="_blank">
      <i className={props.iconClassName}></i>
    </a>
  </div>
);

const footer: React.SFC = (): JSX.Element => (
  <div className="footer">
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
  </div>
);

export default footer;
