import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import CountUp from 'react-countup';
import bg2 from '../../assets/graphic/images/bg2.jpg'
// import ProgressBar from '@ramonak/react-progress-bar';

export default function About() {


 
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
        <li><Link  to='/singup'  className='nav_link active  page-title' >Profile</Link></li>
        {/* <li><Link className='nav_link active  page-title' >blog</Link></li> */}
        <li> <a><Link to='/dash' className=' page-title'>Dashborad</Link></a></li>

      </ul>
    </nav>
  </div>
  </div>
  </div>
  {/* end this step */}
  <section className='container about_us'>
    <h1>ABOUT</h1>
    <p >Learn more about me</p>
    <div className='row'>
      <div className='col-xl-4  col-lg-4 col-md-4 col-sm-12 text-white'>
        <img src={bg2} className='abhout_img' />
      </div>
      <div className='col-xl-8  col-lg-8 col-md-8 col-sm-12 about_text '>
    <h3>UI/UX & Graphic Designer</h3>
    <p>Good design’s not about what medium you’re working in. It’s about thinking hard about what you want to do and what you have to work with before you start.” </p>
    <div className='row'>
      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6  text-white about_list'>
        <ul>
          <li>          
          <span><FaAngleRight className='right' /><strong>Birthday:</strong> 1 May 1995</span>        
          </li>

          <li>
            
          <span className='text_web' ><FaAngleRight className='right' /><strong>Website:</strong>www.example.com</span>       
          </li>

          <li>
          <span><FaAngleRight className='right' /><strong>phone:</strong>+123 456 7890</span>
          </li>
    
          <li> 
          <span><FaAngleRight className='right' /><strong>City:</strong>New York, USA</span>   
          </li>
        </ul>
      </div>
      <div className='col-xl-6  col-lg-6 col-md-6 col-sm-6  text-white about_list about_co'>
        <ul>
          <li>
          <span><FaAngleRight className='right' /><strong>Age:</strong> 30</span>
          </li>

          <li>
          <span><FaAngleRight className='right' /> <strong>Degree:</strong>Master</span>
  
          </li>

          <li>
         
          <span ><FaAngleRight className='right' /><strong>Email:</strong>email@example</span>
        
          </li>        
          
          <li>
         
          <span> <FaAngleRight className='right' /><strong>Freelance:</strong>Available</span>
       
          </li>
        </ul>
      </div>
    </div>

      </div>

    </div>

  
    
  </section>
  
 
  <section class="counter-section container ">
  <div class="container">
     {/* <h1 class="main-title">Counter Section</h1>  */}
     <div class="row counter_row">
      <div class=" col-xl-3 col-lg-3 col-md-3 col-sm-3 ">
        <div class="counter-count">
          <span class="count">
          <CountUp delay={1} end={300} />
          </span>
          <h3 class="title">Happy Clients</h3>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
        <div class="counter-count ">
          <span class="count ">
          <CountUp delay={1} end={150} />
          </span>
          <h3 class="title">Projects</h3>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3  col-sm-3">
        <div class="counter-count">
          <span class="count">
          <CountUp delay={1} end={100} />
          </span>
          
          <h3 class="title">Hours Of Support </h3>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3  col-sm-3">
        <div class="counter-count">
          <span class="count">
          <CountUp delay={1} end={987} />
          </span>
          <h3 class="title">Awards</h3>
        </div>
      </div>
    </div>
 </div> 
 </section>

<section className=' container progress_1 mar-80'>
  <h1>SKILLS</h1>
  <div className='container mt-5' >
  <div className='row'>
    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
    <div className="progress">
          <div className="progress-bar html" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0"
            aria-valuemax="100">HTML </div>
            
        </div>
        <div class="progress">
          <div className="progress-bar Gra" role="progressbar" style={{width:" 90%"}} aria-valuenow="90" aria-valuemin="0"
            aria-valuemax="100">CSS</div>
        </div>
    <div className='progress'>
    <div className="progress-bar web" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0"
            aria-valuemax="100">JAVASCRIPT</div>
        </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
       < div className="progress">
          <div className="progress-bar php" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0"
            aria-valuemax="100">PHP</div>
        </div>
        < div className="progress">
          <div className="progress-bar WORD" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0"
            aria-valuemax="100">WORDPRESS/CMS</div>
        </div>
        < div className="progress">
          <div className="progress-bar PHOTO" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0"
            aria-valuemax="100">PHOTOSHOP</div>
        </div>
        </div>
    </div>    
    </div>
</section>





{/* <Testimonials /> */}

 



 </>
  )
}
