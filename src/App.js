import './App.css';
import {Routes, Route} from "react-router-dom"
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
