import React from 'react';
import { NavLink } from 'react-router-dom';

const TabBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" exact strict>Home</NavLink>
      </li>
      <li>
        <NavLink to="/favourites">Favourites</NavLink>
      </li>
    </ul>
  );
};

export default TabBar;