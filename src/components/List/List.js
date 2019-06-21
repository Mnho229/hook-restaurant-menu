import React, { useState } from 'react';

export default function List(props) {

  const menuItems = props.menu.map( (value, index) => {
    return (
      <li key={index}>{value}</li>
    );
  });
  return (
    <ul className="c-menu">
      {menuItems}
    </ul>
  )
}