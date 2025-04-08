import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import Search from "./Search";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const NavBar = ({ query, setQuery }: Props) => {
  return (
    <>
      {/* Petit écran */}
      <NavLink
        className="flex justify-center my-2 text-xl font-bold sm:hidden"
        to="/"
      >
        Movie Finder
      </NavLink>
      <div className="navbar flex items-center px-5 sm:my-2 mx-auto sm:max-w-6xl">
        <div className="hidden sm:block">
          {/* Grand écran */}
          <NavLink className="text-xl font-bold" to="/">
            Movie Finder
          </NavLink>
        </div>
        <div className="join flex-1 mx-2 lg:ml-36">
          <Search query={query} setQuery={setQuery} />
        </div>
        <NavLink to="/my-films">
          <button className="btn btn-primary btn-sm mx-2 sm:btn-md">
            Mes notes
          </button>
        </NavLink>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default NavBar;
