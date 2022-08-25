import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postRecipes, getDiets} from '../../actions/index'
import {useDispatch, useSelector} from "react-redux";

function validate(input){
    let errores = {};
    if(!input.name){
        errores.name ='Se debe agregar el nombre de la receta';
    }
     else if (!input.summary){
         errores.summary= "Se debe agregar el resumen del plato" 
     }else if(input.healthScore<0){
       errores.healthScore="Puntaje fuera de rango"
     }

    return errores;
}


export default function CrearRecipe(){
    const dispatch = useDispatch()
    const history = useHistory()
    const diets = useSelector((state)=> state.diets)
    const [errores, setErrores] = useState({});



const [input, setInput] =useState({
   name:"",
   summary:"",
   healthScore: 0,
   image:"",
   step:"",
   diets:[]

})

function handleChange(e){ 
    setInput({
       ...input,
       [e.target.name]: e.target.value
    })
    setErrores(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
         
}    
    console.log(input)
    function handleChangehs(e){ 
        setInput({
           ...input,
           [e.target.name]:e.target.value
        })
}
function handleSelect(e){
    setInput({
        ...input,
        diets: [...input.diets, e.target.value]
    })
}
function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatch(postRecipes(input))
    alert("Receta Creada") 
    setInput({
        name:"",
        summary:"",
        healthScore: 0,
        image:"",
        step:"",
        diets:[]
    })
    history.push('/home')
}

useEffect(()=>{
    dispatch(getDiets());
},[]);

return(
    <div>
        <Link to= '/Home'>Pagina Principal</Link> 
          <h2> Crear Recipe</h2>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={handleChange}  
                />
                {errores.name && (
                    <p className = 'error'>{errores.name}</p>
                )} 
            </div>
            <div>
                <label>Resumen del plato</label>
                <textarea 
                 cols="30" 
                 rows="10"
                 value={input.summary}
                 name="summary" 
                 onChange={handleChange}
                 />
                   {errores.summary && (
                    <p className = 'error'>{errores.summary}</p>
                )}  
            </div>
             <div>
                <label >Nivel de comida saludable</label>
                <input
                  type="number"
                  value={parseInt(input.healthScore)}
                  name="healthScore"
                  onChange={handleChangehs}
                />
                 {errores.healthScore && (
                    <p className = 'error'>{errores.healthScore}</p>
                )} 
             </div>   
             <div>
                <label>Paso a paso</label>
                <textarea 
                 cols="30" 
                 rows="10"
                 value={input.step}
                 name="step" 
                 onChange={handleChange}
                 />
            </div>
            <div>
                <label>Imagen:</label>
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  onChange={handleChange}

                />
            </div> 
            <select onChange={(e)=> handleSelect(e)}>
                { diets.map((diet)=>(
                    <option value={diet.name}>{diet.name}</option>
                ))

                }
            </select >
            <ul><li>{input.diets.map(elm=> elm + ", ")}</li></ul>
            <button type= 'submit'>Crear Receta</button>

          </form>
    </div>
)
}
