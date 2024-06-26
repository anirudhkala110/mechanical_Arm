import React from 'react';
import { Link } from 'react-router-dom';
// import './Contact.css'

const Contact = () => {
    const data = 10;
    const userName = 'Anirudh Kala'
    const phone = 7668490213
    const address = 'Delhi'
    const email = 'anirudhkala110@gmail.com'
    // Create an array of length 'data' for iteration
    const shopKeepers = Array.from({ length: data }, (_, index) => index + 1);
    console.log(shopKeepers)

    return (
        <div className='min-vh-100'>
            <div className='container pt-3'>
                {/* Details of the ShopKeepers with contact number */}
                <center className='alert alert-info rounded-0 fs-4 fw-semibold'>Seller Partner</center>
                <div className='container row'>
                    {shopKeepers.map((index) => (
                        <div className='col-sm-12  col-lg-4 col-md-6 col-xl-4 col-xxl-3 p-2 '>
                            <Link to={`/contact-detail/${userName}/${phone}/${email}/${address}`} className='text-decoration-none '>
                                <div class="butn-container-2 hoverContactList ">
                                    <div class="mas">
                                        <ul key={index} className=' card border-0 py-2 ps-2' style={{ listStyle: 'none' }}>
                                            <li>Name : {userName}</li>
                                            <li>Contact No. : {phone}</li>
                                            <li>Address : {address}</li>
                                            <li>Email ID: {email}</li>
                                        </ul>
                                    </div>
                                    {/* <div type="button" name="Hover">
                                        <ul key={index} className=' card border-0 py-2 ps-2' style={{ listStyle: 'none' }}>
                                            <li>Name : {userName}</li>
                                            <li>Contact Number : {phone}</li>
                                            <li>Address : {address}</li>
                                            <li>Email ID: {email}</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </Link>
                            {/* <hr /> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
