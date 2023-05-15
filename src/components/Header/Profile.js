import React from "react";


function Profile({profile}) {
    return (
        <div className="profile-img">
            <img src={profile.img} alt={profile.alt} />
        </div>
    )
}

export default Profile;