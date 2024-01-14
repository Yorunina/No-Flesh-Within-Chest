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
    function registeCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }
    event.remove({ output: 'minecraft:melon_slice', mod: 'farmersdelight' })
    
    registeCustomRecipe(new CuttingRecipe([Item.of('minecraft:melon')], [{ "count": 7, "item": "minecraft:melon_slice" }, { "chance": 0.05, "item": "kubejs:watermelon_organ" }]))
})

