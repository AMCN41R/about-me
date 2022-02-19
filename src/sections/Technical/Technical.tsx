import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGitAlt, faMicrosoft, faReact, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';
import Section from '../Section';

interface IProps {
  title: string;
  icon: IconProp
  text: string;
}

const TechnicalCard: React.FC<IProps> = (props): JSX.Element => (
  <GridItem>
    <FontAwesomeIcon icon={props.icon} size='2x' fixedWidth={true} />
    <h3>{props.title}</h3>
    <div className="flex-grow-1">
      {props.text}
    </div>
  </GridItem>
);

const technical: React.FC = (): JSX.Element => (
  <Section alt={true}>
    <Grid>
      <TechnicalCard
        title="Backend"
        icon={faMicrosoft}
        text="C#, F#, VB.NET, dotnet core, asp core"
      />
      <TechnicalCard
        title="Azure"
        icon={faCloud}
        text="IoT Hub/IoT Edge, Event Hubs, CosmosDB, Table/Blob Storage, ACR, AKS, App Services"
      />
      <TechnicalCard
        title="Frontend"
        icon={faReact}
        text="Typescript, React, Redux, Webpack, Vue, Aurelia, Angular, Node, npm, yarn, Express"
      />
      <TechnicalCard
        title="Data"
        icon={faDatabase}
        text="MS SQL, MongoDB, Postgres, EventStore, Redis, MySQL"
      />
      <TechnicalCard
        title="Process"
        icon={faTrello}
        text="JIRA, Bitbucket, GitHub, Azure DevOps, Jenkins, Team City, Octopus Deploy, Circle CI, Trello, Confluence, ITIL"
      />
      <TechnicalCard
        title="Tools"
        icon={faGitAlt}
        text="Git, Docker, PowerShell, Bash, RabbitMQ"
      />
    </Grid>
  </Section>
);

export default technical;
