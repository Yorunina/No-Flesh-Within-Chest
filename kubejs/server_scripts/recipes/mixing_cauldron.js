function MixingCauldronRecipe(ingredients, output) {
    this.type = 'hexerei:mixingcauldron'
    // 原料长度必须为8
    this.ingredients = ingredients
    this.output = output
    this.liquid = { fluid: 'minecraft:water' }
    this.liquidOutput = { fluid: 'minecraft:water' }
    this.fluidLevelsConsumed = 0
}
function MixingCauldronRecipeWithFluidNBTa(ingredients, output) {
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
MixingCauldronRecipeWithFluidNBTa.prototype = {
    setHeatRequirement: function (requirement) {
        this.heatRequirement = requirement
        return this
    },
    setFluid: function (fluid, amount, nbt) {
        this.liquid = { 'fluid': fluid , 'nbt': nbt}
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
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }
    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar')],
        Item.of('kubejs:scrap')).setFluid('minecraft:water', 500).setFluidOutput('kubejs:syrup'))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('kubejs:magic_muscle'), Ingredient.of('minecraft:enchanted_book'), Ingredient.of('waystones:warp_dust'), Ingredient.of('waystones:warp_dust'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('irons_spellbooks:arcane_essence'), Ingredient.of('irons_spellbooks:arcane_essence')],
        Item.of('kubejs:magic_hippocampus')))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:ink_sac'), Ingredient.of('hexerei:dried_yellow_dock_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle')],
        Item.of('irons_spellbooks:common_ink').withCount(4)).setFluid('minecraft:water', 1000))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('biomancy:healing_additive'), Ingredient.of('biomancy:healing_additive'), Ingredient.of('hexerei:mindful_trance_blend'), Ingredient.of('minecraft:golden_apple'), Ingredient.of('minecraft:golden_apple'), Ingredient.of('kubejs:active_pill'), Ingredient.of('kubejs:active_pill'), Ingredient.of('kubejs:active_pill')],
        Item.of('kubejs:long_lasting_pill').withCount(1)).setFluid('createaddition:bioethanol', 500).setFluidOutput('minecraft:water').addHeatRequirement())
        
    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('biomancy:cleansing_serum'), Ingredient.of('biomancy:cleansing_serum'), Ingredient.of('goety:soul_heal_focus'), Ingredient.of('goety:soul_heal_focus'), Ingredient.of('minecraft:enchanted_golden_apple'), Ingredient.of('iceandfire:sapphire_gem'), Ingredient.of('hexerei:mindful_trance_blend'), Ingredient.of('kubejs:long_lasting_pill')],
        Item.of('kubejs:long_lasting_pill_gold').withCount(1)).setFluid('hexerei:quicksilver_fluid', 500).addHeatRequirement())
        
    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar')],
        Item.of('extradelight:cheese').withCount(2)).setFluid('minecraft:water', 1000).setFluidOutput('kubejs:cream').addHeatRequirement())

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('kubejs:lime_powder'), Ingredient.of('kubejs:lime_powder')],
        Item.of('create:scoria').withCount(8)).setFluid('minecraft:lava', 1000).setFluidOutput('hexerei:quicksilver_fluid').addHeatRequirement())

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('biomancy:cleansing_serum'), Ingredient.of('irons_spellbooks:arcane_essence'), Ingredient.of('hexerei:moon_dust'), Ingredient.of('goety:ectoplasm'), Ingredient.of('hexerei:mindful_trance_blend'), Ingredient.of('goety:ectoplasm'), Ingredient.of('hexerei:moon_dust'), Ingredient.of('irons_spellbooks:arcane_essence')],
        Item.of('kubejs:purifying_bath_salts').withCount(3)).setFluid('minecraft:water', 1500).addHeatRequirement())
    
    registerCustomRecipe(new MixingCauldronRecipeWithFluidNBTa(
        [Ingredient.of('supplementaries:soap_block'), Ingredient.of('hexerei:animal_fat'), Ingredient.of('kubejs:purifying_bath_salts'), Ingredient.of('chestcavity:raw_rich_sausage'), Ingredient.of('kubejs:purifying_bath_salts'), Ingredient.of('chestcavity:raw_rich_human_sausage'), Ingredient.of('kubejs:purifying_bath_salts'), Ingredient.of('hexerei:animal_fat')],
        Item.of('kubejs:sanitizing_soap').withCount(1)).setFluid('hexerei:potion', 1000, '{"Bottle": "REGULAR","Potion":"minecraft:strong_regeneration"}').addHeatRequirement())

    registerCustomRecipe(new MixingCauldronRecipeWithFluidNBTa(
        [Ingredient.of('unusualprehistory:ginkgo_wood'), Ingredient.of('minecraft:birch_sapling'), Ingredient.of('kubejs:purifying_bath_salts'), Ingredient.of('kubejs:soul_piece'), Ingredient.of('hexerei:quicksilver_bottle'), Ingredient.of('kubejs:soul_piece'), Ingredient.of('kubejs:purifying_bath_salts'), Ingredient.of('create:crushed_raw_silver')],
        Item.of('kubejs:mini_silverwood').withCount(1)).setFluid('hexerei:potion', 1000, '{"Bottle": "LINGERING","Potion":"irons_spellbooks:instant_mana_four"}').addHeatRequirement())

    registerCustomRecipe(new MixingCauldronRecipeWithFluidNBTa(
        [Ingredient.of('kubejs:silverwood_heart'), Ingredient.of('kubejs:god_bless_full_necklace'), Ingredient.of('irons_spellbooks:arcane_essence'), Ingredient.of('kubejs:purifying_bath_salts'), Ingredient.of('kubejs:polished_amber'), Ingredient.of('kubejs:purifying_bath_salts'), Ingredient.of('irons_spellbooks:arcane_essence'), Ingredient.of('kubejs:empty_organ_charm')],
        Item.of('kubejs:silverheart_charm').withCount(1)).setFluid('hexerei:potion', 1000, '{"Bottle": "LINGERING","Potion":"minecraft:strong_regeneration"}').setFluidOutput('minecraft:water').addHeatRequirement())
})
