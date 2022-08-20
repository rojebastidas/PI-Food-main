import axios from 'axios';
//const {API_KEY,API_KEY1,API_KEY2,API_KEY3} = process.env;

export function getRecipes(){
    return async function(dispatch){
        var json = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6141bbc6778d4ceaaa136a5314b08665&addRecipeInformation=true&number=100`);
        //var json = await axios.get("https://www.breakingbadapi.com/api/characters");
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data.results
        })

    }

}
