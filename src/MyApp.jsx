import React, { Component } from 'react';
import Sheet from './Sheet'
import Second from './Second'
import Third from './Third'




class MyApp extends Component {
    
    render() { 
        return ( 
            <div>
                <Second />
                <Sheet />
                <Third />
            </div>
         );
    }
}
 
export default MyApp;