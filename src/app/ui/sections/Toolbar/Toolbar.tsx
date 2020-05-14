import * as React from 'react';

const toolbar: React.SFC = (): JSX.Element => {
  return (
    <div className="toolbar">
      <ul className="nav d-flex">
        <li className="nav-item">
          <a href="mailto:hello@alexmcnair.net" target="_blank">
            <i className="fas fa-inbox fa-fw"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://amcn41r.github.io/blog/" target="_blank">
            <i className="fas fa-signature fa-fw"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/alexander-mcnair/" target="_blank">
            <i className="fab fa-linkedin fa-fw"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/AMCN41R" target="_blank">
            <i className="fab fa-github fa-fw"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default toolbar;
