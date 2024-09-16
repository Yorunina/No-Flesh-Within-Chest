ServerEvents.recipes(event => {
    event.shapeless('kubejs:organ_charm', ['kubejs:empty_organ_charm', '#kubejs:organ'])
        .modifyResult((grid, stack) => {
            let organ = grid.find('#kubejs:organ', 0)
            stack = Item.of('kubejs:organ_charm', {})
            if (global.organCharmNbtMap[organ.id]) {
                stack.nbt.merge(global.organCharmNbtMap[organ.id])
            }
            stack.nbt.merge({ organ: { id: organ.id, tag: organ.nbt } })
            return stack;
        });

    event.shapeless('chestcavity:appendix', ['kubejs:organ_charm'])
        .replaceIngredient('kubejs:organ_charm', 'kubejs:empty_organ_charm')
        .modifyResult((grid, stack) => {
            let charm = grid.find('kubejs:organ_charm', 0)
            if (charm.nbt?.organ) {
                stack = Item.of(charm.nbt.organ.id, charm.nbt.organ.tag)
            }
            return stack;
        });
})