import React,{useState, useContext} from 'react';
import Context from '../Contexts/Context';

function Login() {
    const [user, setUser] = useState('');
    const [mobile, setMobile] = useState('');

    const {setName}=useContext(Context);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setName( {user, mobile})
    }
  return (
    <div>
      <h1>Login</h1>
      Name : <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} /> <br></br>
      Mobile : <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} /><br></br>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
