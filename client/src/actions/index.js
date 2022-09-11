import axios from 'axios';
export const  GET_RECIPES= "GET_RECIPES";
export const GET_NAME_RECIPES = "GET_NAME_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const FILTER_DIETS = "FILTER_DIETS" ;
export const FILTER_CREADB = "FILTER_CREADB";
export const FILTER_MAYORCIN = "FILTER_MAYORCIN";
export const ORDER_NAME = "ORDER_NAME" ;
export const ORDER_HEALT_SCORE = "ORDER_HEALT_SCORE" ;
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL" ;
export const  DELETE_RECIPE= "DELETE_RECIPE";


require ("dotenv").config();
const {API_KEY,API_KEY1,API_KEY2,API_KEY3} = process.env;

export function getRecipes(){
    return async function(dispatch){
       // var json = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=743f3f8bc4a246f2bc837b4f2bd3a48c&addRecipeInformation=true&number=100`);
       // var json = await axios.get("https://breakingbadapi.com/api/characters");
       var json = await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type: GET_RECIPES,
            //payload: json.data.results
            payload: json.data
        })

    }

}
// export function getNameRecipes(name){
//     return async function(dispatch){
//         try{
//             var json = await axios.get("http://localhost:3001/recipes?name=" + name);
//             return dispatch({
//                 type: GET_NAME_RECIPES,
//                 payload: json.data
//             });
//         }catch(error){
//             console.log(error);
//         }
//     }
// }
export function getNameRecipes(name){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
            return dispatch({
                type: GET_NAME_RECIPES,
                payload: json.data
            });
        }catch(error){
            console.log(error);
        }
    }
}
// export const deleteRecipe = (id) => {
//     return {
//         type: DELETE_RECIPE,
//         payload: id
//     }
//  };
export function deleteRecipe(id){
    return async function (dispatch){
        try{
            //var json = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=07d4ff120e37438592d7340208551d96&addRecipeInformation=true&number=100`);
           // var json = await axios.get("http://localhost:3001/recipes/" + parseInt(id));
            return dispatch({
                type: DELETE_RECIPE,
                payload: id
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getDiets(){
    return async function (dispatch){
        var json = await axios("http://localhost:3001/diets")
        return dispatch({type: GET_DIETS, payload: json.data  });
    };
}

export function postRecipes(payload){
    return async function (dispatch){
        const respuesta = await axios.post("http://localhost:3001/recipes", payload);
        console.log(respuesta)
        return respuesta;
    }
}
  


export function filterRecipesDiets(payload){
    //console.log(payload)
    return{
        type:FILTER_DIETS,
        payload
    }
}

export function filterCreaDb(payload){
    return{
        type: FILTER_CREADB,
        payload
    }
}
// export function filterMayorCin(payload){
//     return{
//         type: FILTER_MAYORCIN,
//         payload
//     }
// }
export function orderName(payload){
    return {
        type: ORDER_NAME,
        payload 
    }
}    
 export function orderHealtScore(payload){
     return {
         type: ORDER_HEALT_SCORE,
         payload 
     }
 }    
   //const creadbFilter  = action.payload 
//Detalle de receta
export function getRecipeDetail(id){
    return async function (dispatch){
        try{
            //var json = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=07d4ff120e37438592d7340208551d96&addRecipeInformation=true&number=100`);
            var json = await axios.get("http://localhost:3001/recipes/" + parseInt(id));
            return dispatch({
                type: GET_RECIPE_DETAIL,
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}


// var promise = new Promise(function(resolve, reject) {
//     // Hacer cosas acá dentro, probablemente asincrónicas.
//     fs.readFile('./archivo.txt', 'utf8', function(err, data) { 
//       if (err) {
//         return reject(Error("Algo se rompió"));
//       }
//       //console.log(data);    
//       resolve(data);
//     }); 
//   });
