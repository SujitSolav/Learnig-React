import React,{useEffect,useState} from 'react';


function Quote() {
    const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{quote.content}</p>
      <p>- by {quote.author}</p>
      <button onClick={() => window.location.reload(false)}>New Quote</button>
    </div>
  );
};

export default Quote;
