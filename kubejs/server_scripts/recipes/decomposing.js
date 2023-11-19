function DecomposingRecipe(ingredient, output) {
    this.type = 'biomancy:decomposing'
    this.ingredient = ingredient
    this.results = output
    this.nutrientsCost = 2
    this.processingTime = 20 * 8
}

DecomposingRecipe.prototype = {
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

    registeCustomRecipe(new DecomposingRecipe(Ingredient.of('#kubejs:organ'), [{"countRange":{"type":"uniform","max":5,"min":2},"item":"biomancy:organic_matter"}]))
})