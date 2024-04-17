import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div className="mx-auto my-5 max-w-fit">
      <form>
        <input
          className="rounded-md px-2 py-2 placeholder:text-dark-green text-blue font-semibold text-lg"
          type="text"
          name="search"
          placeholder="Search for songs"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-lite-green mx-5 rounded-xl bg-blue px-6 py-2 hover:bg-lite-green/80 hover:text-blue-gray hover:font-semibold text-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
