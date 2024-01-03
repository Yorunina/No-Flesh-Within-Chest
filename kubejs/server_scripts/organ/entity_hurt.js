// priority: 10
/**
 * 造成伤害
 * @param {Internal.LivingEntityHurtEventJS} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function organPlayerHurtByPlayer(event, data) {
    let player = event.source.player;
    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:damage')) {
        typeMap.get('kubejs:damage').forEach(organ => {
            organPlayerDamageStrategies[organ.id](event, organ, data)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:damage_only')) {
        typeMap.get('kubejs:damage_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organPlayerDamageOnlyStrategies[organ.id](event, organ, data)
            }
        })
    }

}

/**
 * 承受伤害
 * @param {Internal.LivingEntityHurtEventJS} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function organPlayerHurtByOthers(event, data) {
    let player = event.player;
    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:bear')) {
        typeMap.get('kubejs:bear').forEach(organ => {
            organPlayerBearStrategies[organ.id](event, organ, data)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:bear_only')) {
        typeMap.get('kubejs:bear_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organPlayerBearOnlyStrategies[organ.id](event, organ, data)
            }
        })
    }
}


const organPlayerBearStrategies = {

};


/**
 * 玩家承受伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingEntityHurtEventJS, organ, EntityHurtCustomModel):void>}
 */
const organPlayerBearOnlyStrategies = {
    'kubejs:doppelganger': function (event, organ, data) {
        let player = event.player
        if (event.getDamage() < player.getHealth()) {
            return
        }
        let typeMap = getPlayerChestCavityTypeMap(event.player)
        if (typeMap.has('kubejs:legends')) {
            let player = event.player;
            let amount = typeMap.get('kubejs:legends').length
            if (Math.random() < Math.min(0.25 + 0.1 * amount, 0.8)) {
                player.potionEffects.add('minecraft:absorption', 40, 2)
            }
        }
    }
};


/**
 * 实体造成伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingEntityHurtEventJS, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageStrategies = {
};


/**
 * 实体造成伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingEntityHurtEventJS, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageOnlyStrategies = {
    'kubejs:infinity_beats': function (event, organ, data) {
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
    'kubejs:color_palette': function (event, organ, data) {
        let player = event.source.player
        if (player.getMainHandItem() != 'kubejs:artist_wand') {
            return
        }

        if (event.source.type == 'irons_spellbooks.firebolt'
            || event.source.type == 'irons_spellbooks.icicle'
            || event.source.type == 'irons_spellbooks.poison_arrow') {
            let amplify = 20
            if (player.hasEffect('kubejs:colorful')) {
                amplify = 10
            }
            data.damage = data.damage + getPlayerMagicData(player).getMana() / amplify
        }
    },
    'kubejs:executioner_blade_pieces': function (event, organ, data) {
        let player = event.source.player
        let item = player.mainHandItem
        if (item?.id == 'tetra:modular_sword' && item.nbt && item.nbt.contains('sword/executioner_blade_material')) {
            event.entity.potionEffects.add('kubejs:executed', 20 * 5, 2)
        }
    },
    'kubejs:heavy_hammer_muscle': function (event, organ, data) {
        let player = event.source.player
        if (Math.random() < 0.03 * Math.max(player.getLuck(), 0.3)) {
            event.entity.potionEffects.add('tetra:stun', 20 * 2, 0)
        }
    },
    'kubejs:demon_eyeball': function (event, organ, data) {
        let player = event.source.player
        data.damage = data.damage * (player.pitch + 90) / 90
    },
};