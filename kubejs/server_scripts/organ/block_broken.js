BlockEvents.broken('minecraft:stone', event => {
    let player = event.player;
    let itemMap = getPlayerChestCavityItemMap(player);
    if (itemMap.has('kubejs:ore_lung')) {
        organBlockBrokenStrategies['kubejs:ore_lung'](event, itemMap);
    }
})



let organBlockBrokenStrategies = {
    'kubejs:ore_lung': function (event, itemMap) {
        let player = event.player
        let count = 1;
        if (player.persistentData.contains('oreLungCount')) {
            count = player.persistentData.getInt('oreLungCount') + count;
        }
        if (count >= 64) {
            let luck = Math.max(player.getLuck(), 1)
            player.tell(luck)
            if (luck > 5) {
                player.give(Item.of('kubejs:rare_mineral_cluster').withCount(Math.max(Math.floor(5 - 30 / luck), 1) * itemMap.get('kubejs:ore_lung').length))
            }
            player.give(Item.of('kubejs:common_mineral_cluster').withCount(Math.max(Math.floor(5 - 5 / luck), 1) * itemMap.get('kubejs:ore_lung').length))
            count = 0
        }
        player.persistentData.putInt('oreLungCount', count)
    },
};