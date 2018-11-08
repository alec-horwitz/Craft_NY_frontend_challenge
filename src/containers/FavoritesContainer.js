import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import PostsComponent from '../components/PostsComponent';

class FavoritesContainer extends Component {
  render() {
    return (
      <Container>
        --FavoritesContainer
        <PostsComponent />
        <PostsComponent />
      </Container>
    );
  }
}

export default FavoritesContainer;
