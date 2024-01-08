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
        return this
    },
    setFluidOutput: function (fluid) {
        this.liquidOutput = { 'fluid': fluid }
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
        [Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:ingots/gold'), Ingredient.of('#bookwyrms:scale'), Ingredient.of('minecraft:redstone'), Ingredient.of('hexerei:dried_sage'), Ingredient.of('hexerei:dried_sage'), Ingredient.of('hexerei:dried_mandrake_flowers'), Ingredient.of('hexerei:dried_mandrake_flowers')],
        Item.of('kubejs:silver_ingot').withCount(4)))

    registeCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('kubejs:lucky_appendix'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone')],
        Item.of('kubejs:health_appendix')))

    registeCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar')],
        Item.of('kubejs:scrap')).setFluid('minecraft:water', 20).setFluidOutput('kubejs:syrup'))

    registeCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('kubejs:magic_muscle'), Ingredient.of('minecraft:enchanted_book'), Ingredient.of('waystones:warp_dust'), Ingredient.of('waystones:warp_dust'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('irons_spellbooks:arcane_essence'), Ingredient.of('irons_spellbooks:arcane_essence')],
        Item.of('kubejs:magic_hippocampus')))

    registeCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:ink_sac'), Ingredient.of('hexerei:dried_yellow_dock_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle')],
        Item.of('irons_spellbooks:common_ink').withCount(4)).setFluid('minecraft:water', 1000))
})
