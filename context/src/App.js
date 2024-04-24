import './App.css';
// import Contact from './Componants/Contact';
import Home from './Componants/Home';
import Context from './Context/Context';
import React, {useState} from 'react';
function App() {
  const [name, setName] = useState("");
  return (
    <Context.Provider  value={{name, setName}} >
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     <Home />
     {/* <Contact /> */}
    </Context.Provider>
  );
}

export default App;
