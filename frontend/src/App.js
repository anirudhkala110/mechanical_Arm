import { createContext, useState } from 'react';
import './App.css';
import Navbar from './Utils/Navbar';

export const userContext = createContext()

function App() {
  const [admin,setAdmin] = useState("Admin")
  return (
    <>
      <div className='' style={{ minWidth: "350px" }}>
        <userContext.Provider value={admin}>
          <div className='navbar-fixed-top navbar-inverse'>
            <Navbar />
          </div>
          <div className='pt-5 mt-2'>
            asdfawedfawedfaWedf
          </div>
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
