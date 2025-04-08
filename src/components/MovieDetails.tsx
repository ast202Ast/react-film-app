import { useEffect, useState } from "react";
import Movie from "../entities/Movie";
import StarRating from "./StarRating";
import MovieDetailsSkeletons from "./MovieDetailsSkeletons";

const KEY = "3e08951f";

interface Props {
  filmId: string;
  watched: Movie[];
  onAddWatched: (movie: Movie) => void;
  onModifyWatched: (rating: number, comment: string) => void;
}

const MovieDetails = ({
  filmId,
  watched,
  onAddWatched,
  onModifyWatched,
}: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(filmId);

  const handleSelectedMovie = (rating: number) => {
    if (!isWatched) {
      const newWatchedMovie = {
        imdbID: movie?.imdbID,
        Title: movie?.Title || "",
        userRating: rating,
        Poster: movie?.Poster || "",
        comment: comment,
      };
      onAddWatched(newWatchedMovie);
    } else {
      onModifyWatched(rating, comment);
    }
    setComment("");
  };

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${filmId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [filmId]
  );

  useEffect(
    function () {
      if (!movie?.Title) return;
      document.title = ` Film | ${movie?.Title}`;

      return function () {
        document.title = "Movie Finder";
      };
    },
    [movie?.Title]
  );

  useEffect(() => {
    if (isWatched) {
      const existing = watched.find((m) => m.imdbID === filmId);
      if (existing) {
        setComment(existing.comment || "");
      }
    }
  }, [filmId, watched, isWatched]);

  // Afficher les informations detaillees sur un film
  return (
    <>
      {isLoading ? (
        <MovieDetailsSkeletons />
      ) : (
        <>
          <div className="flex flex-col items-center mx-auto max-w-4xl p-7">
            <div>
              <div className="flex flex-row">
                <div>
                  <img className="rounded-lg" src={movie?.Poster} alt="Movie" />
                </div>
                <div className="flex flex-col gap-2 pl-6">
                  <p className="text-xl font-bold mb-5">{movie?.Title}</p>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline h-[33px] mb-[8px]">Année</div>
                    <div className="">{movie?.Year}</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline h-[33px] mb-[8px]">Genre</div>
                    <div className="">{movie?.Genre}</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline h-[33px] mb-[8px]">Directeur</div>
                    <div className="">{movie?.Director}</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline h-[33px] mb-[8px]">IMDB Vote</div>
                    <div className="">{movie?.imdbRating}</div>
                  </div>
                  {isWatched && (
                    <div className="flex flex-row gap-2">
                      <div className="badge badge-outline h-[33px] mb-[8px]">Vote</div>
                      <div className="">
                        {watched.find((m) => m.imdbID === filmId)?.userRating}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline h-[33px] mb-[8px]">Durée</div>
                    <div className="">{movie?.Runtime}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div>{movie?.Plot}</div>
                  <div className="mt-4">
                    <label
                      htmlFor="comment"
                      className="block mb-1 font-medium text-700 mb-[10px]"
                    >
                      Commentaire :
                    </label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Votre commentaire sur le film..."
                    />
                  </div>
                <div className="flex flex-row gap-3 mt-3 items-center">
                  <div>Note :</div>
                  <StarRating onSetRating={handleSelectedMovie} />
                </div>                
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
