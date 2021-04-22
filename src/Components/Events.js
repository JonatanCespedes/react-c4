import React, {useState} from 'react';


const Events = () => {
    const [contador, setContador] = useState(0)
    return ( 
        <div>
            <h2>El valor del contador es {contador}</h2>
        </div>
     );
}
 
export default Events;