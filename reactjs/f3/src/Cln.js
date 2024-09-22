import { Alert, Button } from 'react-bootstrap';

export function Cln(){

    const ar = [1,2,3,4];
    return(
        <div>
        {
            ar.map((item)=>{
            
                return <Button>This is a button</Button>
            })
        }
        <Alert variant='danger'> Hi Aleart</Alert>
        </div>
    )
}