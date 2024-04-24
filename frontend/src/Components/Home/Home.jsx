import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../Images/Logo.jpg'


const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 200 })
    }, [])
    return (
        <div className='min-vh-100'>
            <div className='row bg-body-secondary'>
                <div className='col-12'>
                    {/* <div className='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'> */}
                    <div className='' data-aos="slide-up" data-aos-delay='50' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <img src={Logo} className='w-100' style={{ maxHeight: '600px' }} />
                    </div>
                </div>
                <div className='col-12 px-2'>
                    {/* <div className='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'> */}
                    <strong className='mt-2 px-2'>What is RoboShop ?</strong>
                    <p className='py-3 px-3'>
                        Welcome to RoboShop,RoboShop is an online platform dedicated exclusively to robotic arm technology. It serves as a comprehensive marketplace where enthusiasts, professionals, and businesses can explore, discover, and procure the latest advancements in robotic arm technology. From industrial-grade robotic arms for manufacturing and automation to cutting-edge models for research and education, RoboShop offers a wide range of options to cater to every need and application. With a user-friendly interface, advanced search filters, and detailed product descriptions, RoboShop makes it easy to find the perfect robotic arm for your requirements. Additionally, RoboShop provides exceptional support and assistance throughout the purchasing process, ensuring a seamless and hassle-free experience for customers.
                    </p>
                </div>
            </div>
            <div className='container'>
                <br />
                <br />
                <div>
                    <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>Introduction to RoboShop</center>
                    <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <hr />
                        <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>  Your ultimate destination for all things robotic arms! As the premier online platform dedicated exclusively to robotic arm technology, RoboShop offers a comprehensive marketplace where enthusiasts, professionals, and businesses can explore, discover, and procure the latest advancements in robotic arm technology.
                        </p>
                        <img src={Logo} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>RoboShop's Diverse Collection</center>
                    <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <hr />
                        <img src={Logo} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                        <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>RoboShop prides itself on curating a diverse and extensive collection of robotic arms sourced from top manufacturers and suppliers worldwide. From industrial-grade robotic arms for manufacturing and automation to state-of-the-art models for research and education, our platform features a wide range of options to cater to every need and application.</p>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>User-Friendly Navigation</center>
                    <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <hr />
                        <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>Navigating RoboShop is a breeze, thanks to our user-friendly interface, advanced search filters, and detailed product descriptions. Whether you're searching for a specific model or exploring new possibilities, RoboShop provides the tools and resources to find the perfect robotic arm for your requirements.</p>
                        <img src={Logo} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>Facilitating Communication and Visits</center>
                    <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <hr />
                        <img src={Logo} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                        <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>Once you've found the robotic arm that meets your needs, simply reach out to our dedicated team, and we'll facilitate communication with the supplier or warehouse owner to inquire about availability and arrange a visit to inspect the machine firsthand.</p>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>Commitment to Customer Satisfaction</center>
                    <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <hr />
                        <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>At RoboShop, customer satisfaction is our top priority. Our team is committed to providing exceptional support and assistance throughout the purchasing process, ensuring a seamless and hassle-free experience from start to finish.</p>
                        <img src={Logo} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>Join the RoboShop Community</center>
                    <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <hr />
                        <img src={Logo} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                        <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>Join the RoboShop community today and unlock the potential of robotic arm technology. Whether you're a seasoned professional or a curious enthusiast, RoboShop is your trusted partner in harnessing the power of robotics. Start exploring now and take the first step towards transforming your operations with cutting-edge robotic technology!</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Home