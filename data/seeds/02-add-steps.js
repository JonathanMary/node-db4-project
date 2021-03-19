exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        { step_number: 1, recipe_id: 1, step_instructions: "Boil water." },
        { step_number: 2, recipe_id: 1, step_instructions: "Add pastas." },
        { step_number: 3, recipe_id: 1, step_instructions: "Put some butter." },
    ])
}