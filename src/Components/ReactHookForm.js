import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const ReactHookForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()

    const [ auto, setAuto ] = useState({})

    const onSubmit = data => {
        let dataForm = {
            marca: data.marca,
            modelo: data.model,
            color: data.color,
            año: +data.year
        }
        setAuto(dataForm)
    }

    return ( 
        <div className="viewport">
            <h1>REACT HOOK FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div>
                <input
                className="input-form"
                placeholder="Marca" 
                {...register("marca", 
                { required: true, 
                minLength: 3}
                )}/>
                <br/>
                {errors.marca &&
                errors.marca.type === "required" &&
                <span className="error">El campo es requerido</span>}
                {errors.marca && 
                errors.marca.type === "minLength" &&
                <span className="error">Mínimo 3 letras</span> }
                </div>
                <div>
                <input
                className="input-form"
                placeholder="Modelo"
                {...register("model", 
                { required: true, 
                minLength: 3}
                )}/> <br/>
                {errors.model && errors.model.type === "required" && <span className="error">El modelo es requerido</span>}
                {errors.model && errors.model.type === "minLength" && <span className="error">Mínimo 3 letras</span> }

                
                </div>
                <div>
                <select  
                className="input-form"
                placeholder="Color"
                {...register("color",
                {required:true})}
                >
                    <option value="" hidden selected>Elija un color</option>
                    <option value="white">Blanco</option>
                    <option value="red">Rojo</option>
                    <option value="green">Verde</option>
                </select> <br/>
                {errors.color && 
                errors.color.type === "required" && 
                <span className="error">El campo es requerido</span>}
                </div>
                <div>
                <input 
                className="input-form"
                placeholder="Año"
                {...register("year", 
                { required: "El campo es requerido." }
                )}
                /> <br/>
                <ErrorMessage 
                errors={errors} 
                name="year"
                render={ ({ message }) => <span className="error">{message}</span>} />
                </div>
                <input type="submit" value="ENVIAR"/>
            </form>
        </div>
     );
}
 
export default ReactHookForm;