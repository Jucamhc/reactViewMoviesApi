function renderMovies({ movies }) {

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function noRenderMovies() {
  return <h1>No se encontraron peliculas para esta búsqueda</h1>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? renderMovies({ movies }) : noRenderMovies()
}
