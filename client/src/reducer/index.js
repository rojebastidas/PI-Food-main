
const initialState = {
    recipes: [],
    allRecipes:[],
    diets:{}
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
           

        // case 'FILTER_RECIPES_ALF':
        //     const allRecipes = state.allRecipes
        //     const  recipesOrdenAlf = action.payload === 'All' ? allRecipes : allRecipes.filter(elm=>elm.name===action.payload)
        //     return {
        //          ...state,
        //         recipes: recipesOrdenAlf 
        //  }     
        
        case 'FILTER_DIETS':
             const allRecipes3 = state.allRecipes
            // const dietsFilter = action.payload === 'All' ? allRecipes : allRecipes.filter(elm=>elm.status===action.payload)
            const dietsFilter = action.payload === 'All' ? allRecipes3 : allRecipes3.filter(elm=>elm.diets.includes(action.payload)) 
              return {
                  ...state,
                  recipes: dietsFilter 
              }


        case 'FILTER_CREADB':
            const allRecipes1 = state.allRecipes
            const creadbFilter = action.payload === 'creadb' ?  allRecipes1.filter(elm=>elm.createInDb) : allRecipes1.filter(elm => !elm.createInDb)
            return {
                ...state,
                recipes: action.payload === 'All' ? state.allRecipes: creadbFilter
            }
        
        case "ORDER_NAME":
            let ordenarArr = action.payload === 'asc'? 
              // {elemento}=document.getElementById
               state.recipes.sort(function(a,b){
                if(a.title > b.title){
                    return 1;
                }
                if(b.title > a.title){
                    return -1;
                }
                return 0;
               }): 
                //if(action.payload === 'des_alf'){}
                state.recipes.sort(function(a,b){
                if(a.title > b.title){
                    return -1;
                }
                if(b.title > a.title){
                    return 1;
                }
                return 0;
               })
               return {
                ...state,
                  recipes:ordenarArr               
            }
        
               case "ORDER_HEALT_SCORE":  
               let ordenarArrHs = action.payload === 'asc'? 
              // {elemento}=document.getElementById
               state.recipes.sort(function(a,b){
                if(a.healthScore > b.healthScore){
                    return 1;
                }
                if(b.healthScore > a.healthScore){
                    return -1;
                }
                return 0;
               }): 
                //if(action.payload === 'des_alf'){}
                state.recipes.sort(function(a,b){
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