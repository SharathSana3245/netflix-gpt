import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { logo, userIcon } from '../utils/constants';
import { toggleGptSearch, addGptMovieresults } from '../utils/GptSlice';


export function Header(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user);
    const gpt = useSelector((store) => store.gpt)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse')
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/")
            }
        });
        //unmounting
        return () => unsubscribe()
    }, [])

    const handleGpt = () => {
        dispatch(toggleGptSearch());
        dispatch(addGptMovieresults({ movieResults: null, GptResults: null }))
    }
    return (
        <div className='flex justify-between  absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full'>
            <img className='w-44 ' src={logo} alt="logo"/>
            {user && <div className="flex p-2">
                <button className='py-2 px-4 bg-purple-800 mx-4 my-2 rounded-md text-white' onClick={handleGpt}>{gpt.ShowGptSearch ? "HomePage" : "GPT Search"}</button>
                <img className="w-12 h-12" src={userIcon} alt="user-icon" />
                <button onClick={handleSignOut} className="font-bold text-white">SignOut</button>
            </div>}
        </div>
    )
}
