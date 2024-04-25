import React, { useState } from 'react';
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

function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cpassword, setRepeatpassword] = useState()
  const [retypePassword, setRetypePassword] = useState()
  const [alertMessage, setAlertMessage] = useState(null)
  const [alertColor, setAlertColor] = useState()


  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
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
    console.log(name, email, password, cpassword)
    axios.post('http://localhost:5020/post_data', { name: name, email: email, password: password, cpassword: cpassword, phone: phone })
      .then(res => {
        console.log(res)
        setMsg(res.data.msg)
        setMsg_type(res.data.msg_type)
      })
      .catch(err => {
        console.log(err)
      })

  }
  const [disableEmail, setDisableEmail] = useState(false)
  const [verified, setVerified] = useState(true)
  const [otpSent, setOtpSent] = useState(true)

  const handleSendOTP = () => {
    if (!email) {
      alert("Enter the Email First. . . ")
      return
    }
    const Confirm = window.confirm("Are you sure About Email Address, Please Check Again. You will not be able to change it again...")
    if (Confirm) {
      setDisableEmail(true)
      setOtpSent(false)
    }
  }
  const handleVerifyOTP = () => {
    const Confirm = window.confirm("Are you sure About Email Address, Please Check Again. You will not be able to change it again...")
    if (Confirm) {
      setDisableEmail(true)
      setVerified(true)
    }
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '' }}>
        <MDBCardBody>
          <center><p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 " style={{ fontSize: '40px', fontWeight: '500' }}>Welcome to <strong style={{ color: '#ffc107' }}>RoboShop</strong></p></center>
          <MDBRow>
            <MDBCol md='10' lg='6' className='d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

            {
              verified ?
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>


                  <div className="input-group ">
                    <label>Your Name</label>
                    <input id='form1' type='text' className='w-100 form-control  rounded-0' onChange={e => setName(e.target.value)} />
                    {/* <MDBIcon fas icon="user me-3" size='lg' /> */}
                  </div>

                  <div className="input-group">
                    <label>Entered Email</label>
                    {/* <MDBIcon fas icon="envelope me-3" size='lg' /> */}
                    <input className="w-100 form-control  rounded-0" label='Your Email' id='form2' type='email' value={email} disabled />
                  </div>

                  <div className="input-group ">
                    {/* <MDBIcon fas icon="envelope me-3" size='lg' /> */}
                    <label>Mobile Number</label>
                    <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='form2' type='number' onChange={e => setphone(e.target.value)} />
                  </div>

                  <div className="input-group ">
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

                  <div className="input-group ">
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
                  {/* <div className='mb-4'>
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
</div> */}
                  <button className='btn mt-2 btn-primary w-100' size='' onClick={HandleRegiserPage}>Register</button>
                  <div className='w-100 mt-2'>
                    <span>Already have an account? <a href="/login" className='text-decoration-none'>Login here</a></span>
                    <a href="/login"><button className='btn btn-info w-100'>Login</button></a>
                  </div>
                </MDBCol> : <div>
                  <hr />
                  <center className='fs-4  fw-semibold'>Enter your email for Registration and OTP validation</center>
                  <hr />
                  <form>
                    <div className='input-group mb-2'>
                      <label>Enter your valid Email</label>
                      <input className='w-100 form-control' disabled={disableEmail} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    {otpSent && <div className='btn btn-success' onClick={handleSendOTP}>Send OTP</div>}
                    {!otpSent && <>
                      <div className='input-group mb-2'>
                        <label>Enter OTP</label>
                        <input className='w-100 form-control' />
                      </div>
                      <button className='btn btn-success' onClick={handleVerifyOTP}>Verify OTP</button></>}

                  </form>


                </div>
            }
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}




export default Register