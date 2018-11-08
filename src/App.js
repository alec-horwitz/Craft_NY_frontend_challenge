import React, { Component } from 'react';
import { Container, Segment, Divider } from 'semantic-ui-react'
import AnalogContainer from './containers/AnalogContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import { Route, NavLink, Switch } from "react-router-dom"
import {connect} from 'react-redux'
// import './App.css';

const ENDPOINT = `https://www.reddit.com/r/analog/top/.json`


class App extends Component {

  componentDidMount = () => {
    fetch(ENDPOINT).then(res => res.json()).then(res => {
      this.props.assignListing(res.data.children)
    })
  }

  render() {
    let num = this.props.listing.length
    return (
      <div className="app">
        <div className="nav" >
          <ul >
            <li ><NavLink activeClassName="active" to="/home" > /r/analog </NavLink></li>
            <li ><NavLink activeClassName="active" to="/favs" > Favorites({num}) </NavLink></li>
          </ul>
        </div>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        App
        <Switch>
          <Route path="/home" component={AnalogContainer} />
          <Route path="/favs" component={FavoritesContainer} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    assignListing: listing => {
      dispatch({type: "ASSIGN_LISTING", payload: listing})
    }
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
