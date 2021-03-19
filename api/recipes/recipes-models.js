const db = require('../../data/db.config')

const getRecipeById = async (recipe_id) => {
const recipeRaw = await db('recipes')
    .join('steps', 'recipes.recipe_id', 'steps.recipe_id')
    .leftJoin('step_ingredients', 'steps.step_id', 'step_ingredients.step_id')
    .leftJoin('ingredients', 'ingredients.ingredient_id', 'step_ingredients.ingredient_id')
    .where('recipes.recipe_id', recipe_id)


const steps = recipeRaw.map(step => {
    if(!step["ingredient_id"]){
        return {
            "step_id": step["step_id"],
            "step_number": step["step_number"],
            "step_instructions": step["step_instructions"],
            "ingredients": [],
        }
    } else {
        return {
            "step_id": step["step_id"],
            "step_number": step["step_number"],
            "step_instructions": step["step_instructions"],
            "ingredients": [
                {
                    "ingredient_id": step["ingredient_id"],
                    "ingredient_name": step["ingredient_name"],
                    "quantity": step["quantity"]
                },
            ],
        }
    }
})

    const recipe = {
        "recipe_id" : recipe_id,
        "recipe_name": recipeRaw[0]["recipe_name"],
        "created_at": recipeRaw[0]["created_at"],
        "steps": steps,
        }
    
    return recipe;
}







module.exports = {
    getRecipeById
}