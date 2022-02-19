import React from 'react';

import FadeIn from './components/FadeIn';

import Toolbar from './components/Toolbar/Toolbar';
import Header from './components/Header/Header';
import About from 'sections/About/About';
import Experience from 'sections/Experience/Experience';
import Technical from 'sections/Technical/Technical';
import Projects from 'sections/Projects/Projects';
import Footer from 'sections/Footer/Footer';

const app: React.FC = (): JSX.Element => (
  <>
    <FadeIn ms={500}>
      <Toolbar />
      <Header />
    </FadeIn>

    <FadeIn ms={1500}>
      <About />
      <Experience />
      <Technical />
      <Projects />
      {/* <Footer /> */}
    </FadeIn>
  </>
);

export default app;
