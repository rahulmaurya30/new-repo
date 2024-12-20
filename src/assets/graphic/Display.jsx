import React, { useEffect, useState } from 'react'

export default function Display() {
  const[users,setUser]=useState([]);
  useEffect(()=>{
    const loaduser=async()=>{
      const response=await fetch('http://localhost/priyanka/graphicsingup/Singup.php');
      const data=await response.json();
      setUser(data);
    
    }
    loaduser();

  },[])

  return (
    <>
   <div >
    <table className='dis_table ' cellSpacing={20} cellPadding={20} align='center' >
    <thead>
      <tr>
        <td className='table_head'>ID</td>
        <td className='table_head'>NAME</td>
        <td className='table_head'>EMAIL</td>
        <td className='table_head'>PASSWORD</td>
      </tr>
    </thead>
    <tbody >
      {users.map((res,index)=>
      <tr key={index}>
        <td className=' table_body'>{res.id}</td>
        <td className=' table_body'>{res.username}</td>
        <td className=' table_body'>{res.email}</td>
        <td className=' table_body'>{res.password}</td>
      </tr>
      
      )}
    </tbody>
    </table>

   
   </div>
    </>
  )
}

