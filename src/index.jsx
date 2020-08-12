import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Colors from './styles/settings/Colors';
import Reset from './styles/Reset';
import Video from './Pages/Video/index';

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/video/new" exact component={Video} />
        <Route component={() => <div>Pagina 404 :/</div>} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
