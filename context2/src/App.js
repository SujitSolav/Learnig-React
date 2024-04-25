import React from 'react';
import './App.css';
import {Outlet} from  'react-router-dom';
import Navbar from './Componant/Navbar';
import Provider from './Contexts/Provider';


function App() {
  return (
    <div className="App">
      <Provider>
      <Navbar/>
      <Outlet/>
      </Provider>
    </div>
  );
}

export default App;
