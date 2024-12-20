
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Singup() {



  const [inputs, setInputs] = useState({
    username: "", email: "", password: ""
  })
  const navigate = useNavigate();

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values=>({...values,[name]:value}));
  }
  const handlesubmit=(event)=>{
    event.preventDefault();

    const resdata=axios.post('http://localhost/priyanka/graphicsingup/Singup.php',inputs);
    console.log(inputs);
    console.log(resdata);
    if(resdata){
      setTimeout(()=>{
        navigate('/Display');

      },1500);
    }

  }



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
                <li><Link to='/port' className='nav_link active  page-title' >Portfolio</Link></li>
                <li><Link to='/singup' className='nav_link active  page-title' >Profile</Link></li>
                {/* <li><Link className='nav_link active  page-title' >blog</Link></li> */}
                <li> <a><Link to='/dash' className=' page-title'>Dashborad</Link></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className=' form_graphic'>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup_1">
            <form onSubmit={handlesubmit} >
              <label for="chk" aria-hidden="true"  >Sign up</label>
              <input type="text"  placeholder="User name" required="" onChange={handlechange}  value={inputs.username}  name="username" />
              <input type="email"  placeholder="Email" required="" onChange={handlechange} value={inputs.email}  name="email" />
              {/* <input type="number" name="broj" placeholder="BrojTelefona" required="" /> */}
              <input type="password"  placeholder="Password" required=""  onChange={handlechange} value={inputs.password} name="password" />
              <button name='submit' className='btn_sing'>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label for="chk" aria-hidden="true"  >Login</label>
              <input type="email" name="email" placeholder="Email" required="" />
              <input type="password" name="pswd" placeholder="Password" required="" />
              <button className='btn_sing'>Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

