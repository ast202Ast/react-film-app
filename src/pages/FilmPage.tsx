import MovieDetails from "../components/MovieDetails";
import Movie from "../entities/Movie";

interface Props {
  filmId: string;
  watched: Movie[];
  onAddWatched: (movie: Movie) => void;
  onModifyWatched: (rating: number, comment: string) => void;
}

// Page des détails sur un film
const FilmPage = ({
  watched,
  filmId,
  onAddWatched,
  onModifyWatched,
}: Props) => {
  return (
    <MovieDetails
      watched={watched}
      filmId={filmId}
      onAddWatched={onAddWatched}
      onModifyWatched={onModifyWatched}
    />
  );
};

export default FilmPage;