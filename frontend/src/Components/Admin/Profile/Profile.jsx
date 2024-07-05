import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import axios from "axios"


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import UpdatedProfile from './UpdatedProfile';

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
]
const roles = ['Admin', 'Seller', 'Customer']
function Profile() {
    const userLoginData = useContext(userContext)
    const [name, setName] = useState()
    const [email, setEmail] = useState(userLoginData.email)
    const [password, setPassword] = useState()
    const [cpassword, setCpassword] = useState()
    const [alertMessage, setAlertMessage] = useState(null)
    const [alertColor, setAlertColor] = useState()
    const [State, setState] = useState('Andhra Pradesh')
    const [role, setRole] = useState('Seller')
    const [gstNo, setGSTin] = useState()
    const [addharNo, setAddharNo] = useState()
    const [addharCardpic, setAddharcardpic] = useState()
    const [shopName, setShopname] = useState()
    const [shopPic, setShopPic] = useState()
    const [village, setVillage] = useState()
    const [city, setCIty] = useState()
    const [zipCode, setZipCode] = useState()
    const [profilePic, setProfilePic] = useState()
    const [DLPan, setDLPan] = useState()
    const [shopLicense, setShopLicense] = useState()
    const [phone, setphone] = useState()
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState()
    const [login, setLogin] = useState(userLoginData.email !== '' || userLoginData.email !== null ? true : false)


    const HandleRegisterPage = (e) => {
        e.preventDefault();
        console.log(email, gstNo, addharNo, shopName, addharCardpic, profilePic, shopPic, DLPan, shopLicense);
        if (!email || email === '' || email === null) {
            setMsg('Register the Email First...')
            setMsg_type('error')
            return
        }
        else if (!gstNo || gstNo === '' || gstNo === null) {
            setMsg('Enter the GST No. please...')
            setMsg_type('error')
            return
        }
        else if (!addharNo || addharNo === '' || addharNo === null) {
            setMsg('Enter the Addhar Card No. please...')
            setMsg_type('error')
            return
        }
        else if (!shopName || shopName === '' || shopName === null) {
            setMsg('Enter the Shop Name please...')
            setMsg_type('error')
            return
        }
        else if (!addharCardpic || addharCardpic === '' || addharCardpic === null) {
            setMsg('Select the Addhar Card Image  please...')
            setMsg_type('error')
            return
        }
        else if (!profilePic || profilePic === '' || profilePic === null) {
            setMsg('Select the Profile Picture  please...')
            setMsg_type('error')
            return
        }
        else if (!shopPic || shopPic === '' || shopPic === null) {
            setMsg('Select the Shop Picture  please...')
            setMsg_type('error')
            return
        }
        else if (!DLPan || DLPan === '' || DLPan === null) {
            setMsg('Select the Driving License or PAN Card Picture  please...')
            setMsg_type('error')
            return
        }
        else if (!shopLicense || shopLicense === '' || shopLicense === null) {
            setMsg('Select the Shpo License Picture  please...')
            setMsg_type('error')
            return
        }

        // if (email && gstNo && addharNo && shopName && addharCardpic && profilePic && shopPic && DLPan && shopLicense)
        else {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('gstNo', gstNo);
            formData.append('addhar', addharNo);
            formData.append('shopName', shopName);
            formData.append('addharCardpic', addharCardpic);
            formData.append('shopPic', shopPic);
            formData.append('DLPan', DLPan);
            formData.append('shopLicense', shopLicense);

            axios.post('http://localhost:5020/upload_pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log(res);
                    setMsg(res.data.msg);
                    setMsg_type(res.data.msg_type);
                    if (res.data.msg_type === 'good') {
                        window.location.href = '/profile/updated'
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    const [disableEmail, setDisableEmail] = useState(false)
    const [verified, setVerified] = useState(false)
    const [otpSent, setOtpSent] = useState(true)
    const [OTP, setOTP] = useState()
    // console.log(userLoginData)

    const handleAddarNo = (e) => {
        if (e.target.value.length <= 12) {
            setAddharNo(e.target.value)
        }
        else {
            return
        }
    }
    useEffect(() => {
        if (userLoginData.verified) {
            window.location.href = '/profile/updated'
        }
    })
    return (
        <>
            <MDBContainer fluid className='min-vh-100'>

                <MDBCard className='text-black m-5' style={{ borderRadius: '' }}>
                    <MDBCardBody>
                        <center><p classNAme="text-center  fw-bold mb-5 mx-1 mx-md-4 mt-4 " style={{ fontSize: '40px', fontWeight: '500' }}>Welcome to <strong style={{ color: '#ffc107' }}>RoboShop</strong></p></center>
                        <center><p classNAme="text-center fs-3 fw-bold mb-5 mx-1 mx-md-4 mt-4  " style={{ fontSize: '', fontWeight: '900' }}>Please Update the Data for Enabling your services...</p></center>
                        <center><div className={`alert ${msg_type === 'error' ? 'alert-danger text-danger fw-bolder' : 'alert-success'}`}>{msg}</div></center>
                        <hr />
                        <MDBRow className='d-flex justify-content-center'>
                            {
                                login ?
                                    <MDBCol md='12' lg='12' className='order-2 order-lg-1 d-flex flex-column align-items-center' style={{ maxWidth: '500px' }}>
                                        <div className='input-group my-2'>
                                            <label>Email <sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' value={userLoginData.email} disabled />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>GST Number<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' onChange={e => setGSTin(e.target.value)} />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>Addhar Card Number<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='number' value={addharNo} onChange={handleAddarNo} />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>Addhar Card Image<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='file' onChange={e => setAddharcardpic(e.target.files[0])} />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>Shop Name<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' onChange={e => setShopname(e.target.value)} />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>Shop Image with you<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='file' onChange={e => setShopPic(e.target.files[0])} />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>Driving License or PAN Card<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='file' onChange={e => setDLPan(e.target.files[0])} />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>Shop License<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='file' onChange={e => setShopLicense(e.target.files[0])} />
                                        </div>
                                        <div className='input-group my-2'>
                                            <label>Profile Picture<sup className='text-danger'>*</sup></label>
                                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='file' onChange={e => setProfilePic(e.target.files[0])} />
                                        </div>
                                        {/* <div className='mb-4'>
<MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
</div> */}
                                        <button className='btn mt-2 btn-primary w-100' size='' onClick={HandleRegisterPage}>Upload</button>
                                    </MDBCol> : <div>
                                        <div className='alert alert-danger fs-1 fw-bolder'>
                                            You are Not Authorized
                                        </div>
                                    </div>
                            }
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
            <UpdatedProfile />
        </>
    )
}




export default Profile