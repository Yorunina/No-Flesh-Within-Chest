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
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('waystones:warp_dust'), Ingredient.of('minecraft:echo_shard'), Ingredient.of('minecraft:glowstone_dust'), Ingredient.of('#bookwyrms:scale')], Item.of('biomancy:unstable_compound'), Item.of('kubejs:ritual_catalyst').withCount(4)).setNutrientsCost(2).setProcessingTime(600))

    registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('waystones:warp_dust'), Ingredient.of('createaddition:diamond_grit'), Ingredient.of('minecraft:glowstone_dust'), Ingredient.of('#bookwyrms:scale')], Item.of('biomancy:exotic_compound'), Item.of('kubejs:ritual_catalyst').withCount(2)).setNutrientsCost(10).setProcessingTime(2400))
})
