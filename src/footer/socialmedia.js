import React from 'react';

const SocialMedia = (props) => {
    return(
        <div className="socialmedia-link">
            <a href={props.sociallink} className="fa" className={props.socialicon}></a>
        </div>
    )
}

export default SocialMedia