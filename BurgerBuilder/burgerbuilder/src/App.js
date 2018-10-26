import React, { Component } from 'react';

import Layout from './components/Layout/layout';
import BuilderBurger from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BuilderBurger/>
        </Layout>
      </div>
    );
  }
}

export default App;
