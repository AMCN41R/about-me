import * as React from 'react';

const about: React.SFC = (): JSX.Element => {
  return (
    <div className="section-wrap">
      <div className="about-header">
        Hi, I'm Alex
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>I LOVE SOFTWARE ENGINEERING</h2>
          It’s corny, but it really is true.
        </div>

        <div className="about-section">
          <span className="emphasis">Professionally, </span>
          I feel lucky that I truly enjoy what I do, and that I’ve been a part
          of so many different aspects of the engineering ecosystem during my career.
          I am a passionate and proficient engineer with experience designing and
          delivering enterprise applications and solutions. Problem solving and
          delivering high value outcomes to the customer and end user are what
          drive me. I am equally driven by the development of others. Coaching
          and mentoring is something that I really enjoy and I feel is fundamental
          for a successful, high performing team. I have seen first-hand, the impact
          of a well-structured graduate program. I consider myself professional
          with a keen eye for detail, and having previously worked in a high pressure
          IT service environment for 4 years, troubleshooting and support come as
          second nature. I am a self-motivated individual who is both deadline
          focused and thorough in my approach to work, and I pride myself on my
          ability to learn new skills and processes quickly.
        </div>

        <div className="about-section">
          <span className="emphasis">Personally, </span>
          I'm a guitar and coffee enthusiast!
          I’m a keen guitarist, currently playing in a band that formed in 2012.
          I love to get out into the countryside and walk with the dog, and with
          friends and family when I can. Although I don’t play so much these days,
          I’m a big basketball fan.
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
};

export default about;
