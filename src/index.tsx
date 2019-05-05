import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const App: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>    
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
