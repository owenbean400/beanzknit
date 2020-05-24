import React from 'react';
import { Link } from 'react-router-dom';

const Links = (props) => {
    return(
        <div className="link">
            <Link to={props.too}>
                <li>{props.name}</li>
            </Link>
        </div>
    )
}

export default Links