import { IMovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response"
import { movieApi } from "../api/movie-api"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const popularMoviesAction = async () => {
    try {

        const { data } = await movieApi.get<IMovieDBMoviesResponse>('/popular')

        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie )

        return movies

    } catch (error) {
        console.log(error)
        throw 'cannot load now playing movies'
    }
}