function BioForgingRecipe(ingredients, output) {
    this.type = 'biomancy:bio_forging'
    this.ingredients = ingredients
    this.result = output
    this.nutrientsCost = 1
    this.bio_forge_tab = 'biomancy:misc'
}

BioForgingRecipe.prototype = {
    setNutrientsCost: function (nutrientsCost) {
        this.nutrientsCost = nutrientsCost
        return this
    },
    setTab: function (tab) {
        this.bio_forge_tab = tab
        return this
    },
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 4, 'item': 'biomancy:tough_fibers' }, { 'count': 4, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:heart_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 8, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:lung_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 4, 'item': 'biomancy:tough_fibers' }, { 'count': 4, 'item': 'biomancy:elastic_fibers' }, { 'count': 4, 'item': 'biomancy:hormone_secretion' }], Item.of('kubejs:muscle_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 4, 'item': 'biomancy:tough_fibers' }, { 'count': 4, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:intestine_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 16, 'item': 'biomancy:bone_fragments' }], Item.of('kubejs:rib_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 4, 'item': 'biomancy:tough_fibers' }, { 'count': 4, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:spleen_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 2, 'item': 'biomancy:tough_fibers' }, { 'count': 12, 'item': 'biomancy:bone_fragments' }], Item.of('kubejs:spine_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 2, 'item': 'biomancy:tough_fibers' }, { 'count': 2, 'item': 'biomancy:elastic_fibers' }, { 'count': 2, 'item': 'biomancy:bile' }], Item.of('kubejs:stomach_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 4, 'item': 'biomancy:tough_fibers' }, { 'count': 4, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:kidney_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 4, 'item': 'biomancy:tough_fibers' }, { 'count': 4, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:liver_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 4, 'item': 'biomancy:flesh_bits' }, { 'count': 2, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:appendix_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 8, 'item': 'createaddition:iron_rod' }, { 'count': 1, 'item': 'kubejs:telescopic_arm' }], Item.of('kubejs:telescopic_arm')).setNutrientsCost(48).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 2, 'item': 'biomancy:regenerative_fluid' }, { 'count': 2, 'item': 'biomancy:hormone_secretion' }, { 'count': 6, 'item': 'biomancy:mob_marrow' }, { 'count': 8, 'item': 'createaddition:electrum_wire' }], Item.of('kubejs:platelet_dispatcher')).setNutrientsCost(48).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'minecraft:spider_eye' }, { 'count': 3, 'item': 'meetyourfight:phantoplasm' }, { 'count': 6, 'item': 'biomancy:exotic_compound' }], Item.of('kubejs:phantom_eyeball')).setNutrientsCost(60).setTab('biomancy:weapons'))
})