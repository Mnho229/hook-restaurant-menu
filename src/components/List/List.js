import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';

export default function List(props) {
  const initialMenu = ['Sharables', 'Entrees', 'Desserts', 'Sides', 'Drinks'];
  const [menu, setMenu] = useState(initialMenu);
  const user = useContext(UserContext);

  console.log(user);

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