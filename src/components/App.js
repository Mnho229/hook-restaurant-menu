import React, { useState } from 'react';
import '../dist/css/App.min.css';
import List from './List';
import Display from './Display'
import {BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './UserContext';

function App() {
  const [currentUser, setCurrentUser] = useState(0);

  //Based on 0 or 1, change the menu
  //Understand the child function used here more
  return (
    <Router>
      <div className="c-switcher">
        <div className="btn-switch btn--reset"
          onClick={ () => setCurrentUser(0) }>
          Pleb
        </div>
        <div className="btn-switch btn--chef"
          onClick={ () => setCurrentUser(1) }>
          Chef
        </div>
      </div>
      <UserProvider value={currentUser}>
        <div className="c-main">
          <List />
          <Display />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
