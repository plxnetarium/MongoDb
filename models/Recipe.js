const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true,
        maxLength: 100,
        minLength: 2
    },
    instructions:{
        type: [String]

    },
    prepTime:{
        type: Number,
        minLength: 5,
        maxLength: 500,
        require: true
    },
    difficulty:{
        type: String,
        enum:['Easy','Medium','Hard']
    }

})
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe