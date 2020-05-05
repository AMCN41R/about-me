import * as React from 'react';

const about: React.SFC = (): JSX.Element => (
  <div className="section-wrap">
    <div className="about-header">
      Hi, I'm Alex
    </div>
    <div className="about-content">
      <div className="about-section">
        <h2>I LOVE SOFTWARE ENGINEERING</h2>
      </div>

      <div className="about-section">
        <p>
          <span className="emphasis">Professionally, </span>
          I feel lucky that I truly enjoy what I do, and that I’ve been a part
          of so many different aspects of the engineering ecosystem during my career.
        </p>

        <p>
          I am a passionate and proficient architect and engineer with experience
          designing and delivering enterprise applications and solutions. Problem
          solving and delivering high value outcomes to the customer and end user
          are what drive me.
        </p>

        <p>
          Coaching and mentoring is something that I really enjoy and take enormous
          pride in. I feel that the development of others is fundamental for a successful,
          high performing team, and have seen first-hand, the impact of a well-structured
          graduate program.
        </p>
      </div>

      <div className="about-section">
        <p>
          <span className="emphasis">Personally, </span>
          I'm a guitar and coffee enthusiast!
        </p>
        <p>
          I’m a keen guitarist, currently playing in <a href="http://www.thebastardsons.co.uk" target="_blank" className="about-link">The Bastard Sons</a>.
          I love to get out into the countryside and walk with the dog, and with
          friends and family when I can. Although I don’t play so much these days,
          I’m a big basketball fan.
        </p>
      </div>

      <div className="cards about-pics">
        <div className="card">
          <img src="img/about-1-sm.jpg" />
        </div>
        <div className="card">
          <img src="img/about-2-sm.jpg" />
        </div>
        <div className="card">
          <img src="img/about-3-sm.jpg" />
        </div>
      </div>
    </div>

  </div>
);

export default about;
