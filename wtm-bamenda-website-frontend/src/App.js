import logo from './logo.svg';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Events from './pages/Events';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
function App() {

   return(
    <div>
     <NavBar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    <Footer></Footer>
    </div>
   )

}
export default App;
