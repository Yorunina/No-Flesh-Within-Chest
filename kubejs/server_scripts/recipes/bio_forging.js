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

ServerEvents.highPriorityData(event => {
    function registerCustomRecipe(recipeModel) {
        let id = recipeModel.result.id.toString()
        let item = id.split(':')[1]
        event.addJson(`kubejs:recipes/bio_forging/${item}.json`, recipeModel)
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

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'nameless_trinkets:lucky_rock' }, { 'count': 1, 'item': 'meetyourfight:slicers_dice' }, { 'count': 4, 'item': 'biomancy:withered_mob_marrow' }], Item.of('kubejs:d8')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 4, 'item': 'biomancy:flesh_bits' }, { 'count': 2, 'item': 'biomancy:elastic_fibers' }], Item.of('kubejs:appendix_template')).setNutrientsCost(32).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 8, 'item': 'biomancy:flesh_bits' }, { 'count': 8, 'item': 'createaddition:iron_rod' }, { 'count': 1, 'item': 'create:brass_hand' }], Item.of('kubejs:telescopic_arm')).setNutrientsCost(48).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 2, 'item': 'biomancy:regenerative_fluid' }, { 'count': 2, 'item': 'biomancy:hormone_secretion' }, { 'count': 6, 'item': 'biomancy:mob_marrow' }, { 'count': 8, 'item': 'createaddition:electrum_wire' }], Item.of('kubejs:platelet_dispatcher')).setNutrientsCost(48).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'minecraft:spider_eye' }, { 'count': 4, 'item': 'createaddition:gold_wire' }, { 'count': 2, 'item': 'createaddition:zinc_sheet' }, { 'count': 8, 'item': 'biomancy:gem_fragments' }, { 'count': 4, 'item': 'biomancy:bio_lumens' }], Item.of('kubejs:lowlight_vision')).setNutrientsCost(48).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'minecraft:spider_eye' }, { 'count': 1, 'item': 'kubejs:soul_piece' }, { 'count': 6, 'item': 'biomancy:exotic_compound' }], Item.of('kubejs:holy_eyeball')).setNutrientsCost(60).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'chestcavity:creeper_appendix' }, { 'count': 1, 'item': 'minecraft:creeper_head' }, { 'count': 8, 'item': 'biomancy:volatile_fluid' }, { 'count': 16, 'item': 'minecraft:gunpowder' }], Item.of('kubejs:excited_appendix')).setNutrientsCost(60).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'kubejs:stomach_template' }, { 'count': 2, 'item': 'biomancy:enlargement_serum' }, { 'count': 16, 'item': 'biomancy:malignant_flesh_veins' }, { 'count': 8, 'item': 'biomancy:nutrient_bar' }], Item.of('kubejs:stomach_tumor')).setNutrientsCost(40).setTab('biomancy:weapons'))

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'kubejs:stomach_template' }, { 'count': 4, 'item': 'lightmanscurrency:coinpile_gold' }, { 'count': 16, 'item': 'create:experience_block' }], Item.of('kubejs:greedy_stomach')).setNutrientsCost(40).setTab('biomancy:weapons'))
});