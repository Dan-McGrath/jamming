import Tracklist from "./Tracklist";
const SearchResults = ({ searchResults, playlist }) => {
  return (
    <div className="border rounded-md border-dark-green">
      <h2 className="my-4 text-4xl font-semibold text-center text-blue">
        Results
      </h2>
      <div>
        <Tracklist songs={searchResults} playlist={playlist} />
      </div>
    </div>
  );
};

export default SearchResults;
