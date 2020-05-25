import React from 'react';
import './404.scss';

class ErrorPage extends React.Component{

    render(){
        return(
            <div className="error-page">
                    <h1>404 Not Found</h1>
                    <p>Sorry for the inconvience but either this sitepage is not set up or the url is not part of our url sites</p>
            </div>
        )
    }
}

export default ErrorPage