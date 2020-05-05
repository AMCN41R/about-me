import * as React from 'react';

interface IItemProps {
  href: string;
  iconClassName: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItem: React.SFC<IItemProps> = (props): JSX.Element => (
  <li className="nav-item">
    <a
      href={props.href}
      target="_blank"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <i className={props.iconClassName}></i>
    </a>
  </li>
);

const toolbar: React.SFC = (): JSX.Element => {
  const [tip, setTip] = React.useState<string>('');

  return (
    <div className="toolbar">
      <ul className="nav d-flex">
        <NavItem
          href="mailto:hello@alexmcnair.net"
          iconClassName="fas fa-inbox fa-fw"
          onMouseEnter={() => setTip('email')}
          onMouseLeave={() => setTip('')}
        />
        <NavItem
          href="https://amcn41r.github.io/blog"
          iconClassName="fas fa-signature fa-fw"
          onMouseEnter={() => setTip('blog')}
          onMouseLeave={() => setTip('')}
        />
        <NavItem
          href="https://www.linkedin.com/in/alexander-mcnair"
          iconClassName="fab fa-linkedin fa-fw"
          onMouseEnter={() => setTip('linked in')}
          onMouseLeave={() => setTip('')}
        />
        <NavItem
          href="https://github.com/AMCN41R"
          iconClassName="fab fa-github fa-fw"
          onMouseEnter={() => setTip('github')}
          onMouseLeave={() => setTip('')}
        />
      </ul>
      <div className="tooltip">
        {tip}
      </div>
    </div>
  );
};

export default toolbar;
