import React from 'react'

export default function Nav() {
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
        <li><Link to='/' class=' active page-title nav_link  '>Home</Link></li>
        <li><Link to='/About' className='nav_link active  page-title' >About</Link></li>
        <li><Link className='nav_link active  page-title'  >Resume</Link></li>
        <li><Link to='/service' className='nav_link active  page-title' >Services</Link></li>
        <li><Link  to='/port' className='nav_link active  page-title' >Portfolio</Link></li>
        <li><Link className='nav_link active  page-title' >Contact</Link></li>
        <li><Link className='nav_link active  page-title' >blog</Link></li>
      </ul>
    </nav>
  </div>
  </div>
  </div>
   </>
  )
}

