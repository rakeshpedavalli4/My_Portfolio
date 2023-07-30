import About from './components/About';
import Contacts from './components/contacts';
import Header from './components/Header';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Projects />
      <Contacts/>
      <About />
    </div>
  );
}

export default App;
