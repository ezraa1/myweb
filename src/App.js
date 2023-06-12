import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navlinks from './components/Navlinks';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    
      <div>
        
       <Navlinks/>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="skills" element={<Skills/>} />
          <Route path="projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <div>
          <img src={require('./assets/avatar.jpg')} alt='avatar'/>
        </div>
      </div>
    
    
  );
}

export default App;