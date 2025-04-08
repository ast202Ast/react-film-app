import { useNavigate } from "react-router-dom";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <input
        autoFocus
        className="input input-bordered input-sm w-full sm:input-md"
        placeholder="Rechercher des films..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          navigate("/");
        }}
      />
    </>
  );
};

export default Search;
