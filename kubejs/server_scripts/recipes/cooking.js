const COOKING_MEALS = 'meals'
const COOKING_DRINKS = 'drinks'
const COOKING_MISC = 'misc'

function CookingRecipe(container, ingredients, output) {
    this.type = 'farmersdelight:cooking'
    this.container = container
    this.cookingtime = 200
    this.experience = 1.0
    this.ingredients = ingredients
    this.result = output
    this.recipe_book_tab = COOKING_MISC
}

CookingRecipe.prototype = {
    setRecipeBookTab: function (recipeBookTab) {
        this.recipe_book_tab = recipeBookTab
        return this
    },
    setCookingtime: function (cookingtime) {
        this.cookingtime = cookingtime
        return this
    },
    setExperience: function (experience) {
        this.experience = experience
        return this
    },
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new CookingRecipe(Item.of(''), [Item.of('minecraft:sugar'), Item.of('minecraft:egg')], Item.of('kubejs:cream')).setCookingtime(60 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of('minecraft:paper'), [Item.of('minecraft:sugar')], Item.of('kubejs:candy').withCount(4)).setCookingtime(5 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of('minecraft:paper'), [Item.of('minecraft:sugar'), Item.of('minecraft:ice')], Item.of('kubejs:ice_candy').withCount(4)).setCookingtime(6 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of('minecraft:paper'), [Item.of('minecraft:sugar'), Item.of('minecraft:clay_ball')], Item.of('kubejs:water_candy').withCount(4)).setCookingtime(6 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of('minecraft:paper'), [Item.of('minecraft:sugar'), Item.of('minecraft:blaze_powder')], Item.of('kubejs:fire_candy').withCount(4)).setCookingtime(6 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of('minecraft:paper'), [Item.of('minecraft:sugar'), Item.of('hexerei:mandrake_flowers')], Item.of('kubejs:wind_candy').withCount(4)).setCookingtime(6 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of('minecraft:stick'), [Item.of('extradelight:flour'), Item.of('extradelight:flour'), Item.of('extradelight:flour'), Item.of('farmersdelight:minced_beef')], Item.of('kubejs:starch_sausage').withCount(2)).setCookingtime(30 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of('minecraft:bowl'), [Ingredient.of('#kubejs:lung'), Ingredient.of('#kubejs:lung'), Item.of('extradelight:cooking_oil'), Item.of('extradelight:grated_ginger')], Item.of('kubejs:mr_and_mrs_smith').withCount(1)).setCookingtime(60 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of(''), [Ingredient.of('#kubejs:intestine'), Ingredient.of('#forge:ginger/grated'), Ingredient.of('#forge:cooking_oil'), Ingredient.of('#forge:vinegar'), Item.of('minecraft:sugar'), Item.of('extradelight:cinnamon_bark')], Item.of('kubejs:brown_sauce_braised_intestines').withCount(1)).setCookingtime(60 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of(''), [Item.of('extradelight:candy_cane_red_block'), Item.of('extradelight:candy_cane_green_block'), Item.of('extradelight:candy_cane_blue_block')], Item.of('kubejs:candy_canes_wand').withCount(1)).setCookingtime(60 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of(''), [Item.of('chestcavity:small_animal_heart'), Item.of('extradelight:breading_misanplas'), Item.of('meetyourfight:velvet_fortune'), Item.of('kubejs:chicken_flavor_powder')], Item.of('kubejs:chicken_heart')).setCookingtime(45 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of(''), [Item.of('chestcavity:small_animal_kidney'), Item.of('extradelight:breading_misanplas'), Item.of('meetyourfight:velvet_fortune'), Item.of('kubejs:chicken_flavor_powder')], Item.of('kubejs:chicken_kidney')).setCookingtime(45 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of(''), [Item.of('chestcavity:small_animal_lung'), Item.of('extradelight:breading_misanplas'), Item.of('meetyourfight:velvet_fortune'), Item.of('kubejs:chicken_flavor_powder')], Item.of('kubejs:chicken_lung')).setCookingtime(45 * 20))

    registerCustomRecipe(new CookingRecipe(Item.of(''), [Item.of('chestcavity:small_animal_muscle'), Item.of('extradelight:breading_misanplas'), Item.of('meetyourfight:velvet_fortune'), Item.of('kubejs:chicken_flavor_powder')], Item.of('kubejs:chicken_strip')).setCookingtime(45 * 20))
})