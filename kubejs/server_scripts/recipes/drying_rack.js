function DryingRackRecipe(ingredients, output, dryingTimeInTicks) {
    this.type = 'hexerei:drying_rack'
    this.ingredients = ingredients
    this.output = output
    this.dryingTimeInTicks = dryingTimeInTicks
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new DryingRackRecipe([Ingredient.of('minecraft:redstone')], Item.of('minecraft:dirt'), 20 * 120))

    registerCustomRecipe(new DryingRackRecipe([Ingredient.of('kubejs:magic_spine')], Item.of('kubejs:magic_muscle'), 20 * 600))
})

