import Tracklist from "./Tracklist";

const Playlist = () => {
  return (
    <div className="border-dark-green border rounded-md">
      <h2 className="text-blue text-4xl text-center font-semibold my-4">
        Playlist
      </h2>
      <input
        type="text"
        placeholder="Playlist Title"
        className="w-5/6 border-none bg-background text-lite-green text-lg focus-visible:outline-none font-semibold mx-auto block placeholder-dark-green"
      />
      <hr className="w-5/6 mx-auto border-white/30" />
      <Tracklist />
      <button className="w-1/2 mx-auto bg-blue rounded-md block p-4 text-lite-green font-semibold">
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;
