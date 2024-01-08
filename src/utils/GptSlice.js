import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"Gpt",
    initialState:{
        ShowGptSearch:false,
        GptMovies:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.ShowGptSearch=!state.ShowGptSearch
        },
        addGptMovieresults:(state,action)=>{
            const {movieResults,GptResults}=action.payload
            state.GptMovies=GptResults;
            state.movieResults=movieResults;
        }
    }
})
export const {toggleGptSearch,addGptMovieresults}=GptSlice.actions
export default GptSlice.reducer