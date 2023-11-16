import React from "react";
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Feedback from "../components/Feedback";

import img1 from "../assets/Top-laptop-brands-in-India.webp"
import img2 from "../assets/dims.jfif"
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header/>
        <div className='home' id="home">
      <Carousel
      infiniteLoop
       autoPlay
        showStatus={false}
         showArrows={false}
         showThumbs={false}
         
         interval={1000}
      >


<div>
  <img src={img1} alt="Item1" />
  <p className='legend'>Laptops</p>
</div>

<div>
  <img src={img2} alt="Item2" />
  <p className='legend'>Desktops</p>
</div>


      </Carousel>
    </div>

      <div className="home2" id="about">
        <div>
          <h1>About Us</h1>
          <p>
          Welcome to Build Yourself , your premier destination for cutting-edge PC solutions. 
          At Build Yourself, we blend innovation with customer-centric service, offering a curated selection of top-tier products to meet your computing needs.
           Our team of experts is dedicated to guiding you through the ever-evolving world of technology, ensuring that you make informed decisions. 
           With a commitment to quality, sustainability, and seamless customer experiences, [Your Company Name] is not just a retailer; we are your partners in the digital age. 
           Join us and discover a new era of computing excellence.
          </p>
        </div>
      </div>

      <div className="feedbacks" id="feedbacks" >
      <Feedback/>
      </div>

    </>
  );
};

export default Home;
