ItemEvents.rightClicked(event => {
    let player = event.player;
    if (!player) return;
    let item = event.item;
    if (item.hasTag('minecraft:coals')) {
        let itemMap = getPlayerChestCavityItemMap(player)
        if (itemMap.has('kubejs:furnace_core')) {
            organRightClickedStrategies['kubejs:furnace_core'](event, itemMap)
            return;
        }
        if (itemMap.has('kubejs:burning_heart')) {
            organRightClickedStrategies['kubejs:burning_heart'](event, itemMap)
            return;
        }
    }
})

let organRightClickedStrategies = {
    'kubejs:furnace_core': function (event, itemMap) {
        let amplifier = 0
        if (itemMap.has('kubejs:revolution_gear')) {
            amplifier = Math.min(itemMap.get('kubejs:revolution_gear').length, 9)
        }

        event.player.potionEffects.add('kubejs:burning_heart', 20 * 20, amplifier);
        event.item.shrink(1);
    },
    'kubejs:burning_heart': function (event, itemMap) {
        let amplifier = 0
        if (itemMap.has('kubejs:revolution_gear')) {
            amplifier = Math.floor(itemMap.get('kubejs:revolution_gear').length / 2)
        }
        event.player.potionEffects.add('kubejs:flaring_heart', 20 * 20, amplifier);
        event.item.shrink(1);
    },
};