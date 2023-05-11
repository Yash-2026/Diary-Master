import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/mydiary' element={<Mainpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
