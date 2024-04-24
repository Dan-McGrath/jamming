const Track = ({ songs, playlist, onAddSong, onRemoveSong, accesssToken }) => {
  const handlePlaySong = async (e) => {
    await fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesssToken}`,
      },
      body: { context_uri: e.target.value },
    });
    return;
  };

  return (
    <>
      {songs &&
        songs.map((song) => (
          <div key={song.id}>
            <div className="grid items-center grid-cols-12 py-3">
              <div className="col-span-6 mb-2">
                <div>
                  <h3 className="text-lg text-lite-green">{song.name}</h3>
                  <div className="text-dark-green/80">
                    {song.artists.map((artist, i) => (
                      <>
                        <p key={i}>{artist.name}</p>
                      </>
                    ))}
                  </div>
                  <p className="text-dark-green/80">{song.album.name}</p>
                </div>
              </div>
              <button
                value={song.uri}
                className="bg-lite-green"
                onClick={(e) => handlePlaySong(e)}
              >
                Play
              </button>
              <div className="col-start-11">
                {playlist.findIndex((track) => track.name === song.name) >
                -1 ? (
                  <>
                    <button
                      value={song.name}
                      onClick={(e) => onRemoveSong(e)}
                      className="px-2 text-lg font-semibold rounded-full bg-blue text-lite-green"
                    >
                      -
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      value={song.name}
                      onClick={(e) => onAddSong(e)}
                      className="p-2 font-bold rounded-full bg-blue text-lite-green"
                    >
                      +
                    </button>
                  </>
                )}
              </div>
            </div>
            <hr />
          </div>
        ))}
    </>
  );
};

export default Track;
