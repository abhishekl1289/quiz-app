import { useSelector } from 'react-redux';
import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Score from './components/Score';

function App() {
  const {position} = useSelector((store)=>store.gameState)
  return (
    <div className="App">
      {position==="menu" && <Menu/>}
      {position==="quiz" && <Quiz/>}
      {position==="score" && <Score/>}
    </div>
  );
}

export default App;