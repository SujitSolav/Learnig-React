import React , {useState} from 'react';
import axios from 'axios';

function Gitsearch() {
    const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  const searchUsers = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchValue}`);
      setSearchResults(response.data.items);
      setError(null);
    } catch (error) {
      setSearchResults([]);
      setError('Error searching for users. Please try again later.');
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input type="text" value={searchValue} onChange=  {handleSearchChange}  />
      <button onClick={searchUsers}>Search</button>
      {error && <p>{error}</p>}
      <ul>
        {searchResults.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt="User Avatar"  />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Gitsearch;
