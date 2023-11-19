function MixingCauldronRecipe(ingredients, output) {
    this.type = 'hexerei:mixingcauldron'
    // 原料长度必须为8
    this.ingredients = ingredients
    this.output = output
    this.liquid = { fluid: 'minecraft:water' }
    this.liquidOutput = { fluid: 'minecraft:water' }
    this.fluidLevelsConsumed = 0
}

MixingCauldronRecipe.prototype = {
    setHeatRequirement: function (requirement) {
        this.heatRequirement = requirement
        return this
    },
    setFluid: function (fluid, amount) {
        this.liquid = { 'fluid': fluid }
        this.fluidLevelsConsumed = amount
        this.liquidOutput.fluid = { 'liquidOutput': fluid }
        return this
    },
    addHeatRequirement: function () {
        this.heatRequirement = 'heated'
        return this
    },
}

ServerEvents.recipes(event => {
    function registeCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registeCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone')], 
        Item.of('minecraft:stone')))
})

