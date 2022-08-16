import React from 'react'
import Slider from "react-slick";


function Carouseltag() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    
      };
  return (
    <div className="rounded-lg text-center bg-light dark:bg-middle relative  container-lg mt-20 lg:m-24 dark:text-white">
        <h1 className="text-2xl mb-3 p-3 ">BENEFITS</h1>
    <Slider {...settings}>
        
      <div>
       <h1>We are the best, secure, and most reliable IDO tools for any crypto project financing & investment.</h1>
      </div>
      <div>
        <h1>We give minimal and maximal risk and protection to investors investing in projects listed on our platform.</h1>
      </div>
      <div>
        <h1>We give life to any crypto project doing presales on our platform.</h1>
      </div>
      <div className="mb-10">
        <h1>We make everyone earn on our platform with our IDO tools.</h1>
      </div>
      
    </Slider>
  </div>
  )
}

export default Carouseltag