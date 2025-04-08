import { useState } from "react";
import Movie from "./entities/Movie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserFilms from "./pages/UserFilms";
import useMovies from "./hooks/useMovies";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");

  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorage<Movie[]>([], "watched");

  const handleSelectMovie = (id: string) => setSelectedId(id);

  const handleAddWatched = (movie: Movie) => {
    setWatched((watched: Movie[]) => [...watched, movie]);
  };

  const handleDeleteWatched = (id: string | undefined) => {
    setWatched((watched: Movie[]) =>
      watched.filter((movie) => movie.imdbID !== id)
    );
  };

  const handleModifyWatched = (rating: number, comment: string) => {
    setWatched((watched: Movie[]) =>
      watched.map((movie: Movie) =>
        movie.imdbID === selectedId ? { ...movie, userRating: rating, comment } : movie
      )
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout query={query} setQuery={setQuery} />,
      children: [
        {
          index: true,
          element: (
            <HomePage
              movies={movies}
              isLoading={isLoading}
              error={error}
              onSelectMovie={handleSelectMovie}
            />
          ),
        },
        {
          path: "my-films",
          element: (
            <UserFilms
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          ),
        },

        {
          path: "films/:filmId",
          element: (
            <FilmPage
              onAddWatched={handleAddWatched}
              onModifyWatched={handleModifyWatched}
              filmId={selectedId}
              watched={watched}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
