import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../home/Home.css';
import { Link } from 'react-router-dom';
import react1 from '../images/react 1.jpg'
import react2 from '../images/react2.jpg'
import react3 from '../images/react3.jpg'


const Home = () => {
    const carouselSettings = {
        fade:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
    };

    return (
      <div className="body-container">
      
            <div className='home-first'>
            <Slider {...carouselSettings}>
                <div className="body-div">
                    <img
                        className="banner-img"
                        src={react1}
                        alt="Home Service Banner"
                    />
                    <div className="overlay">
                    <div className="form-groupp">
                           <Link to="/Booking">             <button type="button" id="booknow">Book Now</button></Link>
                                    </div>
                       
                        <div className="text-overlay">
                            <h1><b>Best Electrical Appliance Services</b></h1>
                            <p>Lowest Service charge <span className="charge">- Rs.99</span></p>
                        </div>
                    </div>
                </div>
                <div className="body-div">
                <img
                        className="banner-img"
                        src={react2}
                        alt="Home Service Banner"
                    />
                    <div className="overlay">
                    <div className="form-groupp">
                           <Link to="/Booking">             <button type="button" id="booknow">Book Now</button></Link>
                                    </div>
                                
                        
                        <div className="text-overlay">
                            <h1><b>Reliable Appliance Repair</b></h1>
                            <p>Quality Service at <span className="charge">Affordable Rates</span></p>
                        </div>
                    </div>
                </div>
                <div className="body-div">
                <img
                        className="banner-img"
                        src={react3}
                        alt="Home Service Banner"
                    />
                    <div className="overlay">
                       
                          
                               
                                    <div className="form-groupp">
                           <Link to="/Booking">             <button type="button" id="booknow">Book Now</button></Link>
                                    </div>
                                
                          
                        
                        <div className="text-overlay">
                            <h1><b>Expert Technicians at Your Service</b></h1>
                            <p>Call Now for <span className="charge">Immediate Assistance</span></p>
                        </div>
                    </div>
                </div>
            </Slider>
            </div>

            <div className='home-second'>
                <div className='row'>
                    <div className='column'>
                        <img
                            src="https://media.istockphoto.com/id/958599628/photo/industrial-technician-operating-in-electricity-substation.jpg?s=612x612&w=0&k=20&c=r8dxwRRsOwxuRP4hUwrS_MsK4rCTGgiz6IA44jzQDnY="
                            alt="About Us"
                        />
                    </div>
                    <div className='column'>
                        <h2>WELCOME TO PATCHWORK!<br /></h2><br />
                        <h1>We Build For Your Comfort</h1>
                        <p>At PatchWork we know that you worked hard in order to make your life easier with the help of different appliances. And it’s our job to keep them running. You don’t have to throw appliances away simply because they are not working as they usually do. There is no repair job, even the toughest one, our professional repairman cannot handle. Whenever you face a broken appliance, you are just one phone call away from getting it fixed and running smoothly as new again!</p>
                    </div>
                </div>
                <div className="specific_list">
                    <ul>
                        <li>Inspection Charge @ 99</li>
                        <li>
                            <img width="36" height="36" src="https://servizman.com/assets/icons/calender.svg" alt="180 Days Service Warranty"/>
                            180 Days Warranty
                        </li>
                        <li>
                            <img width="36" height="36" src="https://servizman.com/assets/icons/trust-white.svg" alt="Trusted Technicians"/>
                            Expert Technicians
                        </li>
                    </ul>
                </div>
                <div className='home-third'>
                    <div className='service-row'>
                        <h1>Schedule Required Repair Services </h1>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/7uM6IZGVwRCPOFIMZguNYl/50e991d2434d4e30626048f191d4ed28/normal_u214.svg" alt="Refrigerator" />
                                    <h4>REFRIGERATOR</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/7M313CMpwzgSMd4ZVe9K2W/4b3fd6ef3b2e572b1f0a2020050a4b78/normal_u218.svg" alt="Washer" />
                                    <h4>WASHER</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/3k8XCvfBN2GK5hrZ0nMFtd/9e7cdbca2d6cdd308b30e1cc2bc9e7c9/normal_u222.svg" alt="Dryer" />
                                    <h4>DRYER</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/Zo8n2ccK3biibhlxxnefo/695e8e92af07509d72b990e811a4255b/normal_u226.svg" alt="Dishwasher" />
                                    <h4>DISHWASHER</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/5URYrWfz6i84aAfz30GI0m/727c97fd26926b72c8cb5c8e12b0f8da/normal_u230.svg" alt="Range" />
                                    <h4>RANGE</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/d0oBrTvN2kGYEGl143kXL/e22bf898ae3153d5dc7f25b7c137c190/normal_u234.svg" alt="Oven" />
                                    <h4>OVEN</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/4uFr9tjKsCNuRGxXFMVYKx/6e2c1dd52d4e93a9dca9fa687c826487/normal_u238.svg" alt="All HVAC" />
                                    <h4>ALL HVAC</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/56mrHMukZqJKGAXiKgmWkP/21f6167c077839d1438614eb90e95ab1/normal_u242.svg" alt="Freezer" />
                                    <h4>FREEZER</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/6ZjhSLnZXq32mkSVLBHI7H/83e891b3041be4b994c804736df94b64/normal_u246.svg" alt="Water Heater" />
                                    <h4>WATER HEATER</h4>
                                </center>
                            </div>
                        </div>
                        <div className='service-column'>
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/1jLiyh0casrK8fgv4r5tGH/7103f56c143d54109417ef8b1ca80fd6/normal_u230.svg" alt="Cooktop" />
                                    <h4>COOKTOP</h4>
                                </center>
                            </div>
                        </div>
                       
                       
                    </div>
                </div>
                <div className="brands">
            <div className="brand2">
                <h1>POPULAR BRANDS</h1>
                <h2>Top Brands We Work With</h2>
                <p>We have skilled home appliance specialists who can work with all popular brands in the market.</p>
            </div>
        </div>
                </div>
                <div className="brand_name">
                    <ul className="brand__list">
                        <li data-brand="Bosch">
                            <img width="150px" height="100%" src="https://servizman.com/assets/icons/bosch.svg" alt="Bosch Washing Machine Service by ServiceMan" />
                            
                        </li>
                        <li data-brand="LG">
                            <img width="150px" height="100%" src="https://servizman.com/assets/icons/lg.svg" alt="LG Washing Machine Service by ServiceMan" />
                            
                        </li>
                        <li data-brand="Samsung">
                            <img width="150px" height="100%" src="https://servizman.com/assets/icons/samsung.svg" alt="Samsung Washing Machine Service by ServiceMan" />
                           
                        </li>
                        <li data-brand="Whirlpool">
                            <img width="150px" height="100%" src="https://servizman.com/assets/icons/whirlpool.svg" alt="Whirlpool Washing Machine Service by ServiceMan" />
                           
                        </li>
                        <li data-brand="IFB">
                            <img width="150px" height="100%" src="https://servizman.com/assets/icons/ifb-logo.svg" alt="Blue Star Washing Machine Service by ServiceMan" />
                            
                        </li>
                        <li data-brand="Haier">
                            <img width="150px" height="100%" src="https://servizman.com/assets/icons/godrej.svg" alt="Haier Washing Machine Service by ServiceMan" />
                           
                        </li>
                        
                        
                       
                    </ul>
                    
                </div>
                
                </div>
            
    );
};

export default Home;