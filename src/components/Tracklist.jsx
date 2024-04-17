import Track from "./Track";
const Tracklist = ({ songs, playlist }) => {
  return (
    <div className="my-4 mx-3">
      <Track songs={songs} playlist={playlist} />
    </div>
  );
};

export default Tracklist;
