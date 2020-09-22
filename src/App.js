import React from 'react';
import { Provider } from 'react-redux';
import Playground from './container/Playground';
import Timer from './container/Timer';
import BetDetails from './container/BetDetails';
import Comments from './container/Comments';
import FrequentNumbers from './container/FrequentNumbers';
import store from './redux/store'
import './App.css';

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
            <Timer />
            <BetDetails />
            <Comments />
          </div>
        </div>
        <div className="footer">
          <FrequentNumbers /> {/* bonus functionality with RANDOM frequence numbers */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
