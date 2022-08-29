    import{ GET_RECIPES,
            GET_NAME_RECIPES, 
            GET_DIETS, 
            FILTER_DIETS,
            FILTER_CREADB,
            ORDER_NAME,
            ORDER_HEALT_SCORE,
            GET_RECIPE_DETAIL
        } from '../actions'

const initialState = {
    recipes: [],
    allRecipes:[],
    recipeDetail:[],
    diets:[]
}


function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case GET_NAME_RECIPES:
            return{
                ...state,
                recipes:action.payload
            }
           case GET_DIETS:
             return{
                ...state,
                diets: action.payload
             }
             //recibe un solo elemento
            case GET_RECIPE_DETAIL:
                return {
                    ...state,
                    recipeDetail: action.payload
                }

        // case 'FILTER_RECIPES_ALF':
        //     const allRecipes = state.allRecipes
        //     const  recipesOrdenAlf = action.payload === 'All' ? allRecipes : allRecipes.filter(elm=>elm.name===action.payload)
        //     return {
        //          ...state,
        //         recipes: recipesOrdenAlf 
        //  }     
        
        case FILTER_DIETS:
             const allRecipes3 = state.allRecipes
            // const dietsFilter = action.payload === 'All' ? allRecipes : allRecipes.filter(elm=>elm.status===action.payload)
            //const dietsFilter = action.payload === 'All' ? allRecipes3 : allRecipes3.filter(elm=>elm.createInDb? elm.diets.map(el=> el.name).includes(action.payload):allRecipes3.filter(elm=>elm.diets.includes(action.payload))) 
            const dietsFilter = action.payload === 'All' ? allRecipes3 : allRecipes3.filter(elm=>elm.createInDb? elm.diets.map(el=> el.name).includes(action.payload): elm.diets.includes(action.payload)) 
            //const dietsFilter = action.payload === 'All' ? allRecipes3 : allRecipes3.filter(elm=>elm.diets.map?(el=>el.name===action.payload) 
              return {
                  ...state,
                  recipes: dietsFilter 
              }
         case "POST_RECIPE":
            return{
                ...state,
            }

        case FILTER_CREADB:
            //state.recipes= state.allRecipes
            const allRecipes1 = state.allRecipes
            const creadbFilter = action.payload === 'creadb' ?  allRecipes1.filter(elm=>elm.createInDb) : allRecipes1.filter(elm => !elm.createInDb)
            return {
                ...state,
                recipes: action.payload === 'All' ? allRecipes1 : creadbFilter
                //recipes: action.payload === 'All' ? state.allRecipes : creadbFilter
            }
        
        case ORDER_NAME:
            //state.recipes= state.allRecipes
            const allRecipes4 = state.allRecipes
            let ordenarArr = action.payload === 'asc'? 
              // {elemento}=document.getElementById
              
               allRecipes4.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
               }): 
                //if(action.payload === 'des_alf'){}
                allRecipes4.sort(function(a,b){
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
        
               case ORDER_HEALT_SCORE: 
               const allRecipes5=state.allRecipes
               let ordenarArrHs = action.payload === 'asc'? 
              // {elemento}=document.getElementById
               allRecipes5.sort(function(a,b){
                if(a.healthScore > b.healthScore){
                    return 1;
                }
                if(b.healthScore > a.healthScore){
                    return -1;
                }
                return 0;
               }): 
                //if(action.payload === 'des_alf'){}
                allRecipes5.sort(function(a,b){
                if(a.healthScore > b.healthScore){
                    return -1;
                }
                if(b.healthScore > a.healthScore){
                    return 1;
                }
                return 0;
               })    
               return {
                ...state,
                  recipes:ordenarArrHs               
            }
        







        //     const val= action.payload
        //    let  ordenarArr = (action.payload === 'asc_alf')?{
        //   {      
           // const val= action.payload
           //console.log(val)
           //let  ordenarArr = action.payload? 
        //    let ordenarArr
        //    if  (action.payload === 'asc_alf'){ 
        //        state.recipes.sort(function(a,b){
        //         if(a.title > b.title){
        //             return 1;
        //         }
        //         if(b.title > a.title){
        //             return -1;
        //         }
        //         return 0;
        //        })
        //     }else{ 
        //         //action.payload === 'des_alf'?
        //         state.recipes.sort(function(a,b){
        //         if(a.title > b.title){
        //             return -1;
        //         }
        //         if(b.title > a.title){
        //             return 1;
        //         }
        //         return 0;
        //        })

        //     } 
          //} 
          
               
            
        default: 
          return state;    
            }
        }


export default rootReducer