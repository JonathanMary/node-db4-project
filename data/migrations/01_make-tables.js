exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name').notNullable().unique()
            table.datetime('created_at')
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name').notNullable().unique()
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.integer('recipe_id').references('recipe_id').inTable('recipes')
            table.integer('step_number').unsigned()
            table.string('step_instructions').notNullable()
        })
        .createTable('step_ingredients', table => {
            table.increments('step_ingredient_id')
            table.integer('step_id').references('step_id').inTable('steps')
            table.integer('ingredient_id').references('ingredient_id').inTable('ingredients')
            table.decimal('quantity')
        })
}

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
}