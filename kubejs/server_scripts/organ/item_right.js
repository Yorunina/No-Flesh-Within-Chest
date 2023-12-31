// priority: 10
ItemEvents.rightClicked(event => {
    let player = event.player;
    if (!player) return;

    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:rclick')) {
        typeMap.get('kubejs:rclick').forEach(organ => {
            organRightClickedStrategies[organ.id](event, organ)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:rclick_only')) {
        typeMap.get('kubejs:rclick_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organRightClickedOnlyStrategies[organ.id](event, organ)
            }
        })
    }
})

/**
 * 器官右键事件策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const organRightClickedStrategies = {

}

/**
 * 器官右键事件唯一策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const organRightClickedOnlyStrategies = {
    'kubejs:furnace_core': function (event, organ) {
        if (!event.item.hasTag('minecraft:coals')) {
            return
        }
        let itemMap = getPlayerChestCavityItemMap(event.player)
        let amplifier = 0
        let duration = 20 * 20
        if (itemMap.has('kubejs:revolution_gear')) {
            amplifier = Math.min(itemMap.get('kubejs:revolution_gear').length, 9)
        }
        if (itemMap.has('kubejs:revolution_relay')) {
            duration = duration + itemMap.get('kubejs:revolution_relay').length * 100
        }
        if (itemMap.has('kubejs:revolution_delay')) {
            duration = Math.max(duration - itemMap.get('kubejs:revolution_delay').length * 40, 20 * 8)
        }
        event.player.swing()
        event.player.potionEffects.add('kubejs:burning_heart', duration, amplifier);
        event.player.removeEffect('kubejs:flaring_heart')
        event.item.shrink(1);
    },
    'kubejs:burning_heart': function (event, organ) {
        if (!event.item.hasTag('minecraft:coals')) {
            return
        }
        let itemMap = getPlayerChestCavityItemMap(event.player)
        let amplifier = 0
        let duration = 20 * 20
        if (itemMap.has('kubejs:revolution_gear')) {
            amplifier = Math.floor(itemMap.get('kubejs:revolution_gear').length / 2)
        }
        if (itemMap.has('kubejs:revolution_relay')) {
            duration = duration + itemMap.get('kubejs:revolution_relay').length * 100
        }
        if (itemMap.has('kubejs:revolution_delay')) {
            duration = Math.max(duration - itemMap.get('kubejs:revolution_delay').length * 60, 20 * 8)
        }
        event.player.swing()
        event.player.potionEffects.add('kubejs:flaring_heart', duration, amplifier);
        event.player.removeEffect('kubejs:burning_heart')
        event.item.shrink(1);
    },
    'kubejs:redstone_furnace': function (event, organ) {
        if (event.item != 'minecraft:redstone_block') {
            return
        }
        let player = event.player
        let count = 80;
        if (player.persistentData.contains(resourceCount)) {
            count = player.persistentData.getInt(resourceCount) + count;
        }
        updateResourceCount(player, count)
        player.swing()
        player.addItemCooldown(event.item, 20 * 60)
        event.item.shrink(1);
    },
};