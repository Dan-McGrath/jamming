import Track from "./Track";

const Tracklist = ({
  songs,
  playlist,
  onAddSong,
  onRemoveSong,
  accessToken,
}) => {
  return (
    <div className="mx-3 my-4">
      <Track
        songs={songs}
        playlist={playlist}
        onAddSong={onAddSong}
        onRemoveSong={onRemoveSong}
        accessToken={accessToken}
      />
    </div>
  );
};

export default Tracklist;
