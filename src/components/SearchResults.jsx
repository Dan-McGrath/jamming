import Tracklist from "./Tracklist";
const SearchResults = () => {
  return (
    <div className="border-dark-green border">
      <h2 className="text-blue text-2xl text-center font-semibold my-4">
        Results
      </h2>
      <div>
        <Tracklist />
      </div>
    </div>
  );
};

export default SearchResults;
