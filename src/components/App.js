import React, { useState } from 'react';
import '../dist/css/App.min.css';
import List from './List';
import Display from './Display'

function App() {
  const initialMenu = ['Sharables', 'Entrees', 'Desserts', 'Sides', 'Drinks'];
  const [menu, setMenu] = useState(initialMenu);

  return (
    <div className="c-main">
      <List menu={menu} />
      <Display />
    </div>
  );
}

export default App;
