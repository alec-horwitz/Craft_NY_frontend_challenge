import React, { Component } from 'react';
import PostsComponent from '../components/PostsComponent';
import {connect} from 'react-redux'
import { Container, Segment } from 'semantic-ui-react'
import { withRouter } from "react-router-dom"

class FavoritesContainer extends Component {

  getAllRows = () => {
    if (this.props.favorited.length === 0) {
      return [<Segment inverted color='grey' textAlign='center'>No favorites yet.</Segment>]
    } else {
      return this.props.favorited.map(post => {
        return <PostsComponent post={post}/>
      })
    }
  }

  render() {
    return (
      <Container>
        {this.getAllRows()}
      </Container>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default withRouter(connect(mapStateToProps)(FavoritesContainer));
