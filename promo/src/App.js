import logo from './logo.svg';
import './App.css';
import { images } from './assets';

function App() {
  return (
    <div>
      <img src={images.sunflower}></img>
      <img src={images.cat}></img>
      <img src={images.butterfly}></img>
    </div>
  );
}

export default App;
