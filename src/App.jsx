import './App.css';
import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';

import routes from './routes';
import isAuthenticated from './utils/isAuthenticated';
export const history = createBrowserHistory();
export { toast };

const RenderRoute = (route) => {
  const history = useHistory();

  if (route.needsAuth && !isAuthenticated()) {
    history.push('/');
  }

  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </Suspense>
      <ToastContainer />
    </Router>
  );
}

export default App;
