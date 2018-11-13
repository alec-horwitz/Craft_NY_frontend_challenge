import React, { Component } from 'react';
import { Container, Image, Card, Icon, Divider } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { Route, NavLink, Switch, withRouter } from "react-router-dom"

class PostsComponent extends Component {

  render() {
    const faved = this.props.favorited.filter(fav => this.props.post.data.id === fav.data.id).length
    const icon = faved ? 'heart' : 'heart outline'
    const corner = faved ? 'right' : 'left'
    return (
      <Container>
        <Card centered >
          <Image
            label={{ as: 'a', corner: corner, icon: icon }}
            src={this.props.post.data.thumbnail} size='massive'
            onClick={() => this.props.toggleFav(this.props.post)}
          />
          <Card.Content>
            <Card.Header>{this.props.post.data.title}</Card.Header>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='user' />
            {this.props.post.data.author}
          </Card.Content>
        </Card>
        <Divider hidden />
      </Container>
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
    },
    toggleFav: (fav) => {
      dispatch({type: "TOGGLE_FAV", payload: fav})
    },
  }
}

// export default PostsComponent;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsComponent));
