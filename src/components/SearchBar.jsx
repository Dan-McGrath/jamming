import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div className="mx-auto my-5 max-w-fit">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="px-2 py-2 text-lg font-semibold rounded-md placeholder:text-dark-green text-blue"
          type="text"
          name="search"
          placeholder="Search for songs"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 mx-5 text-lg text-lite-green rounded-xl bg-blue hover:bg-lite-green/80 hover:text-blue-gray hover:font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
