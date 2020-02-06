import React, { Component } from 'react';
import theStyle from './third.module.css'


class Third extends Component {
    render() { 
        return ( 
            <div>
                <small className={theStyle.first}>Powered by: Migrant-Solutions</small>
            </div>
         );
    }
}
 
export default Third;