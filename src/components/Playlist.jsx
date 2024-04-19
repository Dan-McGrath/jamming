import Tracklist from "./Tracklist";

const Playlist = ({ playlist, onRemoveSong }) => {
  const handleSubmit = (e) => {
    e.preventDefualt();
  };

  return (
    <div className="border-4 rounded-md border-dark-green">
      <h2 className="my-4 text-4xl font-semibold text-center text-blue">
        Playlist
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Playlist Title"
          className="block w-5/6 mx-auto text-lg font-semibold border-none bg-background text-lite-green focus-visible:outline-none placeholder-dark-green"
        />
        <hr className="w-5/6 mx-auto border-white/30" />
        <Tracklist
          songs={playlist}
          playlist={playlist}
          onRemoveSong={onRemoveSong}
        />
        <button className="block w-1/2 p-4 mx-auto font-semibold rounded-md bg-blue text-lite-green">
          Save to Spotify
        </button>
      </form>
    </div>
  );
};

export default Playlist;
