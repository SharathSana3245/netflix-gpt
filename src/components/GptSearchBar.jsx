import React from 'react'

export function GptSearchBar(props) {


    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='bg-black w-1/2 grid grid-cols-12'>
                <input type="text" placeholder="What do u want to watch today?" className='p-4 m-4 rounded-lg col-span-9' />
                <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>
                    Search
                </button>
            </form>
        </div>
    )
}
