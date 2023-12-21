ServerEvents.recipes(event => {
    event.shapeless('kubejs:organ_charm', ['kubejs:empty_organ_charm', '#kubejs:organ'])
        .modifyResult((grid, stack) => {
            let organ = grid.find('#kubejs:organ', 0)
            stack = Item.of('kubejs:organ_charm', {})
            if (organCharmNbtMap[organ.id]) {
                stack.nbt.merge(organCharmNbtMap[organ.id])
            }
            stack.nbt.merge({ organ: { id: organ.id, tag: organ.nbt } })
            return stack;
        });

    event.shapeless('kubejs:organ_charm', ['kubejs:empty_organ_charm', '#chestcavity:salvageable'])
        .modifyResult((grid, stack) => {
            let organ = grid.find('#chestcavity:salvageable', 0)
            stack = Item.of('kubejs:organ_charm', {})
            if (organCharmNbtMap[organ.id]) {
                stack.nbt.merge(organCharmNbtMap[organ.id])
            }
            stack.nbt.merge({ organ: { id: organ.id, tag: organ.tag } })
            return stack;
        });

    event.shapeless('chestcavity:appendix', ['kubejs:organ_charm'])
        .replaceIngredient('kubejs:organ_charm', 'kubejs:empty_organ_charm')
        .modifyResult((grid, stack) => {
            let charm = grid.find('kubejs:organ_charm', 0)
            if (charm.nbt && charm.nbt.organ) {
                stack = Item.of(charm.nbt.organ.id, charm.nbt.organ.tag)
            }
            return stack;
        });

})

let organCharmNbtMap = {
    'kubejs:muscle_iron': { type: 'kill', killTask: { mobType: 'minecraft:zombie', killAmount: 5, mobName: 'entity.minecraft.zombie', counter: 0 }, targetOrgan: 'kubejs:muscle_gold' }
}
