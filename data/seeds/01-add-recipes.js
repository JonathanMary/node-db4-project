exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Pates au beurre', created_at: Date() },
    ])
}