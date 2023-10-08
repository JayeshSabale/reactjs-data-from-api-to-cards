import React from 'react'
import "./bootstrap-5.2.2-dist/css/bootstrap.css";

import "./App.css"

function Navbar() {
  return (
    <div>
       <div class="header">
        <a href="#default" className="logo text-danger">C O D I G O</a>
        <div class="header-right">
            <a href="#work">Work</a>
            <a href="#solution">Solutions</a>
            <a href="#services"><b>Services</b></a>
            <a href="#techForHire">Tech for Hire</a>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <button className="btn"><b>Request a quote</b></button>
        </div>
    </div>

    <div className="aDiv">
        <div className="bDiv">
        <h1 className="text-black fontSize"><b>We build digital</b></h1>
        <h1 className="text-danger fontSize"><b>for a living.</b></h1>
        <p>Codigo comprises a team of brilliant minds and innovative individuals who create digital <br/>products people love to use.</p>
        <p>We believe that seamless, user-centric and meaningful experiences transcend mediums <br /> and touchpoints.</p>
        </div>
    </div>

    </div>
  )
}

export default Navbar
