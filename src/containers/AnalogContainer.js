import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import PostsComponent from '../components/PostsComponent';
import {connect} from 'react-redux'
import { Route, NavLink, Switch, withRouter } from "react-router-dom"

class AnalogContainer extends Component {
  componentDidMount = () => {
    this.props.toggleList()
  }
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

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    toggleList: (bool) => {
      dispatch({type: "TOGGLE_LIST", payload: bool})
    }
  }
}

// export default AnalogContainer;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnalogContainer));
