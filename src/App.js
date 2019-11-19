import React, { Component } from 'react';
import './style.scss';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from './history';
import Store from './Store';
import Header from './Layout/header/Header'
import Footer from './Layout/footer/Footer'
import ModelContainer from './containers/ModelListing-Container'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={Store}>
          <Header></Header>
          <div className="App" >
            <Switch>
              <Route exact={true} path="/" component={ModelContainer} />
            </Switch>
          </div>
          <Footer></Footer>
        </Provider>
      </Router>
    );
  }
}

export default App;
