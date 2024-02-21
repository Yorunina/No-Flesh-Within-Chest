function CuttingRecipe(ingredients, output) {
    this.type = 'farmersdelight:cutting'
    this.ingredients = ingredients
    this.result = output
    this.tool = { "tag": "forge:tools/knives" }
}

CuttingRecipe.prototype = {
    setTool: function (tool) {
        this.tool = tool
        return this
    }
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }
    event.remove({ output: 'minecraft:melon_slice', mod: 'farmersdelight' })

    registerCustomRecipe(new CuttingRecipe([Item.of('minecraft:melon')], [{ "count": 7, "item": "minecraft:melon_slice" }, { "chance": 0.05, "item": "kubejs:watermelon_organ" }]))

    registerCustomRecipe(new CuttingRecipe([Item.of('extradelight:sliced_ginger')], [{ "count": 1, "item": "extradelight:grated_ginger" }, { "chance": 0.2, "item": "extradelight:grated_ginger" }]))
})

