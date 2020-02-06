import React, { Component } from 'react';



class Second  extends Component {
    
    render() { 
        const myStyle = {
            color: "green",
            textAlign: "center",
            marginTop: "60px"
        
        }
        return ( 
            <div>
                <h1 style={myStyle} >Login Form</h1>
            </div>
         );
    }
}
 
export default Second;