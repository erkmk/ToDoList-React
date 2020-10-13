import React, { Component } from 'react';

// here we inherit the properties (props) of main components, this child Component we will imported to main Component i.e App.js
export class  Navbar extends Component {
    render = () => (
        <div className="col-12">
    <h2 className="bg-primary text-white text-center p2">{this.props.name}'s To do list</h2>
                </div>
    ); 
        
}


