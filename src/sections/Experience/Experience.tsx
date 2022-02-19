import * as React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

import Grid from 'components/Grid';
import GridItem from 'components/GridItem';

import Section from '../Section';

const teams = [
  "Technical leadership, mentoring & line management",
  "Software consultancy in both the public & private sector",
  "Designing & running a successful engineering academy program"
];

const change = [
  "Agile development process design & implementation using Kanban & Scrum",
  "Implementing automated CI/CD pipelines using various platforms",
  "Implementing IT Service Management process & tooling"
];

const innovation = [
  "Architecting microservice platforms & distributed systems",
  "IoT & Edge compute technical design & implementation",
  "Azure, Kubernetes, Docker, Event Sourcing, CQRS"
];

interface IProps {
  title: string;
  icon: IconProp;
  content: string[];
}

const ExperienceCard: React.FC<IProps> = (props): JSX.Element => (
  <GridItem>
    <FontAwesomeIcon icon={props.icon} size='3x' fixedWidth={true} />
    <h2>{props.title}</h2>
    {
      props.content.map((item, i) => (
        <div key={i} className="pt-2 pb-2">{item}</div>
      ))
    }
  </GridItem>
)

const experience: React.FC = (): JSX.Element => (
  <Section>
    <h1>Experience</h1>
    <div>
      <Grid gridGap='2rem'>
        <ExperienceCard
          title="Leading Teams"
          icon={faUsers}
          content={teams}
        />
        <ExperienceCard
          title="Leading Change"
          icon={faExchangeAlt}
          content={change}
        />
        <ExperienceCard
          title="Leading Innovation"
          icon={faLightbulb}
          content={innovation}
        />
      </Grid>
    </div>
  </Section>
);

export default experience;
