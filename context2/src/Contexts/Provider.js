import React,{useState} from 'react';
import Context from './Context';
function Provider({children}) {
    const [name, setName] = useState("");
  return (
    <Context.Provider value={{name, setName}}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
