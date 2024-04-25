import React, {useContext} from 'react';
import Context from '../Contexts/Context';
function Profile() {
    const {name}= useContext(Context);
  return (
    <div>
      <h1>Porfile</h1>
        <h1>{name.user}</h1>
        <h1>{name.mobile}</h1>
    </div>
  );
}

export default Profile;
