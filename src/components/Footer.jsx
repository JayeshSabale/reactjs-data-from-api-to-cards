import React from 'react'
import "./bootstrap-5.2.2-dist/css/bootstrap.css";

import "./Footer.css"


import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import linkedIn from "./images/linkedIn.svg"
import twitter from "./images/twitter.svg"

function Footer() {
  return (
    <>
     <div className='footerDiv1'>
        <h2 className='center text-danger my-5'><b>Let's have a chat</b></h2>

        <div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
    <div class="col borderRight borderPosition"><h3><b>Hello</b></h3>
            <p>Help you build something</p></div>

    <div class="col borderRight borderPosition"><h3><b>Co-incubate</b></h3>
   
            <p>Help you build something</p></div>

    <div class="col borderRight borderPosition"><h3><b>Customize</b></h3>
            <p>Help you build something</p></div>

    <div class="col borderRight borderPosition"><h3><b>Organise</b></h3>
            <p>Help you build something</p></div> 

    <div class="col borderPosition"><h3><b>Tech for Hire</b></h3>
            <p>Help you build something</p></div>
  </div>
    </div>    

                <table width="15%" border="0" align='center'>
  <tr>    
  <td><img src={facebook} alt="" align="center"  width="25px" height="25px"/></td>
  <td><img src={twitter} alt="" align="center" width="25px" height="25px" /></td>
  <td><img src={instagram} alt="" align="center" width="25px" height="25px" /></td>
  <td><img src={linkedIn} alt="" align="center" width="25px" height="25px" /></td>
  </tr>
</table>
               
    <p className='align-center'>Copyright © Codigo - Mobile App Developer Singapore</p>
    <p className='align-center'>+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</p>

     </div>
     
    </>
  )
}

export default Footer
   