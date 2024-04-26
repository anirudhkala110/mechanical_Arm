import React, { useContext } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, a, useNavigate, NavLink } from 'react-router-dom';
import logo from '../Images/Logo.jpg'

const Navbar = () => {
    const admin = useContext(userContext);
    const navigate = useNavigate()
    const handleRoute = (route) => {
        navigate(`/${route}`)
    }

    return (
        <nav className="navbar w-100 shadow rounded-0" id='sidebar' style={{ background: 'rgb(255 255 255 / 90%)', borderBottom: '0px solid' }}>
            <div className="d-flex w-100 justify-content-between align-items-center px-5 mx-2">
                <a href='/' className='text-decoration-none text-warning d-flex align-items-center' >
                    <img src={logo} width={40} className='rounded-2' />
                    &nbsp;
                    <strong style={{ filter: 'drop-shadow(1px 1px 1px #296192)' }}>RoboShop</strong>
                </a>
                <div className='show1000px'>
                    <div className='d-flex fw-semibold'>
                        <button className='fw-semibold btn px-2 py-1 adminTag'>{admin.user}</button>
                        <NavLink to='/'>
                            <button className="btn btnHover fw-bold " type="button" >
                                {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                Home
                            </button>
                        </NavLink>
                        <NavLink to='/all-products'>
                            <button className="btn btnHover fw-bold " type="button" >
                                {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                Products
                            </button>
                        </NavLink>
                        {/* q */}
                        <div className="dropdown mx-1">
                            <button className="btn btnHover fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                {/* <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"> */}
                                Technical
                            </button>
                            <ul className="dropdown-menu p-0 rounded-0" aria-labelledby="dropdownMenuButton1">
                                <NavLink to='/about'><button className='btn rounded-0 technicalDropDownbtn' style={{ width: '100%' }}>About</button></NavLink>
                                <NavLink to='/contact-us'><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Contact</button></NavLink>
                                <NavLink to='/services'> <button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Services</button></NavLink>
                                <NavLink to="/support"><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Support</button></NavLink>
                            </ul>
                        </div>
                        <div className="dropleft btn-group mx-1">
                            <button className="btn btnHover fw-bold dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                {/* <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"> */}
                                Account
                            </button>
                            <ul className="dropdown-menu p-0 rounded-0" aria-labelledby="dropdownMenuButton">
                                <NavLink to={`/profile/${admin}`}><button className='btn rounded-0 technicalDropDownbtn' style={{ width: '100%' }}>Profile</button></NavLink>
                                {/* <button className='btn btn-primary mt-1' style={{ width: '100%' }}>Dashboard</button> */}
                                <NavLink to="/login"><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Login</button></NavLink>
                                <NavLink to='/register'><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Sign Up</button></NavLink>
                                <button className='btn btn-danger rounded-0' style={{ width: '100%' }}>Logout</button>
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
                        <NavLink to='/' className="btn  my-1 w-100 rounded-0 linkTabs" type="button" >Home</NavLink>
                        <NavLink to='/about' className='btn  my-1 w-100 rounded-0 linkTabs'>About</NavLink>
                        <NavLink to='/contact-us' className='btn  my-1 w-100 rounded-0 linkTabs'>Contact</NavLink>
                        <NavLink to='/all-products' className="btn  my-1 w-100 rounded-0 linkTabs" type="button" >Products</NavLink>
                        <NavLink to='/services' className='btn  my-1 w-100 rounded-0 linkTabs'>Services</NavLink>
                        <NavLink to={`/profile/${admin}`} className='btn  my-1 w-100 rounded-0 linkTabs'>Profile</NavLink>
                        <NavLink to='/dashboard' className='btn  my-1 w-100 rounded-0 linkTabs'>Dashboard</NavLink>
                        <NavLink to='/login' className='w-100 btn my-1 rounded-0 linkTabs'>Login</NavLink>
                        <NavLink to='/register' className='w-100 btn my-1  rounded-0 linkTabs'>Sign Up</NavLink>
                        <NavLink to='/home' className='w-100 btn my-1 rounded-0 linkTabs'>Logout</NavLink>
                        <NavLink to='/support' className='btn my-1 w-100 rounded-0 linkTabs'>Support</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
