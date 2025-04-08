import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
  onSelectMovie: (id: string) => void;
}

// Composant pour afficher la carte d'un film
const MovieCard = ({ movie, onSelectMovie }: Props) => {
  return (
    <div
      onClick={() => onSelectMovie(movie.imdbID!)}
      className="card shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden min-w-[230px] max-w-[300px] w-full"
    >
      <figure className="relative h-[390px] overflow-hidden">
        <img
          src={movie.Poster}
          alt={`Affiche du film ${movie.Title}`}
          className="w-full h-full object-cover scale-[1]"
        />
      </figure>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-3 text-white text-center">
        <h2 className="text-sm font-semibold">
          {movie.Title} ({movie.Year})
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;