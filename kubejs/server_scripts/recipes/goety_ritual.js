function GoetyRitualRecipe(craftType, ingredients, activation_item, output) {
    this.type = 'goety:ritual'
    this.ritual_type = 'goety:craft'
    this.craftType = craftType
    this.activation_item = activation_item
    this.ingredients = ingredients
    this.result = output
    this.duration = 60
    this.soulCost = 100
}

GoetyRitualRecipe.prototype = {
    setDuration: function (duration) {
        this.duration = duration
        return this
    },
    setSoulCost: function (soulCost) {
        this.soulCost = soulCost
        return this
    },
    setRitualType: function (ritual_type) {
        this.ritual_type = ritual_type
        return this
    },
    setEntityToSacrifice: function (entity_to_sacrifice) {
        this.entity_to_sacrifice = entity_to_sacrifice
        return this
    },
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new GoetyRitualRecipe('lich', [Ingredient.of('hexerei:crow_ankh_amulet'),Ingredient.of('minecraft:nether_star'), Ingredient.of('minecraft:enchanted_golden_apple'), Ingredient.of('minecraft:totem_of_undying'), Ingredient.of('goety:soul_ruby'), Ingredient.of('nameless_trinkets:unknown_fragment'), Ingredient.of('irons_spellbooks:holy_rune'), Ingredient.of('kubejs:holy_eyeball'), Ingredient.of('minecraft:heart_of_the_sea'), Ingredient.of('unusualprehistory:ammonite_flask'), Ingredient.of('alexsmobs:soul_heart'), Ingredient.of('hexerei:selenite_shard')], Item.of('minecraft:glass_bottle'), Item.of('kubejs:holy_potion')).setSoulCost(1000))

    registerCustomRecipe(new GoetyRitualRecipe('lich', [Ingredient.of('kubejs:demon_eyeball'),Ingredient.of('minecraft:nether_star'), Ingredient.of('kubejs:leviathan_rib'), Ingredient.of('kubejs:parasitic_elf')], Item.of('kubejs:pandora_inactive'), Item.of('kubejs:pandora_active')).setSoulCost(1000))
    
})