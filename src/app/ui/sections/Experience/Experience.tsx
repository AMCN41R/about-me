import * as React from 'react';

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
  iconClassName: string;
  content: string[];
}

const ExperienceCard: React.SFC<IProps> = (props): JSX.Element => (
  <div className="card">
    <i className={props.iconClassName}></i>
    <h2>{props.title}</h2>
    {
      props.content.map((item, i) => (
        <div key={i} className="experience-list-item">{item}</div>
      ))
    }
  </div>
)

const experience: React.SFC = (): JSX.Element => (
  <div className="section-wrap">
    <h1>Experience</h1>
    <div className="experience-content">
      <div className="cards">
        <ExperienceCard
          title="Leading Teams"
          iconClassName="fas fa-users fa-fw"
          content={teams}
        />
        <ExperienceCard
          title="Leading Change"
          iconClassName="fas fa-exchange-alt fa-fw"
          content={change}
        />
        <ExperienceCard
          title="Leading Innovation"
          iconClassName="far fa-lightbulb fa-fw"
          content={innovation}
        />
      </div>
    </div>
  </div>
);

export default experience;
