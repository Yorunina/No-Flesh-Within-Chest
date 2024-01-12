const COOKING_MEALS = 'meals'
const COOKING_DRINKS = 'drinks'
const COOKING_MISC = 'misc'

function CookingRecipe(ingredients, output) {
    this.type = 'farmersdelight:cooking'
    this.cookingtime = 200
    this.experience = 1.0
    this.ingredients = ingredients
    this.result = output
    this.recipe_book_tab = COOKING_MISC
}

CookingRecipe.prototype = {
    setRecipeBookTab: function (recipeBookTab) {
        this.recipe_book_tab = recipeBookTab
        return this
    },
    setCookingtime: function (cookingtime) {
        this.cookingtime = cookingtime
        return this
    },
    setExperience: function (experience) {
        this.experience = experience
        return this
    },
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new CookingRecipe([Item.of('minecraft:sugar'), Item.of('minecraft:egg')], Item.of('kubejs:cream')).setCookingtime(60 * 20))
})