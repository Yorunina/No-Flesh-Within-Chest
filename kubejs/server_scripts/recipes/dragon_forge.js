function DragonForgeRecipe(input, blood, output, dragonType) {
    this.type = 'iceandfire:dragonforge'
    this.input = input
    this.blood = blood
    this.result = output
    this.dragon_type = dragonType
    this.cook_time = 1000
}

DragonForgeRecipe.prototype = {
    setCookTime: function (cookTime) {
        this.cook_time = cookTime
        return this
    },

}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:lung_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_lung'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:muscle_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_muscle'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:heart_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_heart'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:intestine_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_intestine'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:rib_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_rib'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spine_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_spine'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spleen_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_spleen'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:stomach_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_stomach'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:kidney_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_kidney'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:liver_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_liver'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:appendix_template'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_appendix'), 'lightning'))

    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:lung_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_lung'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:muscle_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_muscle'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:heart_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_heart'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:intestine_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_intestine'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:rib_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_rib'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spine_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_spine'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spleen_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_spleen'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:stomach_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_stomach'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:kidney_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_kidney'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:liver_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_liver'), 'fire'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:appendix_template'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:dragon_blood_appendix'), 'fire'))

    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:lung_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_lung'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:muscle_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_muscle'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:heart_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_heart'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:intestine_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_intestine'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:rib_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_rib'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spine_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_spine'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spleen_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_spleen'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:stomach_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_stomach'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:kidney_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_kidney'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:liver_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_liver'), 'ice'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:appendix_template'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:dragon_blood_appendix'), 'ice'))

})