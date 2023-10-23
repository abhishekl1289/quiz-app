
import { useSelector } from 'react-redux';
import './App.css';
import FrontPage from './components/FrontPage';
import MiddlePage from './components/MiddlePage';
import ScorePage from './components/ScorePage';

function App() {
  const {position}=useSelector((store)=>store.quiz)
  return (
    <div>
      {position==="front" && <FrontPage/>}
      {position==="middle" && <MiddlePage/>}
      {position==="last" && <ScorePage/>}
    </div>
  );
}

export default App;
