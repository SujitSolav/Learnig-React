import React,{useContext} from 'react';
import Context from '../Context/Context';
function Home() {
    const {name}=useContext(Context);
  return (
    <div>
        <h1>home</h1>
      <h1>{name}</h1>
    </div>
  );
}
export default Home;
