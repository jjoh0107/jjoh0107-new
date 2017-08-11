/**
 * Created by jihye on 2017-08-10.
 */
import React, { Component } from 'react';

import Header from './components/Header';

class App extends Component{
    render(){
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;