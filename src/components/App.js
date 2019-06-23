import React, { useState } from 'react';
import '../dist/css/App.min.css';
import List from './List';
import Display from './Display'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const initialMenu = ['Sharables', 'Entrees', 'Desserts', 'Sides', 'Drinks'];
  const [menu, setMenu] = useState(initialMenu);

  return (
    <Router>
      <div className="c-main">
        <List menu={menu} />
        <Display />
      </div>
    </Router>
  );
}

export default App;
