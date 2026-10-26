const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')


async function connectToDB() { //connection to the database
    try {
        await mongoose.connect("mongodb://localhost:27017/lab") // <----- PUT YOUR DATABASE CONNECTION STRING HERE
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


connectToDB() // connect to database

async function createRecipe(newRecipe) {
    try{
        return await Recipe.create(newRecipe)
    }
    catch(err){
        console.log("Failed to create recipe.")
    }
}
 
// //createRecipe({
//         name: "Um Ali",
//         instructions: "bake at 180C",
//         prepTime: 120,
//         difficulty: "Medium"
//     }
// )
async function getAllRecipes(){
        const allRecipes = await Recipe.find()
        console.log(allRecipes)
    
}
getAllRecipes()

async function getOneRecipeByItsID() {
    const foundRecipe = await Recipe.findById('6adf48f398911858092cbf02') 
    console.log(Recipe)
}
getOneRecipeByItsID()

async function updateOneRecipeByItsId(recipeID, newRecipeData){
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeID, newRecipeData, {new:true}) 
    console.log(updatedRecipe)
}
updateOneRecipeByItsId('6adf48f398911858092cbf02',{prepTime: 100})

async function deleteOneRecipeByItsId() {
    const deleteRecipe = await Recipe.findByIdAndDelete("6adf492f392f87cde02bbd57")
    console.log('Recipe successfully deleted.')
    
}
deleteOneRecipeByItsId()