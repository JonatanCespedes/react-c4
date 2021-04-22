import React, { useState } from 'react';
import Hooks2 from './Hooks2';

const Hooks = (
    {
        setTitle,
        title,
    }
) => {
    const [ count, setCount ] = useState(0);
    const [ frutas, setFrutas ] = useState("banana");
    const [ user, setUser] = useState({})

    const incrementar = () => {
        setCount(count + 1 )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        let data = {
            name: e.target.name.value,
            lastname: e.target.lastname.value
        }
        setUser(data)
        console.log(user)
    }

    return ( 
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementar}>
                Incrementar
            </button>
            <button onClick={() => setCount(count - 1 )}>
                Decrementar
            </button>
            <input onChange={(e)=>{setTitle(e.target.value)}}/>
            <p>
                El valor de frutas es {frutas}
            </p>
            <input onChange={(e) => setFrutas(e.target.value)} />
            <form onSubmit={handleSubmit}>
                <input name="name"/><br/>
                <input name="lastname"/><br/>
                <input type="submit"/>
            </form>
            <hr/>
            <Hooks2 user={user}/>
        </div>
     );
}
 
export default Hooks;