import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import Services from './screens/Services';
import Contact from './screens/Contact';
import Career from './screens/Career';
import AboutUs from './screens/AboutUs';
import Footer from './components/Footer';
import OurTeam from './screens/OurTeam';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/career' element={<Career />}></Route>
            <Route exact path='/ourTeam' element={<OurTeam />}></Route>
            <Route exact path='/aboutUs' element={<AboutUs />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
