import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [msg, setMsg] = useState()
  const [msg_type, setMsg_type] = useState()
  const HandleLogin = (e) => {
    e.preventDefault()
    // console.log(email, password)
    axios.post('http://localhost:5020/login', { email: email, password: password })
      .then(res => {
        // console.log(res)
        setMsg(res.data.msg)
        setMsg_type(res.data.msg_type)

      })
      .catch(err => {
        console.log(err)
      })

  }
  return (
    <div class="min-vh-100">
      <div class="container d-flex justify-content-center pt-5">
        <form class="py-3 shadow rounded-2 px-5 px-sm-2 px-md-4 px-lg-5 border" style={{ maxWidth: '550px' }}>
          <center>
            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
            <hr />
            {
              msg ? <center class={`alert ${msg_type === 'error' ? "alert-danger" : "alert-success"} fw-semibold`}>{msg}</center> : <p class="text-success fw-semibold">Please enter your login email and password!</p>
            }
            <hr />
          </center>
          <div class="form-outline form-white mb-4">
            <label class="form-label" for="typeEmailX">Email</label>
            <input type="email" id="typeEmailX" class="form-control rounded-0 form-control-lg" onChange={e => setEmail(e.target.value)} />
          </div>

          <div class="form-outline form-white mb-4">
            <label class="form-label" for="typePasswordX">Password</label>
            <input type="password" id="typePasswordX" class="rounded-0 form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
          </div>
          <button class="btn btn-success btn-lg px-5 w-100" type="submit" onClick={HandleLogin}>Login</button>
          <center className='mt-2'><p class="mb-0">Don't have an account? <a href="/Registerpage" class="fw-bold">Sign Up</a></p></center>
        </form>
      </div>
    </div>
  )
}

export default Login