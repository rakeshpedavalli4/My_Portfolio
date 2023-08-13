import About from './components/About';
import Contacts from './components/contacts';
import Header from './components/Header';
import Projects from './components/projects';
import Skills from './components/Skills';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    
    <Router>
    <nav>
      <div className='LinkContainer'>
      <div className="name"><h1>Rakesh Chowdary Pedavalli</h1></div>
      </div>
      <div className='Nav'>
        <Link to ='/'>Home</Link>
        <Link to ='/Skills'>Skills</Link>
        <Link to ='/Projects'>Projects</Link>
        <Link to ='/Contact'>Contact</Link>
        <Link to ='/About'>About</Link>
        </div>
    </nav>
      <Routes>
        <Route path='/' exact element={<Header/>}></Route>
        <Route path='/Projects'  element={<Projects/>}></Route>
        <Route path='/Contact'  element={<Contacts/>}></Route>
        <Route path='/About'  element={<About/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
