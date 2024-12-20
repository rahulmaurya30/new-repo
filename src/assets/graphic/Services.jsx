import React from 'react'
import { Link } from 'react-router-dom'
// import { FiActivity } from "react-icons/fi";

export default function Services() {

 
  return (
   <>
   <div className='container py-4'>
    <div className='row'>

   
    <div className='col-xl-3 '>
    <h1><a>Emily Jones</a></h1>
    </div>
    <div className='col-xl-9'>
    <nav className='navbar'>
      <ul>
        <li><Link to='/' className=' active page-title nav_link  '>Home</Link></li>
        <li><Link to='/About' className='nav_link active  page-title' >About</Link></li>
        {/* <li><Link className='nav_link active  page-title'  >Resume</Link></li> */}
        <li><Link to='/service' className='nav_link active  page-title' >Services</Link></li>
        <li><Link  to='/port' className='nav_link active  page-title' >Portfolio</Link></li>
        <li><Link to='/singup' className='nav_link active  page-title' >Profile</Link></li>
        {/* <li><Link className='nav_link active  page-title' >blog</Link></li> */}
        <li> <a><Link to='/dash' className=' page-title'>Dashborad</Link></a></li>
      </ul>
    </nav>
  </div>
  </div>
  </div>
<section className='container service '>
<h1>SERVICES</h1>
{/* <div className='container p-4'>
  <div className='row'>
   <div className='col-xl-4 card '>
    <div className=' py-4 card_1'> 
      <div className='card_i'>
        <FiActivity />
      </div>
      <div className='card_text '>
       <h2>Nesciunt Mete</h2>
       <p>
       Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.
       </p>
      </div>
      
    </div>


   </div>
   <div className='col-xl-4 rare_1 '>
    <div className=' py-4 card_1'> 
      <div className='card_i'>
        <FiActivity />
      </div>
      <div className='card_text '>
       <h2>Nesciunt Mete</h2>
       <p>
       Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.
       </p>
      </div>
      
    </div>


   </div>
  < div className='col-xl-4 rare '>
    <div className=' py-4 card_1'> 
      <div className='card_i'>
        <FiActivity />
      </div>
      <div className='card_text '>
       <h2>Nesciunt Mete</h2>
       <p>
       Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.
       </p>
      </div>
      
    </div>


   </div>
   <div className='col-xl-4  bg-danger py-4 mt-3 '>hghb</div>
   <div className='col-xl-4 bg-danger py-4 mt-3'>hghb</div>
   <div className='col-xl-4  bg-danger py-4 mt-3'>hghb</div>
  </div>
</div> */}
{/* <div className='container'>
<div className='row'>
  <div className='col-xl-4 bg-danger mt-4'>
    <div className='icon'>
      
    </div>

  </div>
  <div className='col-xl-4  bg-dark mt-4'>gfg</div>
  <div className='col-xl-4 bg-info mt-4'>htr</div>
  <div className='col-xl-4 bg-primary mt-3'>dxs</div>
  <div className='col-xl-4 bg-info mt-3'>hghj</div>
  <div className='col-xl-4 bg-danger mt-3'>xsx</div>
</div>
</div> */}
<div class="container rare mt-5">
               
    <div class=" card">
      <div class="face face1">
        <div class="content">
          <img  src='https://png.pngtree.com/png-clipart/20211024/original/pngtree-salon-logo-png-image_6872052.png' className='card_image' />
          <h2 className='heading' >Logo Design</h2> 
          <p className='paragraph'>Creating a good, memorable logo involves thoughtful consideration of elements like color, typography, and symbolism to be meaningful to your brand, resonate with your audience, and help you stand out from your competitors. 
</p>
        </div>
      </div>
      <div class="face face2">
        <h2>01</h2>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img src='https://t3.ftcdn.net/jpg/08/73/14/14/360_F_873141497_YEM8IcIQjnoI859BQialVDkTexADz9wz.jpg' className='card_image2' />
          <h2 className='heading'>Brand Identity</h2> 
          <p className='paragraph'>If you have a strong and cohesive brand identity, you create a consistent image across any channel your audience will ever see you, helping your brand become instantly recognizable and much more memorable. </p>
        </div>
      </div>
      <div class="face face2">
        <h2>02</h2>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img src='https://www.tritonwebmedia.com/Upload/web-design.png'  className='card_image2'/>
          <h2 className='heading'>Website Design</h2> 
          <p className='paragraph'>first impressions very much matter, it’s got to deliver! A well-designed website not only makes a good first impression, but it improves your customers' experience with your brand and can help you drive conversions.</p>
        </div>
      </div>
      <div class="face face2">
        <h2>03</h2>
      </div>
    </div>
  </div>
  <div class="container rare mt-5">
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img src='https://academyclass.com/wp-content/uploads/2021/10/UX-UI.png' className='card_image2' />
          <h2 className='heading'>UX/UI Design</h2> 
          <p className='paragraph'>Good UX/UI design is what creates an enjoyable experience and a positive interaction between your users and your digital products like websites and mobile apps.</p>
        </div>
      </div>
      <div class="face face2">
        <h2>04</h2>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img  src='https://e7.pngegg.com/pngimages/369/514/png-clipart-mobile-app-development-application-software-mobile-device-android-mobile-phone-text-phone-icon.png' className='card_image2'/>
          <h2  className='heading'>Mobile App Design </h2> 
          <p className='paragraph'>Everyone uses mobile apps these days and there’s nothing more frustrating than a mobile app that is poorly laid out or doesn’t function correctly.</p>
        </div>
      </div>
      <div class="face face2">
        <h2>05</h2>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyBIZVRUuTPAY6xbBhe5t1KQy2Il_O0e52A&s'  className='card_image2'/>
          <h2 className='heading'> Business Card </h2> 
          <p className='paragraph'>Which is why your business cards have the power to leave a lasting impression on anyone you hand it to, whether it’s potential clients, partners, new hire candidates, or colleagues. </p>
        </div>
      </div>
      <div class="face face2">
        <h2>06</h2>
      </div>
    </div>
    
  </div>

</section>
   
   </>
  )
}

