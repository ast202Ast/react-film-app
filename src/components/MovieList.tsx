import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
  onSelectMovie: (id: string) => void;
}

// Composant pour les resultats d'une recherche
const MovieList = ({ movies, onSelectMovie }: Props) => {
  return (
    <>
      {movies.length > 0 ? (
        <>
          <h2 className="text-center mt-2 mb-6 text-2xl font-semibold">
            {movies.length} films correspondent
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {movies.map((movie) => (
              <Link key={movie.imdbID} to={`/films/${movie.imdbID}`}>
                <MovieCard movie={movie} onSelectMovie={onSelectMovie} />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-center mt-16 mb-4 text-lg max-w-xl mx-auto">
          Recherchez et notez vos films préférés!
        </h2>
      )}
    </>
  );
};

export default MovieList;