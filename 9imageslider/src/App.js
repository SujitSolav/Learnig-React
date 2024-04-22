import './App.css';
import Bmical from './Componant/Bmical';
import Faq from './Componant/Faq';
import Gitsearch from './Componant/Gitsearch';
import Quote from './Componant/Quote';
import Shoping from './Componant/Shoping';
import Slider from './Componant/Slider';
import Videoplayer from './Componant/Videoplayer';

function App() {
  return (
    <div className="App">
      <Slider/>
      <Faq/>
      <Quote/>
      <Shoping/>
      <Gitsearch/>
      <Videoplayer/>
      <Bmical/>
    </div>
  );
}

export default App;
