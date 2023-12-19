import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  return (
   <>
    <Router>
     <NavBar/>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/contact' element={<Contact/>} />
         <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
    <Footer/>
   </>
  );
}

export default App;
