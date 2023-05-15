import React from "react";
import Profile from './Profile';
import SearchBar from "./SearchBar";

function Header(props) {
    return (
        <>
            <Profile profileImg={props.dataObject.profile.img} profileAlt={props.dataObject.profile.alt}/>
            <SearchBar tracks={props.dataObject.tracks}/>
        </>
    )
}

export default Header;