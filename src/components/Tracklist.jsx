import Track from "./Track";
const Tracklist = ({ songs, playlist, onAddSong, onRemoveSong }) => {
  return (
    <div className="mx-3 my-4">
      <Track
        songs={songs}
        playlist={playlist}
        onAddSong={onAddSong}
        onRemoveSong={onRemoveSong}
      />
    </div>
  );
};

export default Tracklist;
