EntityEvents.hurt(event => {
    let damageSourcePlayer = event.source.player;
    if (damageSourcePlayer) {
        let itemMap = getPlayerChestCavityItemMap(damageSourcePlayer);
        if (itemMap.has('kubejs:infinite_beats')) {
            organEntityHurtStrategies['kubejs:infinite_beats'](damageSourcePlayer)
        }
    }
})



let organEntityHurtStrategies = {
    'kubejs:infinite_beats': function (damageSourcePlayer) {
        let attriMap = getPlayerAttributeMap(damageSourcePlayer);
        if(!damageSourcePlayer.hasItemInSlot('mainhand') && !damageSourcePlayer.hasItemInSlot('offhand') && 
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
};