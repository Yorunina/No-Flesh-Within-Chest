BlockEvents.broken('#forge:stone', event => {
    let player = event.player;
    if (!player) return;
    let itemMap = getPlayerChestCavityItemMap(player);
    if (itemMap.has('kubejs:ore_lung')) {
        organBlockBrokenStrategies['kubejs:ore_lung'](event, itemMap);
    }
})


BlockEvents.broken('#forge:glass', event => {
    let player = event.player;
    if (!player) return;
    let itemMap = getPlayerChestCavityItemMap(player);
    
    if (itemMap.has('kubejs:silk_for_cutting')) {
        organBlockBrokenStrategies['kubejs:silk_for_cutting'](event, itemMap);

    }
})


let organBlockBrokenStrategies = {
    'kubejs:ore_lung': function (event, itemMap) {
        let player = event.player
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
    'kubejs:silk_for_cutting': function (event, itemMap) {
        if (event.block > 0) {
            return
        }
        event.block.popItem(event.block.getItem())
        event.block.set('minecraft:air')
        event.cancel()
    },
};