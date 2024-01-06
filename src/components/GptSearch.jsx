import React from 'react';
import { GptSearchBar } from './GptSearchBar';
import { GptSuggestions } from './GptSuggestions';
import { BG_URL } from '../utils/constants';

export function GptSearch(props) {


    return (
        <div>
            <img
                className='absolute -z-10'
                src={BG_URL} alt="logo" />
            <GptSearchBar />
            <GptSuggestions />
        </div>
    )
}
