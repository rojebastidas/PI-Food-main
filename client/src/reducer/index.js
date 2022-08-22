
const initialState = {
    recipes: [],
    allRecipes:[]
}


function rootReducer (state = initialState, action){
    switch (action.type){
        case 'GET_RECIPES':
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case 'GET_NAME_RECIPES':
            return{
                ...state,
                recipes:action.payload
            }
            

        case 'FILTER_DIETS':
            const allRecipes = state.allRecipes
            const dietsFilter = action.payload === 'All' ? allRecipes : allRecipes.filter(elm=>elm.status===action.payload)
             return {
                 ...state,
                 recipes: dietsFilter 
             }

        case 'FILTER_CREADB':
            const allRecipes1 = state.allRecipes
            const creadbFilter = action.payload === 'creadb' ?  allRecipes1.filter(elm=>elm.createdInDb) : allRecipes1.filter(elm => !elm.createdInDb)
            return {
                ...state,
                recipes: action.payload === 'All' ? state.allRecipes: creadbFilter
            }
        
        case "ORDER_NAME":
            let ordenarArr = action.payload === 'asc' ?
               state.recipes.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
               }):
                state.recipes.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1;
                }
                return 0;
               })
               return {
                  ...state,
                  recipes:ordenarArr
               }
        
     
        default: 
            return state;    
    }
    
}

export default rootReducer