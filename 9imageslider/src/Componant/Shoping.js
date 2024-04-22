import React,{useState} from 'react';

function Shoping() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const addItem = () => {
      if (inputValue.trim() !== '') {
        setItems([...items, inputValue]);
        setInputValue('');
      }
    };
  
    const removeItem = index => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    };
  
    return (
      <div>
        <h2>Shopping List</h2>
        <div>
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
          <button onClick={addItem}>Add</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Shoping;
