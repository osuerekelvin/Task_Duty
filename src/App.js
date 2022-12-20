
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './pages/Navbar'
import Mytask from './pages/mytask/Mytask';
import Newtast from './pages/newTask/Newtast';
import Edittask from './pages/edittask/Edittask';

function App() {
  return (
    <div>
  <Router>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path="/tasks" element = { <Mytask/>} /> 
        <Route path="/create" element = { <Newtast/>} /> 
        <Route path="/edit/:id" element = { <Edittask/>} />    
      </Routes>
    </Router>
    </div>
  );
}

export default App;
