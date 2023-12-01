import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          id='username'
          className='border p-3 rounded-lg'
        />
        <input
          type='email'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
        />
        <input
          type='password'
          placeholder='password'
          id='email'
          className='border p-3 rounded-lg'
        />
         <button className='bg-slate-800 uppercase border p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2'>
        <p>Do you Have an Accout?</p>
        <Link to ='/signin'>
        <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
