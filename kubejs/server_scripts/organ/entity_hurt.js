// priority: 10
// 造成伤害
EntityEvents.hurt(event => {
    let player = event.source.player;
    if (!player) return;

    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:damage')) {
        typeMap.get('kubejs:damage').forEach(organ => {
            organEntityDamageStrategies[organ.id](event)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:damage_only')) {
        typeMap.get('kubejs:damage_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organEntityDamageOnlyStrategies[organ.id](event)
            }
        })
    }
})

// 承受伤害
EntityEvents.hurt('minecraft:player', event => {
    let player = event.player;
    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:bear')) {
        typeMap.get('kubejs:bear').forEach(organ => {
            organEntityBearStrategies[organ.id](event)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:bear_only')) {
        typeMap.get('kubejs:bear_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organEntityBearOnlyStrategies[organ.id](event)
            }
        })
    }
})


const organEntityBearStrategies = {

};

const organEntityBearOnlyStrategies = {
    'kubejs:doppelganger': function (event) {
        let player = event.player
        if (event.getDamage() < player.getHealth()) {
            return
        }
        let typeMap = getPlayerChestCavityTypeMap(event.player)
        if (typeMap.has('kubejs:legends')) {
            let player = event.player;
            let amount = typeMap.get('kubejs:legends').length
            if (Math.random() < Math.min(0.25 + 0.1 * amount, 0.8)) {
                player.potionEffects.add('minecraft:absorption', 60, 2)
            }
        }
    }
};


const organEntityDamageStrategies = {
};

const organEntityDamageOnlyStrategies = {
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
};


