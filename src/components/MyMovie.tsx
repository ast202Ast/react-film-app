import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import Star from "./Star";

interface Props {
  movie: Movie;
  onDeleteWatched: (id: string | undefined) => void;
}

// Composant pour un film noté
const MyMovie = ({ movie, onDeleteWatched }: Props) => {
  return (
    <div className="card bg-base-200 p-2 shadow-xl">
      <Link key={movie.imdbID} to={`/films/${movie.imdbID}`}>
        <figure className="relative">
          <img className="h-52" src={movie.Poster} alt="Image Film" />
          <div className="absolute bottom-[160px] left-[3px]">
            <Star number={movie.userRating} />
          </div>
        </figure>
      </Link>
      <div className="card-body max-w-[140px]">
        <h2 className="card-title text-sm text-center">{movie.Title}</h2>
        <div className="card-actions justify-center">
          <button
            className="btn btn-xs btn-secondary h-[30px]"
            onClick={() => onDeleteWatched(movie.imdbID)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyMovie;
