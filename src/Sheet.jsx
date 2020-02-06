import React, { Component } from 'react';
import './index.css'

class Sheet  extends Component {
    
    render() { 
        return ( 
            <div className='first-div'>
                <form method='POST' className='form-class'>
                    <div>
                        <input className='input' type='text' placeholder='Username' />
                    </div>
                    <div>
                        <input className='input' type='password'  placeholder='Password' />
                    </div>
                    <button className='btn'>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Sheet;