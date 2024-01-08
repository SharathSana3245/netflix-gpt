import React, { useRef } from 'react';
import openai from '../utils/openAI';
import { Api_Options } from '../utils/constants';
import { addGptMovieresults } from '../utils/GptSlice';
import { useDispatch, useSelector } from 'react-redux';


export function GptSearchBar(props) {
    const searchText = useRef();
    const dispatch = useDispatch();
    const searchMovies = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, Api_Options);

        const movieJson = await data.json();
        return movieJson.results;
    }

    const handleSearch = async () => {
        //api call for gpt results;
        const gptQuery = `Act as a Movie Suggestion system and suggest some movies for the query : ${searchText.current?.value}
        . only give me the names of 5 movies , comma separted like the example result given ahead .Example : Bahubali,sardar,RRR,Animal,Bro`;
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResults.choices) {
            alert("API Failed error")
        }
        const getMovies = gptResults.choices?.[0]?.message?.content.split(',');
        const moviePromises = getMovies.map((movie) => searchMovies(movie));
        const moviesData = await Promise.all(moviePromises);
        dispatch(addGptMovieresults({ movieResults: getMovies, GptResults: moviesData }))



    }

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => { e.preventDefault() }}>
                <input type="text" placeholder="What do u want to watch today?" className='p-4 m-4 rounded-lg col-span-9' ref={searchText} />
                <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleSearch}>
                    Search
                </button>
            </form>
        </div>
    )
}
