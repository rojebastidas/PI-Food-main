import axios from 'axios';
require ("dotenv").config();
const {API_KEY,API_KEY1,API_KEY2,API_KEY3} = process.env;

export function getRecipes(){
    return async function(dispatch){
        var json = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2280e3f06a7343f8b780de5e73a7dcc7&addRecipeInformation=true&number=100`);
       // var json = await axios.get("https://breakingbadapi.com/api/characters");
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data.results
            //payload: json.data
        })

    }

}
export function getNameRecipes(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/recipes?name=" + name);
            return dispatch({
                type: "GET_NAME_RECIPES",
                payload: json.data
            });
        }catch(error){
            console.log(error);
        }
    }
}

export function getDiets(){
    return async function (dispatch){
        var json = await axios("http://localhost:3001/diets")
        return dispatch({type: "GET_DIETS", payload: json.data  });
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
        type:'FILTER_DIETS',
        payload
    }
}

export function filterCreaDb(payload){
    return{
        type: "FILTER_CREADB",
        payload
    }
}
export function orderName(payload){
    return {
        type: "ORDER_NAME",
        payload 
    }
}    
 export function orderHealtScore(payload){
     return {
         type: "ORDER_HEALT_SCORE",
         payload 
     }
 }    
   //const creadbFilter  = action.payload 
