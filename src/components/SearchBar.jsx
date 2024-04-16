const SearchBar = () => {
  return (
    <div className="mx-auto my-5 max-w-fit">
      <input
        className="rounded-md px-2 py-2 placeholder:text-dark-green"
        type="text"
        placeholder="Search for songs"
      />
      <button className="text-lite-green m-2 rounded-xl bg-blue px-6 py-2 hover:bg-lite-green/80 hover:text-blue hover:font-semibold">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
