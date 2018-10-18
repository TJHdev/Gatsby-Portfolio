import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import Garagedoor from '../components/garagedoor';
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
    this.state = {
      garageDoorUp: false,
    };
  }

  toggleGarage = () => {
    this.setState(prevState => ({
      garageDoorUp: !prevState.garageDoorUp,
    }));
  };

  scrollToChild = childNum => {
    const node = ReactDOM.findDOMNode(this).children[childNum];
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  };

  render() {
    const { garageDoorUp } = this.state;
    return (
      <ThemeProvider theme={blackTheme}>
        <Layout>
          <Header
            scrollToChild={this.scrollToChild}
            action={this.toggleGarage}
          />
          <Garagedoor garageDoorUp={garageDoorUp} action={this.toggleGarage} />
          <StickyBackground />
          <WorkExperience />
          <Skills />
          <Portfolio />
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default IndexPage;
