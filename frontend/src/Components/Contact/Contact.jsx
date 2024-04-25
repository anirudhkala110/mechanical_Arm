import React from 'react';

const Contact = () => {
    const data = 10;

    // Create an array of length 'data' for iteration
    const shopKeepers = Array.from({ length: data }, (_, index) => index + 1);
    console.log(shopKeepers)

    return (
        <div>
            <div>
                {/* Details of the ShopKeepers with contact number */}
                <center className='alert alert-info rounded-0 fs-4 fw-semibold'>Contact Owners</center>
                {shopKeepers.map((index) => (
                    <ul key={index} style={{ listStyle: 'none' }}>{index}
                        <li>Name : Anirudh Kala</li>
                        <li>Contact Number : 7668490213</li>
                        <li>Address : Delhi</li>
                        <hr />
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Contact;
