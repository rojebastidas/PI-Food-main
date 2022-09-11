import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postRecipes, getDiets} from '../../actions/index'
import {useDispatch, useSelector} from "react-redux";
import { BotonStyled1 } from '../stylecomponents/BotonStyled';
import { DivStyled4 } from '../stylecomponents/DivStyled';
import { LabelStyled2, LabelStyled3 } from '../stylecomponents/LabelStyled';
import { TextAreaStyled } from '../stylecomponents/TextAreaStyled';
import { InputStyled1, InputStyled2 } from '../stylecomponents/InputStyled';
import { PStyled1 } from '../stylecomponents/PStyled';
import { SelectStyled1 } from '../stylecomponents/SelectStyled';
import { UlStyled2, LiStyled2 } from '../stylecomponents/UlStyled';

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
         console.log("errores name",errores.name)
     }else {
        if (!/^[a-zA-Z0-9\u00C0-\u017F\s]+$/.test(input.name)){
            errores.name ='error el nombre solo debe llevar letras y numeros';
           console.log("error el nombre solo debe llevar letras y numeros")
        }
     }
     if (!input.summary){
         errores.summary= "Se debe agregar el resumen del plato" 
        // console.log("errores sumary",errores.summary)
     }else{
        if (!/^[a-zA-Z0-9\u00C0-\u017F\s]+$/.test(input.summary)){
            errores.summary ='error el nombre solo debe llevar letras y numeros';
        }
     }
     
     if(!input.healthScore || input.healthScore.length>3 || input.healthScore<0 || input.healthScore>100 ){
        console.log(input.healtScore);
        errores.healthScore='Error se debe agregar un puntaje entre 0 y 100'

     } 

     else{
        if(!/^[0-9]+$/.test(input.healthScore)){
            errores.healthScore='Error Solo se permite caracteres numericos'

        }
         //if(input.healtScore.length>3)errores.healthScore='Rango permitido de 0 a 100'  
     }
        //     errores.healthScore="Puntaje fuera de rango debe estar entre 0 y 100"
        //     console.log("errores heatScore",errores.healthScore)
    //  if(input.healthScore<0 || input.healthScore >100 ){
    //     errores.healthScore="Puntaje fuera de rango debe estar entre 0 y 100"
    //     console.log("errores heatScore",errores.healthScore)
    //  }       
 
     
    return errores;
}


export default function CrearRecipe(){
    //let inicial =0;
    const dispatch = useDispatch()
    const history = useHistory()
    const diets = useSelector((state)=> state.diets)
    const [errores, setErrores] = useState({ });
    const [botonactivo, setBotonactivo]=useState(false);

    // useEffect((input)=>{
    //    // errores.name ='Se debe agregar el nombre de la receta';
    //     let objError = validate({
    //         ...input,
    //            input.name
    //     })
    //     setErrores(objError)
    // },[])


const [input, setInput] =useState({
   name:"",
   summary:"",
   healthScore: "",
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
    console.log("objError",objError)
    setErrores(objError)
    //console.log("errores",{errores})
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
    // console.log(input)
    // dispatch(postRecipes(input))
    // alert("Receta Creada con exito") 
    // setInput({
    //     name:"",
    //     summary:"",
    //     healthScore: 0,
    //     image:"",
    //     steps:"",
    //     diets:[]
    // })
    // history.push('/home')
     let errors=(validate(input))
     //setErrores({});
     console.log(errores)
     setErrores(errors);
     {console.log(errores)}
     console.log(errores)
     if(errors.name || errors.summary || errors.healthScore){
        // console.log('verificar')    
        alert("Hay errores, favor verificar la información")
     }else{
         
         console.log(input)
         dispatch(postRecipes(input))
        alert("Receta Creada con exito") 
        setInput({
            name:"",
            summary:"",
            healthScore: "",
            image:"",
            steps:"",
            diets:[]
      })
      setErrores(input);
    // history.push('/home')
     }


    //  {console.log(obj)}
    //  {console.log(errores.name)}
    //  console.log(errores)
        // let objErroresa=setErrores(validate(input));
    // if(objErroresa.name || objErroresa.summary || objErroresa.healthScore ){
    //     console.log("se han encontrado errores");
    // }else{
    //     console.log("!Felicitaciones no hay errores");
    //    }
    //         console.log("Errores encontrados", objErroresa);
    //          console.log("errores.name",objErroresa.name);
    //          console.log("errores.summary",objErroresa.summary)
    //          console.log("errores.healtScore",objErroresa.healtScore)

    }

useEffect(()=>{
    dispatch(getDiets());
    //setErrores({});
    //setErrores({name: 'Se debe agregar el nombre de la receta', summary: "Se debe agregar el resumen del plato"})
    setErrores(validate(input));
},[]);

return(
    <DivStyled4>
        {/* <Link to= '/Home'>Pagina Principal</Link>  */}
          <h2> Crear Recipe</h2>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <LabelStyled3>Nombre:</LabelStyled3>
                <InputStyled1
                  type="text"
                  value={input.name}
                  key="name"
                  name="name"
                  placeholder='Ingrese nombre de la receta'
                  className={errores.name && 'danger'}
                  onChange={handleChange}  
                  autoFocus
                />
                {errores.name && (
                    <PStyled1 className = 'error'>{errores.name}</PStyled1>
                )} 
            </div>
            <div>
                <LabelStyled2>Resumen del plato: </LabelStyled2>
                <TextAreaStyled
                 
                 value={input.summary}
                 name="summary" 
                 key="summary"
                 className={errores.summary && 'danger'}
                 placeholder='Ingrese el resumen del plato'
                 onChange={handleChange}
                 />
                   {errores.summary && (
                    <PStyled1 className = 'error'>{errores.summary}</PStyled1>
                )}  
            </div>
             <div>
                <LabelStyled3 >Nivel de comida saludable: </LabelStyled3>
                <InputStyled2
                  type="number"
                 // value={parseInt(input.healthScore)}
                 min={0}
                 max={100}
                 maxlength="3"
                 value={input.healthScore}
                  key="healthScore"
                  name="healthScore"
                  className={errores.healthScore && 'danger'}
                  onChange={handleChange}
                />
                 {errores.healthScore && (
                    <PStyled1 className = 'error'>{errores.healthScore}</PStyled1>
                )} 
             </div>   
             <div>
                <LabelStyled2>Paso a paso: </LabelStyled2>
                <TextAreaStyled 
                 cols="30" 
                 rows="10"
                 value={input.steps}
                 key="steps"
                 name="steps" 
                 placeholder='Ingrese el paso a paso de preparación de la receta'
                 onChange={handleChange}
                 />
            </div>
            <div>
                <LabelStyled3>Imagen:</LabelStyled3>
                <InputStyled1
                  type="text"
                  value={input.image}
                  key="image"
                  name="image"
                  placeholder='Ingrese url de la imagen'
                  onChange={handleChange}

                />
                <LabelStyled3>Diets: </LabelStyled3>

            </div> 
            <SelectStyled1 onChange={(e)=> handleSelect(e)}>
                {
                    diets.map((diet)=>(
                    <option value={diet.name}>{diet.name}</option>
                ))

                }
            </SelectStyled1 >
             <UlStyled2><LiStyled2>{input.diets.map(elm=> elm + ", ")}</LiStyled2></UlStyled2> 
            
                
                {/* // errores.hasOwnProperty('name') || errores.hasOwnProperty('summary') || errores.hasOwnProperty('healthScore') ?
                // <PStyled1> Favor completar la informacion requerida </PStyled1>:<BotonStyled1 type= 'submit' >Crear Receta</BotonStyled1>   */}
                <BotonStyled1 
                   type= 'submit'  
                    disabled={errores.name || errores.summary || errores.healthScore ? true:false} 
                  >Crear Receta</BotonStyled1> 
                
                
            
            
             

          </form>
    </DivStyled4>
)
}
