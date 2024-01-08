
import { useSelector } from "react-redux";
import { MovieList } from "./movieList";

export function GptSuggestions(props) {
    const { movieResults, GptMovies } = useSelector(store => store.gpt);
    console.log(movieResults, GptMovies)
    if (!GptMovies) return
    return (
        <div className="m-4 p-4 bg-black text-white bg-opacity-80">
            <div>
                {movieResults.map((movieName, index) => <MovieList title={movieName} movies={GptMovies[index]} />)}
            </div>
        </div>
    )
}
