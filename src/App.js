import React from 'react';
import { Provider } from 'react-redux';
import Playground from './container/Playground';
import Timer from './container/Timer';
import BetDetails from './container/BetDetails';
import Comments from './container/Comments';
import store from './redux/store'
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header">
          <h1>Interview Task</h1>
        </div>
        <div className="wrapper">
          <Playground />
          <div className="details">
            <div className="betDetails">
              <Timer />
              <BetDetails />
            </div>
            <Comments />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
