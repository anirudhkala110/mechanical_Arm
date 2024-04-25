import React, { useContext } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, a, useNavigate } from 'react-router-dom';
import logo from '../Images/Logo.jpg'

const Navbar = () => {
    const admin = useContext(userContext);
    const navigate = useNavigate()
    const handleRoute = (route) => {
        navigate(`/${route}`)
    }

    return (
        <nav className="navbar w-100 shadow rounded-0" style={{background:'#ffffffbf',borderBottom:'0px solid'}}>
            <div className="d-flex w-100 justify-content-between align-items-center px-5 mx-2">
                <a href='/' className='text-decoration-none text-warning d-flex align-items-center' >
                    <img src={logo} width={40} className='rounded-2' />
                    &nbsp;
                    <strong style={{filter:'drop-shadow(1px 1px 1px #296192)'}}>RoboShop</strong>
                </a>
                <div className='show1000px'>
                    <div className='d-flex'>
                        <button className='fw-semibold btn px-2 py-1 adminTag'>{admin}</button>
                        <a href='/'>
                            <button className="btn btnHover ms-2 " type="button" >
                            {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                Home
                            </button>
                        </a>
                        <a href='/all-products'>
                            <button className="btn btnHover ms-2 " type="button" >
                            {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                Products
                            </button>
                        </a>
                        {/* q */}
                        <div className="dropdown mx-1">
                            <button className="btn btnHover dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                            {/* <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"> */}
                                Technical
                            </button>
                            <ul className="dropdown-menu px-1" aria-labelledby="dropdownMenuButton1">
                                <a href='/about'><button className='btn btn-primary mt-1' style={{ width: '100%' }}>About</button></a>
                                <a href='/contact-us'><button className='btn btn-primary mt-1' style={{ width: '100%' }}>Contact</button></a>
                                <a href='/services'> <button className='btn btn-primary mt-1' style={{ width: '100%' }}>Services</button></a>
                                <a href="/support"><button className='btn btn-primary mt-1' style={{ width: '100%' }}>Support</button></a>
                            </ul>
                        </div>
                        <div className="dropleft btn-group mx-1">
                            <button className="btn btnHover dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            {/* <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"> */}
                                Account
                            </button>
                            <ul className="dropdown-menu px-1" aria-labelledby="dropdownMenuButton">
                                <a href={`/profile/${admin}`}><button className='btn btn-primary mt-1' style={{ width: '100%' }}>Profile</button></a>
                                {/* <button className='btn btn-primary mt-1' style={{ width: '100%' }}>Dashboard</button> */}
                                <a href="/login"><button className='btn btn-success mt-1' style={{ width: '100%' }}>Login</button></a>
                                <a href='/register'><button className='btn btn-info mt-1' style={{ width: '100%' }}>Sign Up</button></a>
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
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Logo</h5>
                        <button type="button" className="btn-close text-reset text-dark fs-3 fw-bolder" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr />
                    <div className="offcanvas-body " style={{ minHeight: "500px" }}>
                        <a href='/'><button className="btn btn-primary my-1 w-100 rounded-0 border" type="button" >Home</button></a>
                        <a href='/about' className='btn btn-primary my-1 w-100 rounded-0 border'>About</a>
                        <a href='/contact-us' className='btn btn-primary my-1 w-100 rounded-0 border'>Contact</a>
                        <a href='/all-products'><button className="btn btn-primary my-1 w-100 rounded-0 border" type="button" >Products</button></a>
                        <a href='/services' className='btn btn-primary my-1 w-100 rounded-0 border'>Services</a>
                        <a href={`/profile/${admin}`} className='btn btn-primary my-1 w-100 rounded-0 border'>Profile</a>
                        <a href='/dashboard' className='btn btn-primary my-1 w-100 rounded-0 border'>Dashboard</a>
                        <a href='/login' className='w-50 btn btn-success rounded-0 border'>Login</a>
                        <a href='/register' className='w-50 btn btn-info rounded-0 border'>Sign Up</a>
                        <a href='/home' className='w-50 btn btn-danger rounded-0 border'>Logout</a>
                        <a href='/support' className='btn btn-warning my-1 w-50 rounded-0 border'>Support</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
