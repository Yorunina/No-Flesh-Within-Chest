// priority: 10
ItemEvents.rightClicked(event => {
    let player = event.player;
    if (!player) return;

    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:rclick')) {
        typeMap.get('kubejs:rclick').forEach(organ => {
            organRightClickedStrategies[organ.id](event)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:rclick_only')) {
        typeMap.get('kubejs:rclick_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organRightClickedOnlyStrategies[organ.id](event)
            }
        })
    }
})


const organRightClickedStrategies = {

}

const organRightClickedOnlyStrategies = {
    'kubejs:furnace_core': function (event) {
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
    'kubejs:burning_heart': function (event) {
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
};