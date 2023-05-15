import React, {useState} from "react";  
import SearchResults from './SearchResults';


function SearchBar({tracks}) {
    const [input, setInput] = useState('');

    function handleChange(e) {
        const newValue = e.target.value;
        setInput(newValue);
        return 
    }

    return (
        <>
            <input type="search" placeholder='Search' onChange={handleChange} value={input}/>
            <div className="search-results">
                <SearchResults tracks={tracks} searchValue={input}/>
            </div>
        </>
    )
}

export default SearchBar;