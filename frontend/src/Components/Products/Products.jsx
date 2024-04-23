import React from 'react'
import arm1 from '../../Images/Arm1.jpeg'
import arm2 from '../../Images/arm2.jpeg'
import arm3 from '../../Images/arm3.jpeg'
import arm4 from '../../Images/arm4.jpeg'
import arm5 from '../../Images/arm5.jpeg'

import { Link } from 'react-router-dom'


const data0 = [
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm1 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm2 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm3 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm4 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm5 }
]
const Products = () => {
    return (
        <div className='min-vh-100 d-flex justify-content-start align-items-start'>
            <div>
                <div className='sideBar p-2' style={{ width: '300px', minHeight: '600px', borderRight: "1px solid rgba(0, 0, 0, 0.22)", minHeight: "600px", boxShadow: "rgba(0, 0, 0, 0.22) 1px -4px 5px 1px" }}>
                    <div className='mb-3'>
                        <center className='fs-4 fw-bold'>Content</center>
                    </div>
                    <hr />
                    <div>
                        <button className='btn btn-info w-100 mb-2'>
                            Types
                        </button>
                        <ul className='ps-0' style={{ listStyle: 'none' }}>
                            <li className='subList  py-1 ps-3  '>Army Mechanical Arms <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Medical Mechanical Arms <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>School Mechanical Arms <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Construction Mechanical Arms <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Automobile Mechanical Arms <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Mechanical Arms for Mechanics <i class="bi bi-arrow-right-short"></i></li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <button className='btn btn-info w-100 mb-2'>
                            Locations
                        </button>
                        <ul className='ps-0' style={{ listStyle: 'none' }}>
                            <li className='subList  py-1 ps-3  '>Delhi <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Mumbai <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Chandighar <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Maharastra <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Goa <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Uttarakhand <i class="bi bi-arrow-right-short"></i></li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <button className='btn btn-info w-100 mb-2'>
                            Sortby
                        </button>
                        <ul className='ps-0' style={{ listStyle: 'none' }}>
                            <li className='subList  py-1 ps-3  '>A-Z <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Z-A <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Type <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Latest First <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Location <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Price <i class="bi bi-arrow-right-short"></i></li>
                        </ul>
                    </div>
                    <hr />
                </div>
                <div className='sideBarButton'>
                    <button className=' btn btn-primary' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample" style={{ position: 'fixed', zIndex: '100' }}>
                        <i class="bi bi-arrow-left-right fw-bolder fs-5"></i>
                    </button>
                </div>
                <div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel" data-bs-dismiss="offcanvas">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Content</h5>
                            <button type="button" class="btn-close text-reset fs-3" aria-label="Close"></button>
                        </div>
                        <hr />
                        {/* <div class="offcanvas-body overflow-auto pb-4" style={{    maxHeight: "-webkit-fill-available"}}> */}
                        <div class="offcanvas-body overflow-auto pb-1" style={{ maxHeight: "80vh" }}>
                            <div>
                                <button className='btn btn-info w-100 mb-2'>
                                    Types
                                </button>
                                <ul className='ps-0' style={{ listStyle: 'none' }}>
                                    <li className='subList  py-1 ps-3  '>Army Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Medical Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>School Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Construction Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Automobile Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Mechanical Arms for Mechanics</li>
                                </ul>
                            </div>
                            <hr />
                            <div>
                                <button className='btn btn-info w-100 mb-2'>
                                    Locations
                                </button>
                                <ul className='ps-0' style={{ listStyle: 'none' }}>
                                    <li className='subList  py-1 ps-3  '>Delhi</li>
                                    <li className='subList  py-1 ps-3  '>Mumbai</li>
                                    <li className='subList  py-1 ps-3  '>Chandighar</li>
                                    <li className='subList  py-1 ps-3  '>Maharastra</li>
                                    <li className='subList  py-1 ps-3  '>Goa</li>
                                    <li className='subList  py-1 ps-3  '>Uttarakhand</li>
                                </ul>
                            </div>
                            <hr />
                            <div>
                                <button className='btn btn-info w-100 mb-2'>
                                    Sortby
                                </button>
                                <ul className='ps-0' style={{ listStyle: 'none' }}>
                                    <li className='subList  py-1 ps-3  '>A-Z</li>
                                    <li className='subList  py-1 ps-3  '>Z-A</li>
                                    <li className='subList  py-1 ps-3  '>Type</li>
                                    <li className='subList  py-1 ps-3  '>Latest First</li>
                                    <li className='subList  py-1 ps-3  '>Location</li>
                                    <li className='subList  py-1 ps-3  '>Price</li>
                                </ul>
                            </div>
                            <hr />
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
            <div className='mainBase ms-1 bg-white p-2'>
                <center className='fs-3 fw-semibold my-2 pb-2' style={{ position: '', zIndex: '100' }}>Products</center>
                <hr className='' />
                <div className='row p-2'>
                    {
                        data0.map((data, id) =>
                        (<div className='col-sm-12 py-2 rounded-3 d-flex justify-content-center col-md-6 col-lg-6 col-xl-4 col-xxl-3' key={id}>
                            <div className='d-flex w-100 justify-content-center productSample border '>
                                <div class="hover14 w-100">
                                    <div className='w-100'>
                                        <figure className='rounded bg-white w-100'>
                                            {data.img ? <img className='w-100' src={data.img} style={{minHeight:'200px'}} /> : <center className="loadingBase"><div className="wave"></div><div className="wave"></div><div className="wave"></div><div className="wave"></div><div className="wave"></div><div className="wave"></div><div className="wave"></div><div className="wave"></div><div className="wave"></div><div className="wave"></div></center>}
                                            <center className="loadingBase">
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                                <div className="wave"></div>
                                            </center>
                                        </figure>
                                    </div>
                                    <hr/>
                                    <div className="ms-0 ps-2 bg-white">
                                        <button className='px-2 rounded-circle bg-success text-white' style={{ marginLeft: '0px', fontSize: '12px' }}>{id + 1}</button>
                                        <ul className='ps-4' style={{ listStyle: 'none' }}>
                                            <li className='mb-1 py-1 ps-2 '><strong>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </strong>{data.machineName}</li>
                                            <li className='mb-1 py-1 ps-2 '><strong>Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>{data.location}</li>
                                            <li className='mb-1 py-1 ps-2 '><strong>Uploaded By&nbsp;&nbsp;&nbsp;: </strong>{data.uploadedBy}</li>


                                            <Link to={`/detail/${id}/${data.machineName}/${data.location}/${data.uploadedBy}`}> <button className='btn btn-info'>More . . .</button></Link>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
