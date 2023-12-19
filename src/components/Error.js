import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Error = () => {
  return (
   <>
   <div className='error'>
       <h1  className='text-center'>404 Error, Page not Found</h1>
       <br />
         <NavLink className='btn btn-danger' to='/home'>Go Back</NavLink>
         </div>
   </>
  )
}
export default Error;
