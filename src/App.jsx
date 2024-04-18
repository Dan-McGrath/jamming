import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  // Mock Arr
  const mockArr = [
    {
      song: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
    },
    {
      song: "Song 2",
      artist: "Artist 2",
      album: "Album 3",
    },
    {
      song: "Song 3",
      artist: "Artist 1",
      album: "Album 2",
    },
    {
      song: "Song 4",
      artist: "Artist 3",
      album: "Album 1",
    },
  ];

  const handleSearchResults = (string) => {
    setSearchResults(
      mockArr.filter((element) =>
        element.song.toLowerCase().includes(string.toLowerCase()),
      ),
    );
  };

  const handleAddSong = (e) => {
    let value = mockArr.filter((ele) => ele.song === e.target.value);
    setPlaylist((current) => [...current, value[0]]);
  };

  const handleRemoveSong = (e) => {
    let value = playlist.filter((ele) => ele.song != e.target.value);
    setPlaylist(value);
  };

  return (
    <div className="min-h-lvh">
      <header className="py-4 mx-auto mb-2 text-center bg-blue-gray">
        <h1 className="text-6xl text-lite-green">
          Ja<span className="text-neutral-300">mmm</span>ing
        </h1>
      </header>
      <SearchBar onSearch={handleSearchResults} />
      <div className="grid w-10/12 grid-cols-2 gap-6 mx-auto rounded-md min-h-lvh">
        <SearchResults
          searchResults={searchResults}
          playlist={playlist}
          onAddSong={handleAddSong}
          onRemoveSong={handleRemoveSong}
        />
        <Playlist playlist={playlist} onRemoveSong={handleRemoveSong} />
      </div>
    </div>
  );
}

export default App;
