const db = require('../../data/db.config')

const getRecipeById = (recipe_id) => {
return db('recipes')
    .join('steps', 'recipes.recipe_id', 'steps.recipe_id')
    /*.leftJoin('step_ingredients', 'step_ingredients.step_id', 'step.step_id')
    .leftJoin('ingredients', 'ingredients.ingredient_id', 'step_ingredients.ingredient_id')*/
    .where('recipes.recipe_id', recipe_id)
}







module.exports = {
    getRecipeById
}