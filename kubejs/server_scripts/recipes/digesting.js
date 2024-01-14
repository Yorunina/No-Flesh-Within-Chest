function DigestingRecipe(ingredient, output) {
    this.type = 'biomancy:digesting'
    this.ingredient = ingredient
    this.result = output
    this.nutrientsCost = 2
    this.processingTime = 20 * 8
}

DigestingRecipe.prototype = {
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

    registeCustomRecipe(new DigestingRecipe(Ingredient.of('#kubejs:organ'), Item.of('minecraft:dirt')))
    registeCustomRecipe(new DigestingRecipe(Ingredient.of('kubejs:heart_of_blade'), Item.of('kubejs:blade_of_heart')).setNutrientsCost(300).setProcessingTime(1200))
})