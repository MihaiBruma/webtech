import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/genInfo">General Information*</Link>
        </li>
        <li>
          <Link to="/ArhMem">Architecture and MCU MEMORY (KB)*</Link>
        </li>
        <li>
          <Link to="/Appl">AVR ATMega32 Pin-Out.*</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
