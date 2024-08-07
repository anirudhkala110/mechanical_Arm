import { createContext, useEffect, useState } from 'react';
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
import Footer from './Utils/Footer';
import JoinUs from './Images/JoinUs.jpg'
import ContactDetails from './Components/Contact/ContactDetails';
import UpdatedProfile from './Components/Admin/Profile/UpdatedProfile';
import axios from 'axios';

export const userContext = createContext()

function App() {
  const [admin, setAdmin] = useState()
  const [logedIn, setLogedIn] = useState(false)
  const [userLoginData, setUseLoginData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5020/loggin')
      .then(res => {
        // console.log(res)
        setUseLoginData(res.data)
        if (res.data.role === 'Admin')
          setAdmin(true)
        setLogedIn(res.data.login)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <>
      <div className='' style={{ minWidth: "350px" }}>
        <userContext.Provider value={userLoginData}>
          <Router>
            <div className='navbar-fixed-top text-black'>
              <Navbar />
            </div>
            <div className='pt-5 mt-2'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/all-products' element={<Products />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact-us' element={<Contact />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/support' element={<Support />} />
                <Route exact path='/profile/:user' element={logedIn ? <Profile /> : <Login />} />
                <Route exact path='/profile/updated' element={logedIn ? <UpdatedProfile /> : <Login />} />
                <Route exact path='/login' element={logedIn ? <Home /> : <Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/Registerpage' element={<Register />} />
                <Route exact path='/dashboard' element={logedIn ? <DashBoard /> : <Login />} />
                <Route exact path='/detail/:id/:machineName/:location/:uploadedBy' element={<Details />} />
                <Route exact path='/contact-detail/:userName/:phone/:email/:address' element={<ContactDetails />} />
                <Route path='*' element={<PageNoteFound />} />
              </Routes>
            </div>
            <div className='navbar-dark bg-black rounded-0 px-5 d-flex align-items-center' style={{ minHeight: '50px' }}>
              {/* <div className='navbar-inverse rounded-0' style={{ minHeight: '50px' }}> */}
              {/* <div className='navbar-fixed-bottom navbar-inverse'> */}
              <Footer />
            </div>
          </Router>
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;