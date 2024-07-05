import axios from 'axios'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { userContext } from '../../../App'

const UpdatedProfile = () => {
    const userLoginData = useContext(userContext)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
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
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [phone, setphone] = useState()
    const [msg, setMsg] = useState()
    const [msg_type, setMsg_type] = useState()
    useEffect(() => {
        const fetchData = () => {
            axios.get(`http://localhost:5020/getUserDetails/${userLoginData.email}`)
                .then(res => {
                    if (res.data.users) {
                        setData(res.data.users);
                    }
                })
                .catch(err => console.log(err));
            axios.get(`http://localhost:5020/getUserDetails2/${userLoginData.email}`)
                .then(res => {
                    if (res.data.users) {
                        setData2(res.data.users);
                    }
                })
                .catch(err => console.log(err));
        };

        fetchData(); // Initial fetch
        const interval = setInterval(fetchData, 5000); // Fetch every 30 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [userLoginData.email]);
    const handleOpenNewTab = (url) => {
        const confirm = window.confirm('Open Image in new Tab ?')
        if (confirm) {
            window.open(url, '__blank')
        }
    }
    return (
        <div className='container py-3' style={{ maxWidth: '1000px' }}>
            {
                userLoginData.email !== '' && userLoginData.email !== null ?
                    <div className='pt-2'>
                        <center className='fs-1 fw-bolder'>Your Latest Updated Profile <img src={`http://localhost:5020/pdf/${userLoginData.profilePic}`} className='rounded-circle' style={{ maxWidth: "100px", width: '', maxHeight: '100px', cursor: 'pointer' }} onClick={e => handleOpenNewTab(`http://localhost:5020/pdf/${userLoginData.profilePic}`)} /></center>
                        <div className='mb-4 border card shadow px-3 py-2'>
                            <label>Shop Name</label>
                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' value={data2.shopName ? data2.shopName : 'N/A'} disabled />
                        </div>
                        <div className='mb-4 border card shadow px-3 py-2'>
                            <label>GST Number <sup className='text-danger'>*</sup></label>
                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' value={data2.gstNo ? data2.gstNo : 'N/A'} disabled />
                        </div>
                        <div className='mb-4 border card shadow px-3 py-2'>
                            <label>Addhar Card Number</label>
                            <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='' type='text' value={data2.addhar ? data2.addhar : 'N/A'} disabled />
                        </div>
                        <div className='row'>
                            <div className='mb-4 border card shadow px-3 py-2 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                                <label className='alert bg-dark text-center text-white rounded-0' style={{ letterSpacing: '1px', fontWeight: '900', wordSpacing: '3px' }}>Addhar Card Image</label>
                                {/* <br /> */}
                                <img src={`http://localhost:5020/pdf/${data2.addharCardName}`} className='' style={{ maxWidth: "", width: '100%', maxHeight: '250px', height: '-webkit-fill-available', cursor: 'pointer' }} onClick={e => handleOpenNewTab(`http://localhost:5020/pdf/${data2.addharCardName}`)} />
                            </div>

                            <div className='mb-4 border card shadow px-3 py-2 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                                <label className='alert bg-dark text-center text-white rounded-0' style={{ letterSpacing: '1px', fontWeight: '900', wordSpacing: '3px' }}>Shop Image with you</label>
                                {/* <br /> */}
                                <img src={`http://localhost:5020/pdf/${data2.shopPic}`} className='' style={{ maxWidth: "", width: '100%', maxHeight: '250px', height: '-webkit-fill-available', cursor: 'pointer' }} onClick={e => handleOpenNewTab(`http://localhost:5020/pdf/${data2.shopPic}`)} />
                            </div>
                            <div className='mb-4 border card shadow px-3 py-2 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                                <label className='alert bg-dark text-center text-white rounded-0' style={{ letterSpacing: '1px', fontWeight: '900', wordSpacing: '3px' }}>DL or PAN </label>
                                {/* <br /> */}
                                <img src={`http://localhost:5020/pdf/${data2.DLPan}`} className='' style={{ maxWidth: "", width: '100%', maxHeight: '250px', height: '-webkit-fill-available', cursor: 'pointer' }} onClick={e => handleOpenNewTab(`http://localhost:5020/pdf/${data2.DLPan}`)} />
                            </div>
                            <div className='mb-4 border card shadow px-3 py-2 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                                <label className='alert bg-dark text-center text-white rounded-0' style={{ letterSpacing: '1px', fontWeight: '900', wordSpacing: '3px' }}>Shop License</label>
                                {/* <br /> */}
                                <img src={`http://localhost:5020/pdf/${data2.shopLicense}`} className='' style={{ maxWidth: "", width: '100%', maxHeight: '250px', height: '-webkit-fill-available', cursor: 'pointer' }} onClick={e => handleOpenNewTab(`http://localhost:5020/pdf/${data2.shopLicense}`)} />
                            </div>
                            <div className='mb-4 border card shadow px-3 py-2 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                                <label className='alert bg-dark text-center text-white rounded-0' style={{ letterSpacing: '1px', fontWeight: '900', wordSpacing: '3px' }}>Profile Picture</label>
                                {/* <br /> */}
                                <img src={`http://localhost:5020/pdf/${data2.profilePic ? data2.profilePic : userLoginData.profilePic}`} className='' style={{ maxWidth: "", width: '100%', maxHeight: '250px', height: '-webkit-fill-available', cursor: 'pointer' }} onClick={e => handleOpenNewTab(`http://localhost:5020/pdf/${data2.profilePic}`)} />
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <center className='alert alert-danger'>Non Authorized Access</center>
                    </div>
            }
        </div>
    )
}

export default UpdatedProfile