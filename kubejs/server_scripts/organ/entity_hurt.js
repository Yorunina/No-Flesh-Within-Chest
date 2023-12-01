// priority: 10
EntityEvents.hurt(event => {
    let damageSourcePlayer = event.source.player;
    if (damageSourcePlayer) {
        let itemMap = getPlayerChestCavityItemMap(event);
        if (itemMap.has('kubejs:infinite_beats')) {
            organEntityHurtStrategies['kubejs:infinite_beats'](event)
        }
    }
})


EntityEvents.hurt('minecraft:player', event => {
    let itemMap = getPlayerChestCavityItemMap(damageSourcePlayer);
    if (event.getDamage() > 10 && itemMap.has('kubejs:magic_hippocampus')) {
        organEntityHurtStrategies['kubejs:magic_hippocampus'](event)
    }
})



let organEntityHurtStrategies = {
    'kubejs:infinite_beats': function (event) {
        let damageSourcePlayer = event.source.player;
        let attriMap = getPlayerAttributeMap(damageSourcePlayer);
        if (!damageSourcePlayer.hasItemInSlot('mainhand') && !damageSourcePlayer.hasItemInSlot('offhand') &&
            !damageSourcePlayer.hasItemInSlot('chest')) {
            let value = 2;
            if (attriMap.has(global.ATTACK_UP.name)) {
                value = value + attriMap.get(global.ATTACK_UP.name)
            }
            attriMap.set(global.ATTACK_UP.name, value)
            damageSourcePlayer.modifyAttribute(global.ATTACK_UP.key, global.ATTACK_UP.name, value, global.ATTACK_UP.operation);
            setPlayerAttributeMap(damageSourcePlayer, attriMap);
            damageSourcePlayer.attack(value);
        } else {
            damageSourcePlayer.removeAttribute(global.ATTACK_UP.key, global.ATTACK_UP.name);
            attriMap.set(global.ATTACK_UP.name, 0);
            setPlayerAttributeMap(damageSourcePlayer, attriMap);
        }
    },
    'kubejs:magic_hippocampus': function (event) {
        let durationMuti = 1;
        let itemMap = getPlayerChestCavityItemMap(damageSourcePlayer);
        if (itemMap.has('kubejs:magic_muscle')) {
            durationMuti = durationMuti + itemMap.get('kubejs:magic_muscle').length
        }
        if (!event.player.hasEffect('kubejs:sweet_dream')) {
            event.player.potionEffects.add('kubejs:sweet_dream', 20 * 5 * durationMuti, 0);
        }
    }
};