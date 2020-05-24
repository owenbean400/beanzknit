import React from 'react';
import Header from './header.js';

class Content extends React.Component{

    render(){
        return (
            <div>
                <main>
                    <Header />
                    <div className="item-content">
                    </div>
                </main>
            </div>
        )
    }
}

export default Content