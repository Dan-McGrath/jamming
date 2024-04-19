import Tracklist from "./Tracklist";
const SearchResults = ({
  searchResults,
  playlist,
  onAddSong,
  onRemoveSong,
}) => {
  return (
    <div className="border-4 rounded-md border-dark-green">
      <h2 className="my-4 text-4xl font-semibold text-center text-blue">
        Results
      </h2>
      <div>
        <Tracklist
          songs={searchResults}
          playlist={playlist}
          onAddSong={onAddSong}
          onRemoveSong={onRemoveSong}
        />
      </div>
    </div>
  );
};

export default SearchResults;
