import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Block from './pages/Block';
import Events from './pages/Events';
import {Route,Routes} from 'react-router-dom'
function App() {
   return(
    <div>
     
      
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/block' element={<Block/>} />
      </Routes>
    
    </div>
   )
}
export default App;
