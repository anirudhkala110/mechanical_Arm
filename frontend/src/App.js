import { createContext, useState } from 'react';
import './App.css';
import Navbar from './Utils/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageNoteFound from './Utils/PageNoteFound';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Details from './Components/Products/Details';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Support from './Components/Support/Support';
import Profile from './Components/Admin/Profile/Profile';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import DashBoard from './Components/Admin/Dashboard/DashBoard';

export const userContext = createContext()

function App() {
  const [admin, setAdmin] = useState("Admin")
  return (
    <>
      <div className='' style={{ minWidth: "350px" }}>
        <userContext.Provider value={admin}>
          <div className='pt-5 mt-2'>
            <Router>
              <div className='navbar-fixed-top navbar-inverse'>
                <Navbar />
              </div>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/all-products' element={<Products />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact-us' element={<Contact />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/support' element={<Support />} />
                <Route exact path='/profile/:user' element={<Profile />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/dashboard' element={<DashBoard />} />
  <Route exact path='/detail/:id/:machineName/:location/:uploadedBy' element={<Details />} />

                <Route path='*' element={<PageNoteFound />} />
              </Routes>
            </Router>
          </div>
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
