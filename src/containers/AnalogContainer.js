import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import PostsComponent from '../components/PostsComponent';
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom"
import UUID from 'uuid';

class AnalogContainer extends Component {

  getAllRows = () => {
    return this.props.listing.map(post => {
      return <PostsComponent key={UUID()} post={post}/>
    })
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

export default withRouter(connect(mapStateToProps)(AnalogContainer));
