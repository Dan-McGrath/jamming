import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useState, useEffect } from "react";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [spotifyData, setSpotifyData] = useState([]);
  const [login, setLogin] = useState(false);
  const [params, setParams] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const getParams = () => {
    let params = {};
    const url = window.location.hash;
    const searchParams = new URLSearchParams(url);
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  };

  const handleLogin = () => {
    const clientID = "7aa5c99f0a0341d9aef00ce13cd72e51";
    const redirectUri = "http://localhost:5173/"; //https://dan-mcgrath.github.io/jamming/
    const state = window.crypto.randomUUID();
    localStorage.setItem("stateKey", state);
    const scope =
      "playlist-modify-public user-read-private playlist-modify-private user-modify-playback-state user-read-playback-state";
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
    const params = getParams();
    if (params["#access_token"]) {
      setParams(params);
      setLogin(true);
    }
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const endpoint = "https://api.spotify.com/v1/me";
      if (params["#access_token"]) {
        const response = await fetch(`${endpoint}`, {
          headers: {
            Authorization: `Bearer ${params["#access_token"]}`,
          },
        });
        const userData = await response.json();
        setUserInfo(userData);
      }
    };

    fetchUserInfo();
  }, [params]);

  const handleLogout = () => {
    setParams({});
    window.location.replace("http://localhost:5173/"); //https://dan-mcgrath.github.io/jamming/
  };

  const handleSearchResults = async (string) => {
    const endpoint = "https://api.spotify.com/v1/search?";
    const response = await fetch(
      `${endpoint}q=${string}&type=track&market=US`,
      {
        headers: {
          Authorization: `Bearer ${params["#access_token"]}`,
        },
      },
    );
    const tracks = await response.json();
    let tracksArr = Object.entries(tracks.tracks.items).map((e) => e[1]);
    let unique = [];
    tracksArr.forEach((ele) => {
      if (!unique.includes(ele.id)) {
        unique.push(ele);
      }
    });
    setSpotifyData(unique);
  };

  const handleAddSong = (e) => {
    let value = spotifyData.findIndex((ele) => ele.name === e.target.value);
    setPlaylist((current) => [...current, spotifyData[value]]);
  };

  const handleRemoveSong = (e) => {
    let value = playlist.filter((ele) => ele.name != e.target.value);
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
          searchResults={spotifyData}
          playlist={playlist}
          onAddSong={handleAddSong}
          onRemoveSong={handleRemoveSong}
        />
        <Playlist
          playlist={playlist}
          onRemoveSong={handleRemoveSong}
          userId={userInfo.id}
          accessToken={params["#access_token"]}
        />
      </div>
    </div>
  );
}

export default App;
