import React from 'react';
import {Link} from 'react-router-dom';

export default function List(props) {

  const menuItems = props.menu.map( (value, index) => {
    return (
      <li key={index}>
        <Link to={`/${value}`.toLowerCase()}>{value.toUpperCase()}</Link>
      </li>
    );
  });
  return (
    <ul className="c-menu">
      {menuItems}
    </ul>
  )
}