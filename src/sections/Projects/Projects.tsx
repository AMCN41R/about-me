import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLeaf, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import * as React from 'react';
import Section from 'sections/Section';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LinkButton from "components/LinkButton";
import styled from "styled-components";

interface IProps {
  title: string;
  icon: IconProp
  text: string;
  href: string;
}

const ProjectCard: React.FC<IProps> = (props): JSX.Element => (
  <GridItem>
    <FontAwesomeIcon icon={props.icon} size='3x' fixedWidth={true} />
    <h3>{props.title}</h3>
    <div className="flex-grow-1">
      {props.text}
    </div>
    <LinkButton href={props.href} icon={faGithub} text="View it on GitHib" />
  </GridItem>
);

const GridStyled = styled(Grid)`
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const projects: React.FC = (): JSX.Element => (
  <Section>
    <h1>Projects</h1>
    <div className="projects-content">
      <GridStyled>
        <ProjectCard
          title="Harness"
          icon={faLeaf}
          href="https://github.com/AMCN41R/harness"
          text="Harness is a .NET library designed to manage the state of a Mongo database during testing."
        />
        <ProjectCard
          title="Command Framework"
          icon={faPaperPlane}
          href="https://github.com/AMCN41R/csharp-command-framework"
          text="A simple, configurable command processing pipeline that can be added to any .NET project."
        />
      </GridStyled>
    </div>
  </Section>
);

export default projects;
