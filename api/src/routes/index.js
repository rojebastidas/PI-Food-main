const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
//const Recipe = require('../models/Recipe');
//const Diet = require('../models/Diet');
const { Recipe, Diet } =require('../db');
const router = Router();
require ("dotenv").config();
const {API_KEY,API_KEY1} = process.env; 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async()=>{
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&addRecipeInformation=true&number=100`);
    //console.log(apiUrl.data.results.healthScore)
    //console.log(apiUrl.data.results.summary)

    //console.log(apiUrl.data.healthScore)
    const apiInfo = await apiUrl.data.results?.map(el=>{
        return{
            id: el.id,
            name: el.title,
            summary: el.summary,
            healthScore: el.healthScore,
            //steps: el.analyzedInstructions.map(e=> e.steps)
            steps: el.analyzedInstructions.map(e=> e.steps.map(elem=>elem.step))
            //diets: el.diets
            //diets: el.diets.map(el => el),
            //step: el.step,
            //diet: el.diet.map(el => el),

        };
        
    });
    //console.log(apiInfo);
    return apiInfo;
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

const getAllRecipes = async ()=> {
    const apiInfo=await getApiInfo();
    //const dbInfo = await getDbInfo();
    //const infoTotal = apiInfo.concat(dbInfo);
    return apiInfo;
}
router.get('/recipes',async(req,res)=>{
    const name=req.query.name
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
    console.log(idReceta);
    const recipesTotal = await getAllRecipes();
     if (idReceta){
            let recipeName = await recipesTotal.filter(elem => elem.id=idReceta) 
            recipeName.length ?
            res.status(200).send(recipeName) :
            res.status(404).send('No esta la receta');
        
     }else{
        res.status(200).send(recipesTotal)
    }
})
router.get('/diets',async(req,res)=>{
   const dietsApi=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&addRecipeInformation=true&number=100`); 
      const diet = dietsApi.data.results.map(el => el.diets);
   //console.log("diets-----------------------------",diets);
   const dietsVal=diet.map(el=> {
    for (let i=0; i<el.length; i++) return el[i]})
    //console.log("dietsVal --------------------------------------------",dietsVal)
    dietsVal.forEach(el=> {
        if(el){
            Diet.findOrCreate({
                where: {name: el}
            })
        }
    })
    const allDiets = await Diet.findAll();
    res.send(allDiets);

   })
    
   
module.exports = router;
