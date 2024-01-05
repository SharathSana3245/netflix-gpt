import React from 'react';
import { Header } from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainContainer } from './mainContainer';
import { SecondaryContainer } from './secondaryContainer';
export function Browse(props) {
    useNowPlayingMovies()
    return (
        <div>
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}
