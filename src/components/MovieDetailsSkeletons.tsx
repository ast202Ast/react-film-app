// Avant le chargement des informations detaillees d'un film
const MovieDetailsSkeletons = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-auto max-w-4xl p-7">
        <div>
          <div className="flex flex-row gap-4">
            <div className="skeleton h-60 w-48"></div>
            <div className="flex flex-col gap-5">
              <div className="skeleton h-4 w-40 sm:w-96"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsSkeletons;
