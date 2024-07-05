import React, { useEffect, useState } from 'react';
import axios from "axios"
import './LoadingAnimation.css'


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
import TypewriterEffect from '../Utils/TypeWriter';

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
function Register() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cpassword, setCpassword] = useState()
  const [alertMessage, setAlertMessage] = useState(null)
  const [alertColor, setAlertColor] = useState()
  const [State, setState] = useState('Andhra Pradesh')
  const [role, setRole] = useState('Seller')
  const [gstIn, setGSTin] = useState()
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

  const [notAdmin, setNotAdmin] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:5020/getAdmin')
      .then(res => {
        setNotAdmin(res.validation)
      })
      .catch(err => {
        console.log(err.code)
        console.log(err.message)
        console.log(err.name)
      })
    setInterval(() => {
      // setLoading(true)
    }, 1500)
  })

  const handleRetypePasswordChange = (e) => {
    setCpassword(e.target.value);
    const newPass = e.target.value
    const checker = password.slice(0, newPass.length)
    if (newPass.length === 0) {
      setAlertMessage(null);
    }
    else if (newPass === checker) {
      if (newPass.length === password.length) {
        setAlertMessage('Passwords match completely!');
      } else {
        setAlertMessage('Passwords match till now!');
      }
      setAlertColor('green');
    }
    else {
      setAlertMessage('Passwords do not match!');
      setAlertColor('red');
    }
  };

  const [phone, setphone] = useState()
  const [msg, setMsg] = useState()
  const [msg_type, setMsg_type] = useState()
  const [show1, setShow1] = useState(false)


  const HandleRegiserPage = (e) => {
    e.preventDefault()
    setLoading(true)
    if (!email || email === '' || email === null) {
      setMsg('Register the Email First...')
      setMsg_type('error')
      setLoading(false)
      return
    }
    else if (!phone || phone === '' || phone === null) {
      setMsg('Enter the Phone please...')
      setMsg_type('error')
      setLoading(false)
      return
    }
    else if (!name || name === '' || name === null) {
      setMsg('Enter your good name please...')
      setMsg_type('error')
      setLoading(false)
      return
    }
    else if (!village || village === '' || village === null) {
      setMsg('Enter the Village, Tehsil, Post office etc. please...')
      setMsg_type('error')
      setLoading(false)
      return
    }
    else if (!State || State === '' || State === null) {
      setMsg('Select the State  please...')
      setMsg_type('error')
      setLoading(false)
      return
    }
    else if (!profilePic || profilePic === '' || profilePic === null) {
      setMsg('Select the Profile Picture  please...')
      setMsg_type('error')
      setLoading(false)
      return
    }
    else if (!zipCode || zipCode === '' || zipCode === null) {
      setMsg('Enter the Pin Code please...')
      setMsg_type('error')
      setLoading(false)
      return
    }
    else {
      const formData = new FormData();
      formData.append('profilePic', profilePic)
      formData.append('username', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('cpassword', cpassword)
      formData.append('phone', phone)
      formData.append('role', role)
      formData.append('city', city)
      formData.append('state', State)
      formData.append('zipCode', zipCode)
      formData.append('village', village)

      // console.log(name, email, password, cpassword, village, city, State, zipCode, role, phone, gstIn, addharNo, addharCardpic, shopName, profilePic, shopPic, DLPan, shopLicense)
      axios.post('http://localhost:5020/register/email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          // console.log(res)
          setMsg(res.data.msg)
          setMsg_type(res.data.msg_type)
          setLoading(false)
        })
        .catch(err => {
          console.log(err.code)
          console.log(err.message)
          console.log(err.name)
          setLoading(false)
        })
    }

  }
  const [disableEmail, setDisableEmail] = useState(false)
  const [verified, setVerified] = useState(false)
  const [otpSent, setOtpSent] = useState(true)
  const [OTP, setOTP] = useState()


  const handleSendOTP = (e) => {
    e.preventDefault()
    setLoading(true)
    if (!email) {
      alert("Enter the Email First. . . ")
      setLoading(false)
      return
    }
    const Confirm = window.confirm("Are you sure About Email Address, Please Check Again. You will not be able to change it again...")
    if (Confirm && email) {
      axios.post('http://localhost:5020/verifyEmail', { email: email })
        .then(res => {
          // console.log(res.data)
          setOtpSent(false)
          setDisableEmail(true)
          setLoading(false)
        })
        .catch(err => {
          console.log(err.code)
          console.log(err.message)
          console.log(err.name)
          setLoading(false)
        })
    }
  }
  const handleVerifyOTP = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log("Handle Verify OTP")
    // const Confirm = window.confirm("Are you sure About Email Address, Please Check Again. You will not be able to change it again...")
    if (!OTP || OTP === '') {
      alert(`Enter OTP first sent on your email ${email}...`)
      setLoading(false)
    }
    else {
      axios.post('http://localhost:5020/verifyOTP', { email: email, OTP: OTP })
        .then(res => {
          setVerified(res.data.forwarding)
          setLoading(false)
        })
        .catch(err => {
          console.log(err.code)
          console.log(err.message)
          console.log(err.name)
          setLoading(false)
        }
        )
    }
  }
  const handleZip = (e) => {
    if (e.target.value.length <= 6) {
      setZipCode(e.target.value)
    }
    else {
      return
    }
  }
  const handleAddarNo = (e) => {
    if (e.target.value.length <= 12) {
      setAddharNo(e.target.value)
    }
    else {
      return
    }
  }
  
  return (
    <MDBContainer fluid className='min-vh-100'>

      <MDBCard className='text-black m-5' style={{ borderRadius: '' }} disabled>
        <MDBCardBody>
          <center><p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 " style={{ fontSize: '40px', fontWeight: '500' }}>Welcome to <strong style={{ color: '#ffc107' }}>RoboShop</strong></p></center>
          <hr />
          <MDBRow className='d-flex justify-content-center'>
            {
              verified ? <>
                {loading && <div className={`border p-3 d-flex align-items-center justify-content-center easeInOut`} style={{ cursor: 'progress', background: `${loading ? "gray" : ""}`, filter: '', opacity: '0.85', width: '100%', height: '-webkit-fill-available', position: 'absolute', zIndex: '100', left: '0' }}>
                  <h1 className='text-center p-2 text-white d-flex rounded-circle align-items-center justify-content-center' style={{ fontWeight: '', minHeight: '200px', minWidth: '200px', background: '', color: 'white', zIndex: '500' }}>
                    <div>
                      <div className='loadingAnimation'><b className='bi bi-arrow-repeat' style={{ fontSize: '80px', filter: 'drop-shadow(0px 0px 3px black)' }}></b></div>
                      <div className='' style={{ minHeight: '50px', filter: 'drop-shadow(0px 5px 3px black)' }}>Loading
                        {/* <TypewriterEffect texts={'⬆️'} typingSpeed={100} pauseDuration={10} /> */}
                      </div>
                    </div>
                  </h1>
                </div>}
                <MDBCol md='12' lg='12' className='order-2 order-lg-1 d-flex flex-column align-items-center' style={{ maxWidth: '500px' }}>
                  {msg && <center className={`alert ${msg_type === 'error' ? 'alert-danger' : 'alert-success'}`}>{msg}</center>}
                  <div className='input-group my-2'>
                    <label>Role</label>
                    <select className='form-select w-100' onChange={e => setRole(e.target.value)}>
                      {
                        roles.map((data, idx) => (
                          <option key={idx} value={data} selected={data === 'Seller' ? true : false} disabled={!notAdmin && data === 'Admin'}>{data}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='input-group my-2'>
                    <label>Profile Picture</label>
                    <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='file' onChange={e => setProfilePic(e.target.files[0])} />
                  </div>
                  <div className="input-group my-2 ">
                    <label>Your Name</label>
                    <input id='form1' type='text' className='w-100 form-control  rounded-0' onChange={e => setName(e.target.value)} />
                    {/* <MDBIcon fas icon="user me-3" size='lg' /> */}
                  </div>
                  <div className="input-group my-2">
                    <label>Entered Email</label>
                    {/* <MDBIcon fas icon="envelope me-3" size='lg' /> */}
                    <input className="w-100 form-control  rounded-0" label='Your Email' id='' type='email' value={email} disabled />
                  </div>
                  <div className="input-group my-2 ">
                    {/* <MDBIcon fas icon="lock me-3" size='lg' /> */}
                    <label>Password</label>
                    <div className='d-flex align-items-center w-100 form-control  rounded-0 rounded'>
                      <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 rounded-0 w-100" placeholder='Enter Password. . .' onChange={e => setPassword(e.target.value)} style={{ borderLeft: '0px', borderRight: '0px' }} />
                      {/* <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 rounded-0 w-100" placeholder='Enter Password. . .' onChange={e => setPassword(e.target.value)} style={{ borderLeft: '0px', borderRight: '0px' }} /> */}
                      {
                        show1 === true ?
                          <i class="bi bi-eye-slash-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                          : <i class="bi bi-eye-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                      }
                    </div>
                  </div>

                  <div className="input-group my-2 ">
                    {/* <MDBIcon fas icon="key me-3" size='lg' /> */}
                    <label>Retype Password</label>
                    <div className='d-flex align-items-center w-100 form-control  rounded-0 rounded'>
                      <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 w-100" placeholder='Enter Password. . .' onChange={handleRetypePasswordChange} style={{ borderLeft: '0px', borderRight: '0px' }} />
                      {/* <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 w-100" placeholder='Enter Password. . .' onChange={e => setRepeatpassword(e.target.value)} style={{ borderLeft: '0px', borderRight: '0px' }} /> */}
                      {
                        show1 === true ?
                          <i class="bi bi-eye-slash-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                          : <i class="bi bi-eye-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                      }
                    </div>
                    {alertMessage && <div style={{ color: alertColor }}>{alertMessage}</div>}

                  </div>
                  <div className="input-group my-2 ">
                    {/* <MDBIcon fas icon="envelope me-3" size='lg' /> */}
                    <label>Mobile Number</label>
                    <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='number' onChange={e => setphone(e.target.value)} />
                  </div>
                  <div className='input-group my-2'>
                    <label>Village</label>
                    <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' onChange={e => setVillage(e.target.value)} />
                  </div>
                  <div className='input-group my-2'>
                    <label>City</label>
                    <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' onChange={e => setCIty(e.target.value)} />
                  </div>
                  <div className='input-group my-2'>
                    <label>State</label>
                    <select className='form-select w-100' onChange={e => setState(e.target.value)}>
                      {
                        states.map((data, idx) => (
                          <option key={idx} value={data}>{data}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='input-group my-2'>
                    <label>Zip Code / Postal Code / Pin Code</label>
                    <input className="w-100 form-control  rounded-0" value={zipCode} label='Your Mobile Number' id='' type='number' onChange={handleZip} />
                  </div>
                  {/* <div className='mb-4'>
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
</div> */}
                  <button className='btn mt-2 btn-primary w-100' size='' onClick={HandleRegiserPage}>Register</button>
                  <div className='w-100 mt-2'>
                    <span>Already have an account? <a href="/login" className='text-decoration-none'>Login here</a></span>
                    <a href="/login"><button className='btn btn-info w-100'>Login</button></a>
                  </div>
                </MDBCol>
              </>

                :
                <div >
                  {loading && <div className={`border p-3 d-flex align-items-center justify-content-center `} style={{ cursor: 'progress', background: `${loading ? "gray" : ""}`, filter: '', opacity: '0.85', width: '100%', height: '-webkit-fill-available', position: 'absolute', zIndex: '100', left: '0' }}>
                    <h1 className='text-center p-2 text-white d-flex rounded-circle align-items-center justify-content-center' style={{ fontWeight: '', minHeight: '200px', minWidth: '200px', background: '', color: 'white', zIndex: '500' }}>
                      <div>
                        <div className='loadingAnimation'><b className='bi bi-arrow-repeat' style={{ fontSize: '80px', filter: 'drop-shadow(0px 0px 3px black)' }}></b></div>
                        <div className='' style={{ minHeight: '50px', filter: 'drop-shadow(0px 5px 3px black)' }}>Loading
                          {/* <TypewriterEffect texts={'⬆️'} typingSpeed={100} pauseDuration={10} /> */}
                        </div>
                      </div>
                    </h1>
                  </div>}
                  <MDBCol md='6' lg='6' className='d-flex align-items-center justify-content-center'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' style={{ filter: `${loading ? 'blur(5px)' : ''}` }} fluid />
                  </MDBCol>
                  <hr />
                  <center className='fs-4  fw-semibold' style={{ filter: `${loading ? 'blur(5px)' : ''}` }}>Enter your email for Registration and OTP validation</center>
                  <hr />
                  <MDBCol md='6'>
                    <form style={{ filter: `${loading ? 'blur(5px)' : ''}` }}>
                      <div className='input-group my-2 mb-2'>
                        <label>Enter your valid Email</label>
                        <input className='w-100 form-control' disabled={disableEmail} onChange={e => setEmail(e.target.value)} required />
                      </div>
                    </form>
                  </MDBCol>
                  {otpSent && <div className='btn btn-success' style={{ filter: `${loading ? 'blur(5px)' : ''}` }} onClick={handleSendOTP}>Send OTP</div>}
                  {!otpSent && <>
                    <div className='input-group my-2 mb-2' style={{ filter: `${loading ? 'blur(5px)' : ''}`, pointerEvents: `${loading ? 'none' : ''}` }}>
                      <label>Enter OTP</label>
                      <input className='w-100 form-control' onChange={e => setOTP(e.target.value)} />
                    </div>
                    <button className='btn btn-success' onClick={handleVerifyOTP}>Verify OTP</button></>}
                  <Link to='/login' class="text-decoration-none ms-2 btn btn-primary" style={{ filter: `${loading ? 'blur(5px)' : ''}` }}>Login Here!</Link>
                </div>
            }
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}




export default Register