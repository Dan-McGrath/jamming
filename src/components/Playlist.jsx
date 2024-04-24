import Tracklist from "./Tracklist";
import { useState } from "react";

const Playlist = ({ playlist, onRemoveSong, userId, accessToken }) => {
  const [input, setInput] = useState("");

  const createPlaylist = async () => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: input,
            description: "",
            public: true,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const playlistId = await response.json();

      return playlistId.id;
    } catch (error) {
      console.error("There has been a poblem with your fetch request:", error);
    }
  };

  const addTracksToPlaylist = async (playlistId) => {
    let trackUris = [];
    playlist.forEach((ele) => {
      trackUris.push(ele.uri);
    });
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(trackUris),
      },
    );
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playlistId = await createPlaylist();
    const response = addTracksToPlaylist(playlistId);
    return response;
  };

  return (
    <div className="border-4 rounded-md border-dark-green">
      <h2 className="my-4 text-4xl font-semibold text-center text-blue">
        Playlist
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Playlist Title"
          className="block w-5/6 mx-auto text-lg font-semibold border-none bg-background text-lite-green focus-visible:outline-none placeholder-dark-green"
          required
        />
        <hr className="w-5/6 mx-auto border-white/30" />
        <Tracklist
          songs={playlist}
          playlist={playlist}
          onRemoveSong={onRemoveSong}
          accessToken={accessToken}
        />
        <button className="block w-1/2 p-4 mx-auto font-semibold rounded-md bg-blue text-lite-green">
          Save to Spotify
        </button>
      </form>
    </div>
  );
};

export default Playlist;
