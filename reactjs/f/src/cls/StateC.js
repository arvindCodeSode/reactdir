import React, { Component } from "react";

class StateC extends Component{

    constructor()
    {
        super();
        this.state={
            data:'Sonu'
        }
    }
    apply()
    {
        alert('helo');
        this.setState({data:'Arvind'})
        // this.state.data='Arvind Parkash';
    }
    render()
    {
        return(
            <div>
                <h1>{ this.state.data }</h1>
                <button onClick={ ()=>{ this.apply() } }>Click On Me</button>
            </div>
        )
    }
}
export default StateC;