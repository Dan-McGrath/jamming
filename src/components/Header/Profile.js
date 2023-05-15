import React from "react";


function Profile(props) {
    return (
        <div className="profile-img">
            <img src={props.profileImg} alt={props.profileAlt}/>
        </div>
    )
}

export default Profile;