import * as React from 'react';

interface IProps {

}

const projects: React.SFC<IProps> = (props): JSX.Element => {

  return (
    <div className="section-wrap">
      <div className="projects-header">
        <h1>
          Projects
        </h1>
      </div>
      <div className="projects-content">
        <div className="cards">
          <div className="card">
            <img src="/img/mongo.png" />
            <h3>Harness</h3>
          </div>
          <div className="card">
            <img src="/img/redis.png" />
            <h3>RE-View</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
