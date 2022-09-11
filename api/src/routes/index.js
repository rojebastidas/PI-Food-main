const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
//const Recipe = require('../models/Recipe');
//const Diet = require('../models/Diet');
const { Recipe, Diet } =require('../db');
const e = require('express');
const router = Router();
require ("dotenv").config();
const {API_KEY,API_KEY1,API_KEY2,API_KEY3,API_KEY4,API_KEY5,API_KEY6,API_KEY7,API_KEY8,API_KEY9,API_KEY10} = process.env; 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async()=>{
    try{
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY9}&addRecipeInformation=true&number=100`);
    //console.log(apiUrl.data.results.healthScore)
    //console.log("apiurl----------",apiUrl.data);
    
    //console.log(apiUrl.data.healthScore)
    const apiInfo = await apiUrl.data.results?.map(el=>{
         return{
            id: el.id,
            name: el.title,
            //title:el.title,
            summary: el.summary,
            healthScore: el.healthScore,
            //steps: el.analyzedInstructions.map(e=> e.steps)
            steps: el.analyzedInstructions?.map(e=> e.steps.map(elem=>elem.step + '* \n ')),
            //analizedInstructions:el.analyzedInstructions, 
            //diets: el.diets
            diets: el.diets?.map(e => e ),
            image: el.image,         
            //})  // .map(el => el),
            //step: el.step,
            //diet: el.diet.map(el => el),

        };
    
        
    });
    return apiInfo;
} catch(error){
    console.log("Error al traer la información de la api ",error);
} 
    //console.log(apiInfo);
    
}
const getDbInfo = async () => {
    return await Recipe.findAll({
        include:{
            model: Diet,
            attributes:['name'],
            through:{
                attributes:[],
            },
        }
    })
    
}
//toma la informacion de la api y la concatena con la de la base de datos
const getAllRecipes = async ()=> {
   try{
    const apiInfo=await getApiInfo();
   
    const dbInfo = await getDbInfo();
    
   const infoTotal = apiInfo.concat(dbInfo);
    //const infoTotal = dbInfo;
    //return apiInfo;
    return infoTotal;
   // console.log(dbInfo);
    //return dbInfo;
   } catch(error){
        console.log("Error al traer la información de la api mas la db");
   }
}
router.get('/recipes',async(req,res)=>{
    const name=req.query.name
    //const {name}=req.params
    const recipesTotal = await getAllRecipes();
     if (name){
       
            let recipeName = await recipesTotal.filter(elem => elem.name.toLowerCase().includes(name.toLowerCase())) 
            recipeName.length ?
             res.status(200).send(recipeName) :
             res.status(404).send('No esta la receta');
        
            
     }else{
        res.status(200).send(recipesTotal)
    }
})
router.get('/recipes/:idReceta',async(req,res)=>{
    const {idReceta}=req.params
    //console.log(idReceta);
    const recipesTotal = await getAllRecipes();

     if (idReceta){
            let recipeName = await recipesTotal.filter(elem => elem.id==idReceta) 
            recipeName.length ?
            res.status(200).send(recipeName) :
            res.status(404).send('No esta la receta');
        
     }else{
        res.status(200).send(recipesTotal)
    }
})
router.get('/recipes/:name',async(req,res)=>{
    const {name}=req.params
    //console.log(idReceta);
    const recipesTotal = await getAllRecipes();

     if (name){
            let recipeName = await recipesTotal.filter(elem => elem.name==name) 
            recipeName.length ?
            res.status(200).send(recipeName) :
            res.status(404).send('No esta la receta');
        
     }else{
        res.status(200).send(recipesTotal)
    }
})
//eliminar una receta
router.get('/recipes/:deleteId',async(req,res)=>{
    const {deleteId}=req.params
    //console.log(idReceta);
    const recipesTotal = await getAllRecipes();

     if (deleteId){
            let recipeId = await recipesTotal.filter(elem => elem.id===deleteId) 
            recipeId.length ?
            res.status(200).send(recipeId) :
            res.status(404).send('No esta la receta');
        
     }else{
        res.status(200).send(recipesTotal)
    }
})


router.get('/diets',async(req,res)=>{
   try{ 
    const dietsApi=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY9}&addRecipeInformation=true&number=100`); 
      const apiDiets = await dietsApi.data.results?.map(el => el.diets);
      apiDiets.forEach(elm=> {
        //console.log("elemenforeach",elm);
        if(elm){
            elm.map(elemen => {
                //console.log("elemj ",elemen);
              Diet.findOrCreate({
                        where: {name: elemen}
          
            })
         })
        }
    })
    const allDiets = await Diet.findAll();
    res.send(allDiets);
   }catch(error){
    console.log("Error al traer la información de diets ",error);
   }
   })
   router.post('/recipes', async(req,res)=>{
    try{
    let {
            name, 
            summary, 
            healthScore,
            steps,
            diets,
            image

    }=req.body
    
    let recipeCrea = await Recipe.create({
        name, 
        summary, 
        healthScore,
        steps,
        image
    }) 
    let dietsBd = await Diet.findAll({
        where: {name : diets }
    })
    recipeCrea.addDiet(dietsBd)
    res.send('Recipe adicionada correctamente')
    }catch(error){
        res.status(400).send("error al crear la receta")
    }
       
    })


    // router.get('recipes/:id',async (req,res)=>{
    //     const id = req.params.id;
    //     const recipesAll = await getAllRecipes();
    //     if (id){
    //         let recipeId = await recipesAll.filter(el=> el.id==id)
    //         recipeId.length?
    //           res.status(200).json(recipeId):
    //           res.status.apply(404).send('Recipe no encontrada')
    //     }

    //})
   
    
   
module.exports = router;
