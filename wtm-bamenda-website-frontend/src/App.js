import logo from './logo.svg';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Events from './pages/Events';
import BlogDetails from './pages/BlogDetails';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {

   return(
    <div>
     
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blogdetails' element={<BlogDetails/>} />
      </Routes>
    
    </div>
   )

}
export default App;
