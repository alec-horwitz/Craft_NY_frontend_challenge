import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import PostsComponent from '../components/PostsComponent';

class AnalogContainer extends Component {
  render() {
    return (
      <Container>
        --AnalogContainer
        <PostsComponent />
        <PostsComponent />
      </Container>
    );
  }
}

export default AnalogContainer;
