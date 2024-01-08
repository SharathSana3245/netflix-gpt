import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import moviesReducer from './movieSlice';
import gptReducer from './GptSlice';
import moviePageReducer from './moviePageSlice';
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt:gptReducer,
            moviePage:moviePageReducer
        }
    }
)

export default appStore;