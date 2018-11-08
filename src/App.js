import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import AnalogContainer from './containers/AnalogContainer';
import FavoritesContainer from './containers/FavoritesContainer';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        App
        <AnalogContainer />
        <FavoritesContainer />
      </Container>
    );
  }
}

export default App;
