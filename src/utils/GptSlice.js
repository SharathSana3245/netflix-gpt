import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"Gpt",
    initialState:{
        ShowGptSearch:false
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.ShowGptSearch=!state.ShowGptSearch
        }
    }
})
export const {toggleGptSearch}=GptSlice.actions
export default GptSlice.reducer