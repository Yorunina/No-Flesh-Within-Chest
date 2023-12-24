// priority: 10
EntityEvents.hurt(event => {
    let damageSourcePlayer = event.source.player;
    if (!damageSourcePlayer) return;

    let itemMap = getPlayerChestCavityItemMap(damageSourcePlayer);
    if (itemMap.has('kubejs:infinity_beats')) {
        organEntityHurtStrategies['kubejs:infinity_beats'](event)
    }

})

EntityEvents.hurt('minecraft:player', event => {
    let player = event.player;
    if (!player) return;
    let itemMap = getPlayerChestCavityItemMap(player);

    if (event.getDamage() > player.getHealth() && itemMap.has('kubejs:doppelganger')) {
        organEntityHurtStrategies['kubejs:doppelganger'](event)
    }
})


const organEntityHurtStrategies = {
    'kubejs:infinity_beats': function (event) {
        let damageSourcePlayer = event.source.player;
        let attriMap = getPlayerAttributeMap(damageSourcePlayer);
        if (!damageSourcePlayer.hasItemInSlot('mainhand') && !damageSourcePlayer.hasItemInSlot('offhand') &&
            !damageSourcePlayer.hasItemInSlot('chest')) {
            let value = 2;
            if (attriMap.has(global.TEMP_ATTACK_UP.name)) {
                value = value + attriMap.get(global.TEMP_ATTACK_UP.name)
            }
            attriMap.set(global.TEMP_ATTACK_UP.name, value)
            damageSourcePlayer.modifyAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name, value, global.TEMP_ATTACK_UP.operation);
            setPlayerAttributeMap(damageSourcePlayer, attriMap);
            damageSourcePlayer.attack(value);
        } else {
            damageSourcePlayer.removeAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name);
            attriMap.set(global.TEMP_ATTACK_UP.name, 0);
            setPlayerAttributeMap(damageSourcePlayer, attriMap);
        }
    },
    'kubejs:doppelganger': function (event) {
        let typeMap = getPlayerChestCavityTypeMap(event.player)
        if (typeMap.has('kubejs:legends')) {
            let player = event.player;
            let amount = typeMap.get('kubejs:legends').length
            if (Math.random() < Math.min(0.25 + 0.05 * amount, 0.8)) {
                player.potionEffects.add('minecraft:absorption', 60, 2)
            }
        }
    }
};