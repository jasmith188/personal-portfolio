import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Resume />
      <Work />
    </div>
  );
}

export default App;
