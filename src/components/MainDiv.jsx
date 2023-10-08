import React, {useState} from 'react';


import "./bootstrap-5.2.2-dist/css/bootstrap.css"

import "./MainDiv.css"

import img0 from "./images/image.png"
import img1 from "./images/image-1.png"
import img2 from "./images/image-2.png"
import img3 from "./images/image-3.png"
import img4 from "./images/image-4.png"
import img5 from "./images/image-5.png"
import img6 from "./images/image-6.png"
import img7 from "./images/image-7.png"

import hoverImage0 from "./images/hImage.png";



function MainDiv() {

  const [isHovered, setIsHovered] = useState(true);
   
  function handleHover () {
    setIsHovered(!isHovered)
  }


  return (
    <>
      <div class="container">
  <div class="row align-items-start">
    <div class="col imgHover clean">
      {/* <img src={hoverImage0} alt='--' className='hover_img' /> */}
      <img  id="img01" src={isHovered ? img0 : hoverImage0} alt='img0' className='imgPosition' onMouseOver={handleHover}
        onMouseOut={handleHover}
      />
      <div className='mx-auto'>
      <h3> <b>User Experience</b> </h3>
      <p>How users interact</p>
      </div>
 
    </div>
    <div class="col">
         <img src={img1} alt='img0' />
      
      <div className='mx-auto'>
      <h3> <b>Interface Design</b> </h3>
      <p>We live to design</p>
      </div>
    </div>
    <div class="col">
         <img src={img2} alt='img0' />
     
      <div className='mx-auto'>
      <h3> <b>Consultancy</b> </h3>
      <p>We can help validate your ideas.</p>
      </div>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
         <img src={img3} alt='img0' />
     
      <div className='mx-auto'>
      <h3> <b>Mobile Development</b> </h3>
      <p>We are Apple & Android friendly</p>
      </div>
    </div>
    <div class="col">
         <img src={img4} alt='img0' />
       
      <div className='mx-auto'>
      <h3> <b>Web Development</b> </h3>
      <p>We weave front-end magic.</p>
      </div>
    </div>
    <div class="col">
         <img src={img5} alt='img0' />
     
      <div className='mx-auto'>
      <h3> <b>CMS</b> </h3>
      <p>We give u data.</p>
      </div>
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
         <img src={img6} alt='img0' />
      
      <div className='mx-auto'>
      <h3> <b>Emerging Tech</b> </h3>
      <p>We have all the fancy gadgets.</p>
      </div>
    </div>
    <div class="col">
         <img src={img7} alt='img0' />
    
      <div className='mx-auto'>
      <h3> <b>Coaching</b> </h3>
      <p>Come learn our secrets</p>
      </div>
    </div>
    <div class="col">
         
    </div>
  </div>
</div>

    </>
  )
}

export default MainDiv
