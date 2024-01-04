import React, { useState } from 'react'
import { Header } from './Header'

export const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true)
    const handleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
return(
        <div>
            <Header/>
            <img
             className='absolute'
             src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"/>
             <form className='w-3/12 absolute p-6 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 bg-black'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ?"SignIn":"SignUp"}</h1>
                {!isSignInForm &&<input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
                <input type="text" placeholder="Email" className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
                <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
                {isSignInForm ?"SignIn":"SignUp"}
                </button>
                <p className='py-4 cursor-pointer' onClick={handleSignInForm}>{isSignInForm ?"New to Netflix SignUp Now? ":"Already registered SignIn now"}</p>
             </form>
        </div>
    )
}
