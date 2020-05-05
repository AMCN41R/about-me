import * as React from 'react';

const header: React.SFC = (): JSX.Element => {
  return (
    <div className="header-wrap">
      <div className="header-content">
        <h1>Alex McNair</h1>
        <h3>Software Engineer, Architect, Consultant</h3>
        <h4>Dog Owner, Guitarist, Coffee Lover</h4>
      </div>
    </div>
  );
};

export default header;
