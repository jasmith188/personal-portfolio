import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
