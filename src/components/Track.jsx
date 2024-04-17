const Track = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center py-3">
        <div className="col-span-10">
          <h3 className="text-lite-green text-lg">Song Name</h3>
          <p className="text-dark-green/80">Artist</p>
          <p className="text-dark-green/80">Album</p>
        </div>
        <div className="col-start-11">
          <button className="rounded-full bg-blue text-lite-green p-1 font-bold">
            +/-
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Track;
