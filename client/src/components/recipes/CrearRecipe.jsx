import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postRecipes, getDiets} from '../../actions/index'
import {useDispatch, useSelector} from "react-redux";

export default function CrearRecipe(){
    const dispatch = useDispatch()
    const history = useHistory()
    const diets = useSelector((state)=> state.diets)


const [inputad, setInputad] =useState({
   name:"",
   summary:"",
   healtScore: 0,
   image:"",
   step:"",
   diets:[]

})

function handleChange(e){ 
    setInputad({
       ...inputad,
       [e.target.name]: e.target.value
    })
}    
    console.log(inputad)
    function handleChangehs(e){ 
        setInputad({
           ...inputad,
           [e.target.name]:parseInt(e.target.value)
        })
}
function handleSelect(e){
    setInputad({
        ...inputad,
        diets: [...inputad.diets, e.target.value]
    })
}
function handleSubmit(e){
    e.preventDefault();
    console.log(inputad)
    dispatch(postRecipes(inputad))
    alert("Receta Creada") 
    setInputad({
        name:"",
        summary:"",
        healtScore: 0,
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
                  value={inputad.name}
                  name="name"
                  onChange={handleChange}  
                />
            </div>
            <div>
                <label>Resumen del plato</label>
                <textarea 
                 cols="30" 
                 rows="10"
                 value={inputad.summary}
                 name="summary" 
                 onChange={handleChange}
                 />
            </div>
             <div>
                <label >Nivel de comida saludable</label>
                <input
                  type="number"
                  value={parseInt(inputad.healtScore)}
                  name="healtScore"
                  onChange={handleChangehs}
                />
             </div>   
             <div>
                <label>Paso a paso</label>
                <textarea 
                 cols="30" 
                 rows="10"
                 value={inputad.step}
                 name="step" 
                 onChange={handleChange}
                 />
            </div>
            <div>
                <label>Imagen:</label>
                <input
                  type="text"
                  value={inputad.image}
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
            <ul><li>{inputad.diets.map(elm=> elm + ", ")}</li></ul>
            <button type= 'submit'>Crear Receta</button>

          </form>
    </div>
)
}
