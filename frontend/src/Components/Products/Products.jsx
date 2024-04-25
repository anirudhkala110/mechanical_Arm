import React, { useEffect, useState } from 'react'
import arm1 from '../../Images/Arm1.jpeg'
import arm2 from '../../Images/arm2.jpeg'
import arm3 from '../../Images/arm3.jpeg'
import arm4 from '../../Images/arm4.jpeg'
import arm5 from '../../Images/arm5.jpeg'

import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const data0 = [
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm1 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm2 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm3 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm4 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm5 }
]
const Products = () => {
    useEffect(() => {
        AOS.init({ duration: 100 })
    }, [])
    const [Str, setStr] = useState('Robotic arms, also known as robotic manipulators or robot arms, are mechanical devices designed to mimic the functionality of human arms. These versatile tools are utilized across various industries and applications, ranging from manufacturing and assembly lines to space exploration and healthcare. At their core, robotic arms consist of several key components, including the manipulator, joints, end effector, and actuators.')
    function truncate(str, size) {
        let stringUpdated = ''
        if (str.lenght <= size) {
            stringUpdated = str
        }
        else {
            stringUpdated = str.slice(0, size) + '...'
        }
        return stringUpdated
    }
    return (
        <div className='min-vh-100 d-flex justify-content-start align-items-start'>
            <div>
                <div className='sideBar p-2' style={{ width: '200px', minHeight: '600px', borderRight: "1px solid rgba(0, 0, 0, 0.22)", minHeight: "600px", boxShadow: "rgba(0, 0, 0, 0) 1px -4px 5px 1px" }}>
                    <div className='mb-3'>
                        <center className='fs-4 fw-bold'>Content</center>
                    </div>
                    <hr />
                    <div>
                        <button className='btn btn-info w-100 mb-2'>
                            Types
                        </button>
                        <ul className='ps-0' style={{ listStyle: 'none' }}>
                            <li className='subList  py-1 ps-3  '>Army  <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Medical  <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>School  <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Construction  <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '>Automobile  <i class="bi bi-arrow-right-short"></i></li>
                            <li className='subList  py-1 ps-3  '> for Mechanics <i class="bi bi-arrow-right-short"></i></li>
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
                                    <li className='subList  py-1 ps-3  '>Army </li>
                                    <li className='subList  py-1 ps-3  '>Medical </li>
                                    <li className='subList  py-1 ps-3  '>School </li>
                                    <li className='subList  py-1 ps-3  '>Construction </li>
                                    <li className='subList  py-1 ps-3  '>Automobile </li>
                                    <li className='subList  py-1 ps-3  '> for Mechanics</li>
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
                <div className='p-2'>
                    {
                        data0.map((data, id) =>
                        (<div className=' py-2 rounded-0 d-flex justify-content-center col-sm-12 col-md-6 col-lg-6 col-xl-4' key={id}>
                            {/* (<div className='col-sm-12 py-2 rounded-0 d-flex justify-content-center col-md-6 col-lg-6 col-xl-4 col-xxl-3' key={id}> */}
                            <div className='d-flex w-100 justify-content-center productSample border '>
                                <div class="hover14 w-100">
                                    <div className='w-100'>
                                        <figure className='rounded-0 bg-body-secondary w-100'>
                                            {data.img ? <img className='w-100' src={data.img} style={{ minHeight: '400px' }} /> : <center className="loadingBase"><strong className='fs-3 fw-semibold'>Loading. . .</strong></center>}
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
                                    <hr />
                                    <div className="ms-0 ps-2">
                                        <button className='px-2 rounded-circle bg-success text-white' style={{ marginLeft: '0px', fontSize: '12px' }}>{id + 1}</button>
                                        <ul className='ps-4' style={{ listStyle: 'none' }}>
                                            <li className=''><strong>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </strong>{data.machineName}</li>
                                            <li className=''><strong>Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>{data.location}</li>
                                            <li className=''><strong>Uploaded By&nbsp;&nbsp;&nbsp;: </strong>{data.uploadedBy}</li>
                                            <p>{truncate(Str, 100)}</p>
                                            {/* <p>The manipulator forms the main body of the robotic arm, often comprising multiple segments connected by joints. These joints serve as points of articulation, enabling different degrees of freedom and motion. The end effector, attached to the arm's end, performs specific tasks and can vary widely depending on the application. It may include grippers, welding torches, cameras, or sensors. Actuators, such as electric, hydraulic, or pneumatic mechanisms, provide motion to the arm's joints, allowing it to execute precise movements.</p> */}

                                            <a href={`/detail/${id}/${data.machineName}/${data.location}/${data.uploadedBy}`}> <button className='btn btn-info'>More . . .</button></a>

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
