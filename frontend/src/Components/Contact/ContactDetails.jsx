import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ContactDetails = () => {
    const { name, phone, email, address } = useParams()
    return (
        <div className='min-vh-100'>
            <div className='container pt-2'>
                {/* Details of the ShopKeepers with contact number */}
                <center className='alert alert-info rounded-0 fs-4 fw-semibold'>Owners Details</center>
                <div className='container'>
                    <ul className='card p-3' style={{ listStyle: 'none' }}>
                        <li>Name : Anirudh Kala || {name}</li>
                        <li>Contact Number : 7668490213 || {phone}</li>
                        <li>Address : Delhi || {address}</li>
                        <li>Email ID: anirudhkala110@gmail.com || {email}</li>
                    </ul>
                    <Link to='/contact-us' className='btn rounded-0 btn-primary'>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails