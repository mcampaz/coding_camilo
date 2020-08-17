import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './components/lista';
import Login from './components/login';
import Register from './components/register';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
          <Redirect from="/" to="/login" exact />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} /> 
          <Route exact path='/users' component={App} />  
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
