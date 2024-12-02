import { Movie } from "../interfaces/movie.interfaces";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper{
    static fromTheMovieDBToMovie = (movie:Result):Movie => {
        return{
            id:movie.id,
            title:movie.title,
            description:movie.overview,
            poster:`https://image.tmdb.org/t/pw500${movie.poster_path}`,
            releaseDate:new Date(movie.release_date),
            rating:movie.vote_average,
            backdrop:`https://image.tmdb.org/t/pw500${movie.backdrop_path}`
        }
    }
}