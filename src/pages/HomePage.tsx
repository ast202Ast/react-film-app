import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import MovieList from "../components/MovieList";
import Movie from "../entities/Movie";

interface Props {
  movies: Movie[];
  isLoading: boolean;
  error?: string;
  onSelectMovie: (id: string) => void;
}

// Page d'acceuil
const HomePage = ({ movies, isLoading, error, onSelectMovie }: Props) => {
  return (
    <div className="pt-6 bg-base-200 min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <MovieList movies={movies} onSelectMovie={onSelectMovie} />
        )}
        {error && <ErrorMessage error={error} />}
      </div>
    </div>
  );
};

export default HomePage;