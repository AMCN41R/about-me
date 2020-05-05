import * as React from 'react';

interface IProps {

}

const experience: React.SFC<IProps> = (props): JSX.Element => {

  return (
    <div className="section-wrap">
      <div className="experience-header">
        <h1>
          Experience
        </h1>
      </div>
      <div className="experience-content">
        <div className="cards">
          <div className="card">
            <h3>Leading Teams</h3>
            I have experience leading engineering teams across many disciplines.
            Mentoring and coaching is something I both enjoy and consider to be
            fundamental in building successful, high performing engineering teams.
          </div>
          <div className="card">
            <h3>Leading Change</h3>
            The only constant in our industry is change.
          </div>
          <div className="card">
            <h3>Leading Innovation</h3>
            Innovate or die!
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default experience;
