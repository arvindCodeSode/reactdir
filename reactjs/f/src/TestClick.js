import { useState } from "react";

function TestClick()
{

    const [data, setData] = useState('Sonu');
    function updateme(e,par)
    {
        
        setData(e.target.value);

    }

    return (
        <div>
            <h1>{ data }</h1>
            <input type="text" onChange={ (event)=> updateme(event,"") } />
        </div>
    )
}
export default TestClick
