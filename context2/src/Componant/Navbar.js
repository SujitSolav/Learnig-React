import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../Contexts/Context';

function Navbar() {
  const {name}= useContext(Context);
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    backgroundColor: '#f0f0f0',
    borderBottom: '3px solid #ccc',
    height :'50px',
  };

  const linkStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    color: '#333',
  };

  const activeLinkStyle = {
    color: '#007bff',
    borderBottom: '2px solid #007bff',
  };

  return (
    <div>
      <ul style={navStyle}>
        <li>{name.user}</li>
        <li><NavLink exact to="/" style={linkStyle} activeStyle={activeLinkStyle}>Home</NavLink></li>
        <li><NavLink to="/Login" style={linkStyle} activeStyle={activeLinkStyle}>Login</NavLink></li>
        <li><NavLink to="/Profile" style={linkStyle} activeStyle={activeLinkStyle}>Profile</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
