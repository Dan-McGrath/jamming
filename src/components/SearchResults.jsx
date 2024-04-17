import Tracklist from "./Tracklist";
const SearchResults = ({ searchResults }) => {
  return (
    <div className="border-dark-green border rounded-md">
      <h2 className="text-blue text-4xl text-center font-semibold my-4">
        Results
      </h2>
      <div>
        <Tracklist />
      </div>
    </div>
  );
};

export default SearchResults;
