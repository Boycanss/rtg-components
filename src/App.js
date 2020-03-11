import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PageWrapper from './Components/Pagewrapper/PageWrapper';

export default class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
        </PageWrapper>
      </Router>
    )
  }
}
