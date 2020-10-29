import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { Header, User, Users } from 'components';
import WithSpinner from 'components/WithSpinner';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/users/:id' component={WithSpinner(User)}/>
        <Route path='/users/' component={WithSpinner(Users)}/>
        <Route path='/' component={WithSpinner(Users)}/>
      </Switch>
    </div>
  );
}

export default App;
