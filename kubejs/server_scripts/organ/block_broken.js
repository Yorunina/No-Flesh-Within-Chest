// priority: 10
BlockEvents.broken(event => {
    let player = event.player;
    if (!player) return;

    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:break')) {
        typeMap.get('kubejs:break').forEach(organ => {
            organBlockBrokenStrategies[organ.id](event)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:break_only')) {
        typeMap.get('kubejs:break_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organBlockBrokenOnlyStrategies[organ.id](event)
            }
        })
    }
})


const organBlockBrokenStrategies = {

};

const organBlockBrokenOnlyStrategies = {
    'kubejs:silk_for_cutting': function (event) {
        if (!event.block.item.hasTag('forge:glass')) {
            return
        }
        event.block.popItem(event.block.getItem())
        event.block.set('minecraft:air')
        event.cancel()
    },
    'kubejs:ore_lung': function (event) {
        if (!event.block.item.hasTag('forge:stone')) {
            return
        }
        let player = event.player
        let itemMap = getPlayerChestCavityItemMap(player)
        let count = 1;
        if (player.persistentData.contains(resourceCount)) {
            count = player.persistentData.getInt(resourceCount) + count;
        }
        if (count >= 64) {
            let luck = Math.max(player.getLuck(), 1)
            if (luck > 5) {
                player.give(Item.of('kubejs:rare_mineral_cluster').withCount(Math.max(Math.floor(5 - 30 / luck), 1) * itemMap.get('kubejs:ore_lung').length))
            }
            player.give(Item.of('kubejs:common_mineral_cluster').withCount(Math.max(Math.floor(5 - 5 / luck), 1) * itemMap.get('kubejs:ore_lung').length))
            count = 0
        }
        player.persistentData.putInt(resourceCount, count)
    },
}