import React from 'react';

function SearchResults({tracks, searchValue}) {
    tracks.forEach(track => {
        if (searchValue === track.artist) {
            return (
                <>
                    <p>{track}</p>
                    <p>{track}</p>
                    <p>{track}</p>
                </>
            )
        }
    });
    
}

export default SearchResults;