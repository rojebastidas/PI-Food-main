import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postRecipe, getDiets} from '../../actions/index'
import {useDispatch, useSelector} from "react-redux";

export default function CrearRecipe(){
    const dispatch = useDispatch()
    const diets = useSelector((state)=> state.diets)


const [input, setInput] =useState({
   name:"",
   summary:"",
   healtScore: 0,
   image:"",
   step:"",
   diets:[]

})

function handleChange(e){ 
    setInput({
       ...input,
       [e.target.name]: e.target.name
    })
    console.log(input)
}
function handleSelect(e){
    setInput({
        ...input,
        diets: [...input.diets, e.target.value]
    })
}

useEffect(()=>{
    dispatch(getDiets());
},[]);

return(
    <div>
        <Link to= '/Home'>Pagina Principal</Link> 
          <h2> Crear Recipe</h2>
          <form>
            <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={handleChange}  
                />
            </div>
            <div>
                <label>Resumen del plato</label>
                <textarea 
                 cols="30" 
                 rows="10"
                 value={input.name}
                 name="summary" 
                 onChange={handleChange}
                 />
            </div>
             <div>
                <label >Nivel de comida saludable</label>
                <inpput
                  type="number"
                  value={input.healtScore}
                  name="healtScore"
                  onChange={handleChange}
                />
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
