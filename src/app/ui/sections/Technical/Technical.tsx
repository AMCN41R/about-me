import * as React from 'react';

interface IProps {

}

const technical: React.SFC<IProps> = (props): JSX.Element => {

  return (
    <div className="section-wrap">
      <div className="technical-header">
        <h1>
          Technical
      </h1>
      </div>
      <div className="technical-content">
        <div className="cards">
          <div className="card">
            <img src="/img/csharp.png" />
            <h3>Backend</h3>
            <div className="flex-grow-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique beatae exercitationem adipisci fuga dignissimos voluptatum provident, inventore, amet quos eos, quisquam officiis quibusdam? Ipsam minima beatae illo a dignissimos maiores id animi cum optio alias, laudantium facilis! Hic alias reiciendis eius blanditiis! Ipsam quasi illo quaerat assumenda, alias debitis.
            </div>
          </div>
          <div className="card">
            <img src="/img/database.png" />
            <h3>Data</h3>
            <div className="flex-grow-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique beatae exercitationem adipisci fuga dignissimos voluptatum provident, inventore, amet quos eos, quisquam officiis quibusdam? Ipsam minima beatae illo a dignissimos maiores id animi cum optio alias, laudantium facilis! Hic alias reiciendis eius blanditiis! Ipsam quasi illo quaerat assumenda, alias debitis.
            </div>
          </div>
          <div className="card">
            <img src="/img/react.png" />
            <h3>Frontend</h3>
            <div className="flex-grow-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique beatae exercitationem adipisci fuga dignissimos voluptatum provident, inventore, amet quos eos, quisquam officiis quibusdam? Ipsam minima beatae illo a dignissimos maiores id animi cum optio alias, laudantium facilis! Hic alias reiciendis eius blanditiis! Ipsam quasi illo quaerat assumenda, alias debitis.
            </div>
          </div>
          <div className="card">
            <img src="/img/azure.png" />
            <h3>Cloud</h3>
            <div className="flex-grow-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique beatae exercitationem adipisci fuga dignissimos voluptatum provident, inventore, amet quos eos, quisquam officiis quibusdam? Ipsam minima beatae illo a dignissimos maiores id animi cum optio alias, laudantium facilis! Hic alias reiciendis eius blanditiis! Ipsam quasi illo quaerat assumenda, alias debitis.
            </div>
          </div>
          <div className="card">
            <img src="/img/git.png" />
            <h3>Tools</h3>
            <div className="flex-grow-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique beatae exercitationem adipisci fuga dignissimos voluptatum provident, inventore, amet quos eos, quisquam officiis quibusdam? Ipsam minima beatae illo a dignissimos maiores id animi cum optio alias, laudantium facilis! Hic alias reiciendis eius blanditiis! Ipsam quasi illo quaerat assumenda, alias debitis.
            </div>
          </div>
          <div className="card">
            <img src="/img/jira.png" />
            <h3>Process</h3>
            <div className="flex-grow-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique beatae exercitationem adipisci fuga dignissimos voluptatum provident, inventore, amet quos eos, quisquam officiis quibusdam? Ipsam minima beatae illo a dignissimos maiores id animi cum optio alias, laudantium facilis! Hic alias reiciendis eius blanditiis! Ipsam quasi illo quaerat assumenda, alias debitis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default technical;
