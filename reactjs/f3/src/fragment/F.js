import { Fragment } from "react";

function F(props)
{
    const a=10;
    return(
        <Fragment>
            <button onClick={()=>{props.getData(a)}}>senddata</button>
            {/* <h1>Hello World This is a world</h1>
        <h1>Hello World This is a world</h1> */}
        </Fragment>
    )
}

export default F;