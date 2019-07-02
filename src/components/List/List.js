import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';

export default function List(props) {
  const user = useContext(UserContext);
  const initialMenu = ['Sharables', 'Entrees', 'Desserts', 'Sides', 'Drinks'];
  const [menu, setMenu] = useState(initialMenu);

  useEffect(() => {
    setMenu( user ? 
      ['Sharables', 'Entrees', 'Desserts', 'Sides', 'Drinks', 'Chef']
      : ['Sharables', 'Entrees', 'Desserts', 'Sides', 'Drinks']);
  }, [user]);

  const menuItems = menu.map( (value, index) => {
    return (
      <Link to={`/${value}`.toLowerCase()} key={index}>
        <div>{value.toUpperCase()}</div>
      </Link>
    );
  });

  return (
    <div className="c-menu">
      {menuItems}
    </div>
  )
}