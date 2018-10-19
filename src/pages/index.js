import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/common-components/Header';
import StickyBackground from '../components/common-components/StickyBackground';
import WorkExperience from '../components/sections/workexperience';
import Skills from '../components/sections/skills';
import Portfolio from '../components/sections/portfolio';
import Footer from '../components/footer';

const blackTheme = {
  primary: 'red',
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.targetRefs = {
      experience: React.createRef(),
      skills: React.createRef(),
      portfolio: React.createRef(),
    };
  }

  scrollToChild = ref => {
    const node = ref.current;
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={blackTheme}>
        <Layout>
          <Header
            scrollToChild={this.scrollToChild}
            action={this.toggleGarage}
            targetRefs={this.targetRefs}
          />
          <StickyBackground />
          <WorkExperience ref={this.targetRefs.experience} />
          <Skills ref={this.targetRefs.skills} />
          <Portfolio ref={this.targetRefs.portfolio} />
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default IndexPage;
