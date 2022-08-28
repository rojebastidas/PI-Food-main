import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postRecipes, getDiets} from '../../actions/index'
import {useDispatch, useSelector} from "react-redux";
import { BotonStyled } from '../stylecomponents/BotonStyled';

function validate(input){
    // let errores = {};
    // if(!input.name){
    //     errores.name ='Se debe agregar el nombre de la receta';
    // }
    //  else if (!input.summary){
    //      errores.summary= "Se debe agregar el resumen del plato" 
    //  }else if(input.healthScore<0 || input.healthScore >100 ){
    //    errores.healthScore="Puntaje fuera de rango debe estar entre 0 y 100"
    //  }
     let errores = {};
     if(!input.name){
         errores.name ='Se debe agregar el nombre de la receta';
         console.log("erores name",errores.name)
     }
     if (!input.summary){
         errores.summary= "Se debe agregar el resumen del plato" 
         console.log("erores name",errores.summary)
     }
     if(input.healthScore<0 || input.healthScore >100 ){
        errores.healthScore="Puntaje fuera de rango debe estar entre 0 y 100"
        console.log("erores name",errores.healthScore)
     }       
 
     
    return errores;
}


export default function CrearRecipe(){
    //let inicial =0;
    const dispatch = useDispatch()
    const history = useHistory()
    const diets = useSelector((state)=> state.diets)
    const [errores, setErrores] = useState({});
    const [botonactivo, setBotonactivo]=useState(false);


const [input, setInput] =useState({
   name:"",
   summary:"",
   healthScore: 0,
   steps:"",
   diets:[],
   image:""

})

function handleChange(e){ 
    setInput({
       ...input,
       [e.target.name]: e.target.value
    })
    let objError = validate({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrores(objError)
    //console.log("objerror",objError);    
    // errores.hasOwnProperty('name') && errores.hasOwnProperty('summary') && errores.hasOwnProperty('healthScore') ?
    //     setBotonactivo(botonactivo=>false) :
    //  setBotonactivo(botonactivo=>true)
     
}    
   // console.log("input", input);
    
    // function handleChangehs(e){ 
    //     setInput({
    //        ...input,
    //        [e.target.name]:e.target.value
    //     })
//}
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
        steps:"",
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
                  placeholder='Ingrese nombre de la receta'
                  className={errores.name && 'danger'}
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
                 className={errores.summary && 'danger'}
                 placeholder='Ingrese el resumen del plato'
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
                  className={errores.healthScore && 'danger'}
                  onChange={handleChange}
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
                 value={input.steps}
                 name="steps" 
                 placeholder='Ingrese el paso a paso de preparación de la receta'
                 onChange={handleChange}
                 />
            </div>
            <div>
                <label>Imagen:</label>
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  placeholder='Ingrese url de la imagen'
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
            {    
                errores.hasOwnProperty('name') || errores.hasOwnProperty('summary') || errores.hasOwnProperty('healthScore') ?
                <p> Favor completar la informacion requerida </p>:<BotonStyled type= 'submit' >Crear Receta</BotonStyled> 
                
              }
            
             

          </form>
    </div>
)
}
