import { images } from "./assets";
import Title from "./assets/title";
import Description from "./assets/description";
import styles from './styles.css';

function App() {
  return (
    <div className="Container">
      <div>
      <img src={images.madrid}/>
      </div>
      <Title/>
    </div>
  );
}

export default App;
