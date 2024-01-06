import React, { useRef, useState } from 'react'
import { Header } from './Header';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

export const Login = () => {
    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null);
    const name = useRef(null)
    const password = useRef(null)
    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = (e) => {
        //Validate the form data

        const validate = checkValidData(email.current.value, password.current.value);
        setErrorMessage(validate)
        if (validate) return

        if (!isSignInForm) {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        // Profile updated!
                        // ...
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error.message)
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + "-" + errorCode)
                    // ..
                });
        }
        if (isSignInForm) {
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }
    return (
        <div>
            <Header />
            <img
                className='absolute'
                src={BG_URL} alt="logo" />
            <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 absolute p-6 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 bg-black'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "SignIn" : "SignUp"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700 rounded-lg' ref={name} />}
                <input type="text" placeholder="Email" className='p-4 my-4 w-full bg-gray-700 rounded-lg' ref={email} />
                <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700 rounded-lg' ref={password} />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "SignIn" : "SignUp"}
                </button>
                <p className='py-4 cursor-pointer' onClick={handleSignInForm}>{isSignInForm ? "New to Netflix SignUp Now? " : "Already registered SignIn now"}</p>
            </form>
        </div>
    )
}
