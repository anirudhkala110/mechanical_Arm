import React from 'react'

const Home = () => {
    return (
        <div className='min-vh-100' style={{ height: '500vh' }}>
            <div className='sideBar' style={{ width: '250px', minHeight: '600px', borderRight: "1px solid rgba(0, 0, 0, 0.22)", minHeight: "600px", boxShadow: "rgba(0, 0, 0, 0.22) 1px -4px 5px 1px" }}>

            </div>
            <button className='sideBarButton btn btn-primary' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2" style={{ position: 'fixed' }}>
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
                    <div class="offcanvas-body overflow-auto pb-1" style={{    maxHeight: "80vh"}}>
                        <div>
                            <button className='btn btn-info w-100 mb-2'>
                                Types
                            </button>
                            <ol>
                                <li className='subList px-2 py-1 px-2'>Army Mechanical Arms</li>
                                <li className='subList px-2 py-1 px-2'>Medical Mechanical Arms</li>
                                <li className='subList px-2 py-1 px-2'>School Mechanical Arms</li>
                                <li className='subList px-2 py-1 px-2'>Construction Mechanical Arms</li>
                                <li className='subList px-2 py-1 px-2'>Automobile Mechanical Arms</li>
                                <li className='subList px-2 py-1 px-2'>Mechanical Arms for Mechanics</li>
                            </ol>
                        </div>
                        <div>
                            <button className='btn btn-info w-100 mb-2'>
                                Locations
                            </button>
                            <ol>
                                <li className='subList px-2 py-1 px-2'>Delhi</li>
                                <li className='subList px-2 py-1 px-2'>Mumbai</li>
                                <li className='subList px-2 py-1 px-2'>Chandighar</li>
                                <li className='subList px-2 py-1 px-2'>Maharastra</li>
                                <li className='subList px-2 py-1 px-2'>Goa</li>
                                <li className='subList px-2 py-1 px-2'>Uttarakhand</li>
                            </ol>
                        </div>
                        <div>
                            <button className='btn btn-info w-100 mb-2'>
                                Sortby
                            </button>
                            <ol>
                                <li className='subList px-2 py-1 px-2'>A-Z</li>
                                <li className='subList px-2 py-1 px-2'>Z-A</li>
                                <li className='subList px-2 py-1 px-2'>Type</li>
                                <li className='subList px-2 py-1 px-2'>Latest First</li>
                                <li className='subList px-2 py-1 px-2'>Location</li>
                                <li className='subList px-2 py-1 px-2'>Price</li>
                            </ol>
                        </div>
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
    )
}

export default Home