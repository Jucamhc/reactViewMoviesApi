import { useMemo, useRef, useState } from 'react'
import withOutResults from '../mocks/no-results.json'
import { searchMovies } from '../services/movies'

export function useMovies({ sort }) {

  const [movies, setMovies] = useState([])
  const previousSearch = useRef('')


  const getMovies = async ({search}) => {

    if (search === previousSearch.current) return null

    if (search) {
      previousSearch.current = search
      const movies = await searchMovies({ search })
      setMovies(movies)

    } else {
      setMovies(withOutResults)
    }
  }

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])


  return { movies: sortedMovies, getMovies }
}
