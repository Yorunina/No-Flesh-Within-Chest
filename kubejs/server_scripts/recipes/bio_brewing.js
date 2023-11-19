function BioBrewingRecipe(ingredients, reactant, output) {
    this.type = 'biomancy:bio_brewing'
    this.ingredients = ingredients
    this.result = output
    this.nutrientsCost = 2
    this.processingTime = 20 * 8
    this.reactant = reactant
}

BioBrewingRecipe.prototype = {
    setNutrientsCost: function (nutrientsCost) {
        this.nutrientsCost = nutrientsCost
        return this
    },
    setProcessingTime: function (processingTime) {
        this.processingTime = processingTime
        return this
    },
}

ServerEvents.recipes(event => {
    function registeCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registeCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone')], Item.of('minecraft:stone'), Item.of('minecraft:dirt')))
})

