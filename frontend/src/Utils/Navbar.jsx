import React, { useContext } from 'react'
import {userContext} from '../App'
const Navbar = () => {
    const admin = useContext(userContext)

    return (
        <nav class="navbar w-100 border m-0">
            <div class="d-flex w-100 justify-content-between align-items-center px-2">
                <div className='text-white'>Theme/Logo</div>
                <div className='text-white py-1 adminTag'>{admin}</div>
                <div className='show1000px'>
                    <button className='btn btn-primary mx-1'>About</button>
                    <button className='btn btn-primary mx-1'>Contact</button>
                    <button className='btn btn-primary mx-1'>Services</button>
                    <button className='btn btn-primary mx-1'>Support</button>
                </div>
                <div className='less1000px'>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i class="bi bi-list-nested"></i>
                    </button>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Logo</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body border" style={{ minHeight: "500px" }}>
                            <div className='btn btn-primary my-1 w-100 rounded-0 border'>About</div>
                            <div className='btn btn-primary my-1 w-100 rounded-0 border'>Contact</div>
                            <div className='btn btn-primary my-1 w-100 rounded-0 border'>Services</div>
                            <div className='btn btn-primary my-1 w-100 rounded-0 border'>Support</div>
                            <div className='btn btn-primary my-1 w-100 rounded-0 border'>Profile</div>
                            <div className='btn btn-primary my-1 w-100 rounded-0 border'>Dashboard</div>
                            <div className='w-50 btn btn-success rounded-0 border'>Login</div>
                            <div className='w-50 btn btn-info rounded-0 border'>Sign Up</div>
                            {/* <div class="dropdown mt-3">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                    Dropdown button
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar