import * as React from 'react';

import FadeIn from 'ui/components/FadeIn';

import Toolbar from 'ui/sections/Toolbar/Toolbar';
import Header from 'ui/sections/Header/Header';
import About from 'ui/sections/About/About';
// import Experience from 'ui/sections/Experience/Experience';
// import Technical from 'ui/sections/Technical/Technical';
// import Employment from 'ui/sections/Employment/Employment';
// import Projects from 'ui/sections/Projects/Projects';
// import Footer from 'ui/sections/Footer/Footer';

const app: React.SFC = (): JSX.Element => {

  return (
    <>
      <FadeIn ms={500}>
        <Toolbar />
        <Header />
      </FadeIn>

      <FadeIn ms={1500}>
        <About />
        {/* <Experience />
        <Technical />
        <Employment />
        <Projects />
        <Footer /> */}
      </FadeIn>
    </>
  );
};

export default app;
