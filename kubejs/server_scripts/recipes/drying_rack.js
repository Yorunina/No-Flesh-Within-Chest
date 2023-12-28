function DryingRackRecipe(ingredients, output, dryingTimeInTicks) {
    this.type = 'hexerei:drying_rack'
    this.ingredients = ingredients
    this.output = output
    this.dryingTimeInTicks = dryingTimeInTicks
}

ServerEvents.recipes(event => {
    function registeCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registeCustomRecipe(new DryingRackRecipe([Ingredient.of('minecraft:redstone')], Item.of('minecraft:dirt'), 20 * 120))
    registeCustomRecipe(new DryingRackRecipe([Ingredient.of('kubejs:magic_spine')], Item.of('kubejs:magic_muscle'), 20 * 600))
})

