import MyMovie from "../components/MyMovie";
import Movie from "../entities/Movie";

interface Props {
  watched: Movie[];
  onDeleteWatched: (id: string | undefined) => void;
}

// Composant pour la page des films notes
const UserFilms = ({ watched, onDeleteWatched }: Props) => {
  if (watched.length === 0) {
    return (
      <h2 className="text-center mt-16 mb-4 text-lg">
        Notez et commentez un film pour remplir la liste.
      </h2>
    );
  }
  return (
    <>
      <div className="flex flex-row flex-wrap max-w-[900px] gap-5 p-10 mx-auto justify-center">
        {watched.map((movie) => (
          <MyMovie
            key={movie.imdbID}
            movie={movie}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </div>
    </>
  );
};

export default UserFilms;
