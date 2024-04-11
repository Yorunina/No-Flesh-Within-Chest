function WeaponInfusionRecipe(base, addition, output) {
    this.type = 'cataclysm:weapon_fusion'
    this.base = base
    this.addition = addition
    this.result = output
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new WeaponInfusionRecipe(Item.of('iceandfire:dragonsteel_fire_ingot'), Item.of('iceandfire:dread_shard'),Item.of('kubejs:dreadsteel_ingot')))
    registerCustomRecipe(new WeaponInfusionRecipe(Item.of('iceandfire:dragonsteel_ice_ingot'), Item.of('iceandfire:dread_shard'),Item.of('kubejs:dreadsteel_ingot')))
    registerCustomRecipe(new WeaponInfusionRecipe(Item.of('iceandfire:dragonsteel_lightning_ingot'), Item.of('iceandfire:dread_shard'),Item.of('kubejs:dreadsteel_ingot')))
})