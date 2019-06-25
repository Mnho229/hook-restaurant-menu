import React, { useState } from 'react';
import '../dist/css/App.min.css';
import List from './List';
import Display from './Display'
import {BrowserRouter as Router} from 'react-router-dom';
const UserContext = React.createContext(0);

function App() {
  const initialMenu = ['Sharables', 'Entrees', 'Desserts', 'Sides', 'Drinks'];
  const [menu, setMenu] = useState(initialMenu);
  const [currentUser, setCurrentUser] = useState(0);

  //Based on 0 or 1, change the menu
  //Understand the child function used here more
  return (
    <Router>
      <div className="c-switcher">
        <div className="btn-switch btn--reset"
          onClick={ () => setCurrentUser(0) }>
          Reset
        </div>
        <div className="btn-switch btn--chef"
          onClick={ () => setCurrentUser(1) }>
          Chef
        </div>
      </div>
      <UserContext.Consumer value={currentUser}>
        {({ handleChange }) => (
          <div className="c-main">
            <List menu={menu} />
            <Display />
          </div>
        )}
      </UserContext.Consumer>
    </Router>
  );
}

export default App;
