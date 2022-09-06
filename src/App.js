import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Banner from './components/banner';
import About from './components/about';
import Rooms from './components/rooms';
import Facilities from './components/facilities';
import Gallery from './components/gallery';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarFirst from './components/NavbarFirst';
import check from './components/check'
import Popup from './components/check';
import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import roomform from './components/roomform'
import Roomform from './components/roomform';
import Login from './components/login'
import Sign from './components/sign';
import Forgot from './components/forgot';
import Roomfrm from './components/roomfrm'
import Suiteroom from './components/suiteroom';

import {collection, getDocs} from 'firebase/firestore'

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    
  })

  return (
    <div className="App">

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="roomform" element={<Roomform />} />
          <Route path="roomfrm" element={<Roomfrm />} />
          <Route path="suiteroom" element={<Suiteroom />} />
          <Route path="forgot" element={<Forgot />} />
        </Routes>

    </div>
  );
}

export default App;
