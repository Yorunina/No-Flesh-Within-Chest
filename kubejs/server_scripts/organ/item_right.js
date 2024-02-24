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
        event.player.potionEffects.add('kubejs:burning_heart', duration, amplifier, false, false);
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
        event.player.potionEffects.add('kubejs:flaring_heart', duration, amplifier, false, false);
        event.player.removeEffect('kubejs:burning_heart')
        event.item.shrink(1);
    },
    'kubejs:redstone_furnace': function (event, organ) {
        if (event.item != 'minecraft:redstone_block') {
            return
        }
        let player = event.player
        let count = 100;
        if (player.persistentData.contains(resourceCount)) {
            count = player.persistentData.getInt(resourceCount) + count;
        }
        updateResourceCount(player, count)
        player.swing()
        player.addItemCooldown(event.item, 20 * 60)
        event.item.shrink(1)
    },
    'kubejs:revolution_steam_engine': function (event, organ) {
        let player = event.player
        if (event.item != Item.of('minecraft:potion', '{Potion:"minecraft:water"}')) {
            return
        }
        player.addItemCooldown(event.item, 20 * 20)
        let count = player.persistentData.getInt(resourceCount)
        if (player.hasEffect('kubejs:burning_heart')) {
            let effect = player.getEffect('kubejs:burning_heart')
            player.removeEffect('kubejs:burning_heart')
            player.potionEffects.add('kubejs:flaring_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
            updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
        } else if (player.hasEffect('kubejs:flaring_heart')) {
            let effect = player.getEffect('kubejs:flaring_heart')
            player.removeEffect('kubejs:flaring_heart')
            player.potionEffects.add('kubejs:burning_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
            updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
        } else {
            updateResourceCount(player, count + 25)
        }
        event.item.shrink(1)
        event.player.give(Item.of('minecraft:glass_bottle'))
    },
};