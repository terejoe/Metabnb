import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
