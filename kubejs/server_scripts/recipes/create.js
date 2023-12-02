ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:syrup').withAmount(20), [Fluid.water(10), 'minecraft:sugar']).heated()
})