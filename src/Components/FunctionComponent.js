import React from 'react';

function FunctionComponent (props) {

    setInterval(()=> {
        document.querySelector('.reloj').innerHTML = `<h2>Son las ${new Date().toLocaleTimeString()}</h2>`
    }, 1000)

    console.log("Componente renderizado")

    return (
        <section>
            <h1> Soy un componente funcional {props.name}</h1>
            <div className="reloj"></div>
        </section>
    )
};

export default FunctionComponent;