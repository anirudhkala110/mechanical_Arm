import React from 'react'

const Home = () => {
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
                <button className='sideBarButton btn btn-primary' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2" style={{ position: 'fixed',zIndex:'100' }}>
                    <i class="bi bi-arrow-left-right fw-bolder fs-5"></i>
                </button>
                <div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Content</h5>
                            <button type="button" class="btn-close text-reset fs-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
            <div className='mainBasev ms-1 bg-white border'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3'>
                        data
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3'>
                        data
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3'>
                        data
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3'>
                        data
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home