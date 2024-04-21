import { createContext, useState } from 'react';
import './App.css';
import Navbar from './Utils/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageNoteFound from './Utils/PageNoteFound';
import Home from './Components/Home';

export const userContext = createContext()

function App() {
  const [admin, setAdmin] = useState("Admin")
  return (
    <>
      <div className='' style={{ minWidth: "350px" }}>
        <userContext.Provider value={admin}>
          <div className='navbar-fixed-top navbar-inverse'>
            <Navbar />
          </div>
          <div className='pt-5 mt-2'>
            <Router>
              <Routes>
                <Route exact path='/' element={<Home />} />
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
