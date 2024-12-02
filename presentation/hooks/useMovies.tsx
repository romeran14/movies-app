import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {

  const nowPlayingQuery=  useQuery({
     queryKey   : ['movies', 'nowPLaying'],
     queryFn:nowPlayingAction,
     staleTime:1000 * 60 * 60 * 24
  })

  const popularQuery =  useQuery({
    queryKey   : ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime:1000 * 60 * 60 * 24
 })

  return {
    nowPlayingQuery,
    popularQuery
  }
}