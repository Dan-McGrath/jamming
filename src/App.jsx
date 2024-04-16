import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="min-h-lvh">
      <header className="text-center mb-2 mx-auto bg-blue-gray py-4">
        <h1 className="text-3xl text-lite-green">
          Ja<span className="text-neutral-300">mmm</span>ing
        </h1>
      </header>
      <SearchBar />
      <div className="grid grid-cols-2 w-10/12 mx-auto gap-6 min-h-lvh">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
