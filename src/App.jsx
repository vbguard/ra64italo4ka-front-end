import React, { Component } from 'react';
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';

const history = createBrowserHistory();

const AppWrap = styled.div`
  backgroundColor: '#222222';
`;

class App extends Component {
  render() {
    return (
      <AppWrap>
        <Router history={history}>
          
          <Route exact stric path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/dashboard' component={Dashboard}/>
          {/* <Redirect to='/login'/> */}
        </Router>
      </AppWrap>
    );
  }
}

export default App;
