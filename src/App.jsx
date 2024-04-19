import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useState, useEffect } from "react";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [spotifyData, setSpotifyData] = useState({});
  const [login, setLogin] = useState(false);
  const [params, setParams] = useState({});
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

  const getParams = () => {
    let params = {};
    const url = window.location.hash;
    const searchParams = new URLSearchParams(url);
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    setParams(params);
  };

  const handleLogin = () => {
    const clientID = "7aa5c99f0a0341d9aef00ce13cd72e51";
    const redirectUri = "http://localhost:5173/";
    const state = window.crypto.randomUUID();
    localStorage.setItem("stateKey", state);
    const scope = "playlist-modify-public";
    let url = "https://accounts.spotify.com/authorize";
    url +=
      "?response_type=token" +
      "&client_id=" +
      encodeURIComponent(clientID) +
      "&scope=" +
      encodeURIComponent(scope) +
      "&redirect_uri=" +
      encodeURIComponent(redirectUri) +
      "&state=" +
      encodeURIComponent(state);

    window.location = url;
  };

  useEffect(() => {
    getParams();
    if (params["#access_token"]) setLogin(true);
  }, [params]);

  const handleLogout = () => {
    setParams({});
    window.location.replace("http://localhost:5173");
  };

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
    console.log(params["#access_token"]);
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
      {login ? (
        <>
          <button
            onClick={handleLogout}
            className="float-right px-2 py-1 mx-4 rounded-md text-lite-green bg-blue"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleLogin}
            className="float-right px-2 py-1 mx-4 rounded-md text-lite-green bg-blue"
          >
            Login
          </button>
        </>
      )}

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
