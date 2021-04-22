import React, {useState, useEffect} from 'react';

const Hooks2 = (props) => {

    const [ provincias, setProvincias ] = useState([])

    useEffect(()=>{
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(result => result.json())
        .then(response => 
            setProvincias(response.provincias)
        )
    }, [])

    const [ provinciaID, setProvinciaID ] = useState('');
    const [ localidades, setLocalidades ] = useState([])

    useEffect(()=>{
        fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaID}&campos=id,nombre&max=100`)
        .then(result=> result.json())
        .then(response => {
         setLocalidades(response)
        })
    }, [provinciaID])
    
    const getProvincia = (e) => {
       setProvinciaID(e.target.value) 
    }

    return ( 
        <div>
            <p>
                El valor de user es {props.user.name} {props.user.lastname}
            </p>
            <select onChange={getProvincia} name="provincia">
                {
                    provincias.map(provincia => (
                        <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
                        )
                    )   
                }
            </select> <br/>
            <select>
                <option hidden selected>Localidades</option>
            {
                    localidades.localidades && ( 
                        localidades.localidades.map(localidad => (
                        <option>{localidad.nombre}</option>
                        )
                    )   )
                }
            </select>
        </div>
     );
}
 
export default Hooks2;

