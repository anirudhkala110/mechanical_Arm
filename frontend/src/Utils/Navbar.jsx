import React, { useContext } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const admin = useContext(userContext);
    const navigate = useNavigate()
    const handleRoute = (route) => {
        navigate(`/${route}`)
    }

    return (
        <nav className="navbar w-100 m-0">
            <div className="d-flex w-100 justify-content-between align-items-center px-5 mx-2">
                <div className='text-white'>Theme/Logo</div>
                <div className='show1000px'>
                    <div className='d-flex'>
                        <div className='text-white py-1 adminTag'>{admin}</div>
                        <Link to='/'>
                            <button className="btn btn-primary ms-2 " type="button" >
                                Home
                            </button>
                        </Link>
                        <Link to='/all-products'>
                            <button className="btn btn-primary ms-2 " type="button" >
                                Products
                            </button>
                        </Link>
                        {/* q */}
                        <div className="dropdown mx-1">
                            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                Technical
                            </button>
                            <ul className="dropdown-menu px-1" aria-labelledby="dropdownMenuButton1">
                                <Link to='/about'><button className='btn btn-primary mt-1' style={{ width: '100%' }}>About</button></Link>
                                <Link to='/contact-us'><button className='btn btn-primary mt-1' style={{ width: '100%' }}>Contact</button></Link>
                                <Link to='/services'> <button className='btn btn-primary mt-1' style={{ width: '100%' }}>Services</button></Link>
                                <Link to="/support"><button className='btn btn-primary mt-1' style={{ width: '100%' }}>Support</button></Link>
                            </ul>
                        </div>
                        <div className="dropleft btn-group mx-1">
                            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                Account
                            </button>
                            <ul className="dropdown-menu px-1" aria-labelledby="dropdownMenuButton">
                                <Link to={`/profile/${admin}`}><button className='btn btn-primary mt-1' style={{ width: '100%' }}>Profile</button></Link>
                                {/* <button className='btn btn-primary mt-1' style={{ width: '100%' }}>Dashboard</button> */}
                                <Link to="/login"><button className='btn btn-success mt-1' style={{ width: '100%' }}>Login</button></Link>
                                <Link to='/register'><button className='btn btn-info mt-1' style={{ width: '100%' }}>Sign Up</button></Link>
                                <button className='btn btn-danger mt-1' style={{ width: '100%' }}>Logout</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='less1000px'>
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i className="bi bi-list-nested"></i>
                    </button>
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Logo</h5>
                        <button type="button" className="btn-close text-reset text-dark fs-3 fw-bolder" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr />
                    <div className="offcanvas-body " style={{ minHeight: "500px" }}>
                        <Link to='/about' className='btn btn-primary my-1 w-100 rounded-0 border'>About</Link>
                        <Link to='/contact-us' className='btn btn-primary my-1 w-100 rounded-0 border'>Contact</Link>
                        <Link to='/services' className='btn btn-primary my-1 w-100 rounded-0 border'>Services</Link>
                        <Link to={`/profile/${admin}`} className='btn btn-primary my-1 w-100 rounded-0 border'>Profile</Link>
                        <Link to='/dashboard' className='btn btn-primary my-1 w-100 rounded-0 border'>Dashboard</Link>
                        <Link to='/login' className='w-50 btn btn-success rounded-0 border'>Login</Link>
                        <Link to='/register' className='w-50 btn btn-info rounded-0 border'>Sign Up</Link>
                        <Link to='' className='w-50 btn btn-danger rounded-0 border'>Logout</Link>
                        <Link to='/support' className='btn btn-warning my-1 w-50 rounded-0 border'>Support</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
