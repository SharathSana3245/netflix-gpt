import React from 'react';
import { IMG_CDN_URl } from '../utils/constants';

export default function MovieCard({ posterPath }) {
    return (
        <div className='w-48 pr-4'>
            <img alt="poster" src={IMG_CDN_URl + posterPath} />
        </div>
    )
}
