import * as React from 'react';

interface IProps {
  title: string;
  iconClassName: string;
  text: string;
}

const TechnicalCard: React.SFC<IProps> = (props): JSX.Element => (
  <div className="card">
    <i className={props.iconClassName}></i>
    <h3>{props.title}</h3>
    <div className="flex-grow-1">
      {props.text}
    </div>
  </div>
);

const technical: React.SFC = (): JSX.Element => (
  <div className="section-wrap-alt technical-content">
    <div className="cards">
      <TechnicalCard
        title="Backend"
        iconClassName="fab fa-microsoft fa-fw"
        text="C#, F#, VB.NET, dotnet core, asp core"
      />
      <TechnicalCard
        title="Azure"
        iconClassName="fas fa-cloud fa-fw"
        text="IoT Hub/IoT Edge, Event Hubs, CosmosDB, Table/Blob Storage, ACR, AKS, App Services"
      />
      <TechnicalCard
        title="Frontend"
        iconClassName="fab fa-react fa-fw"
        text="Typescript, React, Redux, Webpack, Vue, Aurelia, Angular, Node, npm, yarn, Express"
      />
      <TechnicalCard
        title="Data"
        iconClassName="fas fa-database fa-fw"
        text="MS SQL, MongoDB, Postgres, EventStore, Redis, MySQL"
      />
      <TechnicalCard
        title="Process"
        iconClassName="fab fa-trello fa-fw"
        text="JIRA, Bitbucket, GitHub, Azure DevOps, Jenkins, Team City, Octopus Deploy, Circle CI, Trello, Confluence, ITIL"
      />
      <TechnicalCard
        title="Tools"
        iconClassName="fab fa-git-alt fa-fw"
        text="Git, Go, Docker, PowerShell, Bash, RabbitMQ"
      />
    </div>
  </div>
);

export default technical;
