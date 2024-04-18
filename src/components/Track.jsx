const Track = ({ songs, playlist, onAddSong, onRemoveSong }) => {
  return (
    <>
      {songs &&
        songs.map((song, i) => (
          <>
            <div key={i} className="grid items-center grid-cols-12 py-3">
              <div className="col-span-10 mb-2">
                <div>
                  <h3 className="text-lg text-lite-green">{song.song}</h3>
                  <p className="text-dark-green/80">{song.artist}</p>
                  <p className="text-dark-green/80">{song.album}</p>
                </div>
              </div>
              <div className="col-start-11">
                {playlist.findIndex((track) => track.song === song.song) >
                -1 ? (
                  <>
                    <button
                      value={song.song}
                      onClick={(e) => onRemoveSong(e)}
                      className="px-2 text-lg font-semibold rounded-full bg-blue text-lite-green"
                    >
                      -
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      value={song.song}
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
          </>
        ))}
    </>
  );
};

export default Track;
