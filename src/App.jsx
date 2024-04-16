import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";

function App() {
  return (
    <div className="bg-background h-screen">
      <header className="text-center mb-2 mx-auto bg-blue-gray py-4">
        <h1 className="text-3xl text-lite-green">
          Ja<span className="text-neutral-300">mmm</span>ing
        </h1>
      </header>
      <SearchBar />
      <Playlist />
      <Tracklist />
    </div>
  );
}

export default App;
