import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import PostsComponent from '../components/PostsComponent';
import {connect} from 'react-redux'
import { Route, NavLink, Switch, withRouter } from "react-router-dom"

class FavoritesContainer extends Component {
  // componentDidMount = () => {
  //   this.props.toggleList(false)
  // }


  getAllRows = () => {
    return this.props.favorited.map(post => {
      return <PostsComponent post={post}/>
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

function mapDispatchToProps(dispatch){
  return {
    toggleList: (bool) => {
      dispatch({type: "TOGGLE_LIST", payload: bool})
    }
  }
}

// export default FavoritesContainer;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer));
