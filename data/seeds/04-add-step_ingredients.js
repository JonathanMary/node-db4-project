exports.seed = function(knex, Promise) {
    return knex('step_ingredients').insert([
        { step_id: "2", ingredient_id: "1", quantity: 100 },
        { step_id: "3", ingredient_id: "2", quantity: 20 },
    ])
}