import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './views/Home';
import NotFound from './views/NotFound';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './store';
import './style/App.scss';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      <Footer />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
