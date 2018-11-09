import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { Route, NavLink, Switch, withRouter } from "react-router-dom"

class PostsComponent extends Component {

  render() {
    return (
      <Container>----PostsComponent</Container>
    );
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    toggleList: () => {
      dispatch({type: "TOGGLE_LIST"})
    }
  }
}

// export default PostsComponent;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsComponent));
