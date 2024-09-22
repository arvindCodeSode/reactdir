import React, { useRef } from 'react';
function User(){

    let inputRef1 = useRef(100);
    let inputRef2 = useRef(null);
    function getValues(){

        console.log(inputRef1.current.value);
    }

    return(
        <div>
            <input type='text' ref={ inputRef1 } value={inputRef1} placeholder='Enter 1' /> <br />
            <input type='text' ref={ inputRef2 } placeholder='Enter 1' />
            <button type='button' onClick={ ()=>{ getValues() } }>Button</button>
        </div>
    )

}

export default User;