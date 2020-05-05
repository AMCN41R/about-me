import * as React from 'react';

import LinkButton from 'ui/components/LinkButton';

interface IProps {
  title: string;
  iconClassName: string;
  text: string;
  href: string;
}

const ProjectCard: React.SFC<IProps> = (props): JSX.Element => (
  <div className="card">
    <i className={props.iconClassName} />
    <h3>{props.title}</h3>
    <div className="flex-grow-1">
      {props.text}
    </div>
    <LinkButton
      href={props.href}
      text="View it on GitHib"
      textClassName="italic"
      iconClassName="fab fa-github fa-fw"
    />
  </div>
);

const projects: React.SFC = (): JSX.Element => (
  <div className="section-wrap">
    <h1>Projects</h1>
    <div className="projects-content">
      <div className="cards">
        <ProjectCard
          title="Harness"
          iconClassName="fas fa-leaf fa-fw"
          href="https://github.com/AMCN41R/harness"
          text="Harness is a .NET library designed to manage the state of a Mongo database during testing."
        />
        <ProjectCard
          title="re-view"
          iconClassName="fas fa-server fa-fw"
          href="https://github.com/AMCN41R/re-view"
          text="A UI for Redis built using Node, React and Typescript."
        />
      </div>
    </div>
  </div>
);

export default projects;
