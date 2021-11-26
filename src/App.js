import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Work />
    </div>
  );
}

export default App;
