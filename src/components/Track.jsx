const Track = ({ songs, playlist }) => {
  return (
    <>
      <div className="grid items-center grid-cols-12 py-3">
        {songs &&
          songs.map((song, i) => (
            <>
              <div key={i} className="col-span-10 mb-2 border-b">
                <div>
                  <h3 className="text-lg text-lite-green">{song.song}</h3>
                  <p className="text-dark-green/80">{song.artist}</p>
                  <p className="text-dark-green/80">{song.album}</p>
                </div>
              </div>
              <div className="col-start-11">
                {playlist.filter((obj) => {
                  Object.keys(obj).some((key) => {
                    obj[key].includes(song);
                  });
                }) ? (
                  <>
                    <button className="px-2 text-lg font-semibold rounded-full bg-blue text-lite-green">
                      +
                    </button>
                  </>
                ) : (
                  <>
                    <button className="p-2 font-bold rounded-full bg-blue text-lite-green">
                      -
                    </button>
                  </>
                )}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Track;
