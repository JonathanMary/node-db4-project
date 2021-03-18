exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: "pastas" },
        { ingredient_name: "butter" },
    ])
}