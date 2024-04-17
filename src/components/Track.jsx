const Track = ({ songs, playlist }) => {
  return (
    <>
      <div className="grid grid-cols-12 items-center py-3">
        {songs &&
          songs.map((song, i) => (
            <>
              <div key={i} className="col-span-10">
                <div>
                  <h3 className="text-lite-green text-lg">{song.song}</h3>
                  <p className="text-dark-green/80">{song.artist}</p>
                  <p className="text-dark-green/80">{song.album}</p>
                </div>
              </div>
              <div className="col-start-11">
                {playlist.filter(function (obj) {
                  return Object.keys(obj).some(function (key) {
                    return obj[key].includes(song);
                  });
                }) ? (
                  <>
                    <button className="rounded-full bg-blue text-lite-green p-1 font-bold">
                      -
                    </button>
                  </>
                ) : (
                  <>
                    <button className="rounded-full bg-blue text-lite-green p-1 font-bold">
                      +
                    </button>
                  </>
                )}
              </div>
            </>
          ))}
      </div>
      <hr />
    </>
  );
};

export default Track;
