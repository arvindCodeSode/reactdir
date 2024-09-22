import React, { Component } from 'react';

export default class Life extends Component{

    constructor()
    {
        super();
        console.log('Constructor');
    }
    componentDidMount()
    {
        console.log("yes");
    }
    render()
    {
        return(
            <div>Hello world</div>
        )
    }
}