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

  return (
    <div className="min-h-lvh">
      <header className="text-center mb-2 mx-auto bg-blue-gray py-4">
        <h1 className="text-6xl text-lite-green">
          Ja<span className="text-neutral-300">mmm</span>ing
        </h1>
      </header>
      <SearchBar onSearch={handleSearchResults} />
      <div className="grid grid-cols-2 w-10/12 mx-auto gap-6 min-h-lvh rounded-md">
        <SearchResults searchResults={searchResults} playlist={playlist} />
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
}

export default App;
