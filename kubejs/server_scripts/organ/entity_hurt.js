EntityEvents.hurt(event => {
    let damageSourcePlayer = event.source.player;
    if (damageSourcePlayer) {
        let itemMap = getPlayerChestCavityItemMap(damageSourcePlayer);
        if (itemMap.has('kubejs:infinite_beats') && damageSourcePlayer.stages.has('organ_actived')) {
            let attriMap = getPlayerAttributeMap(damageSourcePlayer);
            if(!damageSourcePlayer.hasItemInSlot('mainhand') && !damageSourcePlayer.hasItemInSlot('offhand') && 
            !damageSourcePlayer.hasItemInSlot('chest')) {
                let value = 2;
                if (attriMap.has(global.HEALTH_UP.name)) {
                    value = value + attriMap.get(global.HEALTH_UP.name)
                    attriMap.set(global.HEALTH_UP.name, value)
                }
                damageSourcePlayer.modifyAttribute(global.HEALTH_UP.key, global.HEALTH_UP.name, value, global.HEALTH_UP.operation);
                setPlayerAttributeMap(damageSourcePlayer, attriMap);
                damageSourcePlayer.attack(1);
            } else {
                damageSourcePlayer.removeAttribute(global.HEALTH_UP.key, global.HEALTH_UP.name);
                attriMap.set(global.HEALTH_UP.name, 0);
                setPlayerAttributeMap(damageSourcePlayer, attriMap);
            }
        }
    }
})