// priority: 10
/**
 * 造成伤害
 * @param {Internal.LivingEntityHurtEventJS} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function organEntityHurtByPlayer(event, data) {
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
    'kubejs:red_ink': function (event, organ, data) {
        getPlayerMagicData(event.player).addMana(data.damage * 5)
    },
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
    },
    'kubejs:heart_of_blade': function (event, organ, data) {
        data.returnDamage = data.returnDamage + event.player.getArmorValue()
    },
};


/**
 * 造成伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingEntityHurtEventJS, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageStrategies = {

};


/**
 * 造成伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingEntityHurtEventJS, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageOnlyStrategies = {
    'kubejs:infinity_beats': function (event, organ, data) {
        let player = event.source.player;
        let attriMap = getPlayerAttributeMap(player);
        if (!player.hasItemInSlot('mainhand') && !player.hasItemInSlot('offhand') &&
            !player.hasItemInSlot('chest')) {
            let value = 2;
            if (attriMap.has(global.TEMP_ATTACK_UP.name)) {
                value = value + attriMap.get(global.TEMP_ATTACK_UP.name)
            }
            attriMap.set(global.TEMP_ATTACK_UP.name, value)
            player.modifyAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name, value, global.TEMP_ATTACK_UP.operation);
            setPlayerAttributeMap(player, attriMap);
            data.returnDamage = data.returnDamage + value
        } else {
            player.removeAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name);
            attriMap.set(global.TEMP_ATTACK_UP.name, 0);
            setPlayerAttributeMap(player, attriMap);
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
            let amplify = 30
            if (player.hasEffect('kubejs:colorful')) {
                amplify = 20
            }
            data.damage = data.damage + getPlayerMagicData(player).getMana() / amplify
        }
    },
    'kubejs:executioner_blade_pieces': function (event, organ, data) {
        let player = event.source.player
        let item = player.mainHandItem
        if (event.source.type != 'player') {
            return
        }
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
    'kubejs:lost_paradise': function (event, organ, data) {
        let player = event.source.player
        let random = Math.random()
        if (random < 0.1) {
            event.entity.causeFallDamage(4, data.damage, DamageSource.FALL)
            event.cancel()
            return
        }
        if (random < 0.2) {
            data.damage = data.damage + event.entity.maxHealth * 0.03
            return
        }
        if (random < 0.3) {
            data.damage = data.damage * 2
            return
        }
        if (random < 0.4) {
            data.damage = data.damage + 10
            return
        }
        if (random < 0.5) {
            player.potionEffects.add('minecraft:regeneration', 20 * 15, 2)
            return
        }
    },
    'kubejs:blade_of_heart': function (event, organ, data) {
        let player = event.source.player
        let item = player.mainHandItem
        if (event.source.type != 'player') {
            return
        }
        if (item?.id == 'weaponmaster:wm_broadsword') {
            data.damage = data.damage * 1.3
        }
    },
    'kubejs:bone_soul': function (event, organ, data) {
        if (event.source.type != 'player') {
            return
        }
        if (Math.random() > 0.1) {
            return
        }
        let item = event.source.player.mainHandItem
        if (item?.id == 'weaponmaster:wm_rapier') {
            event.entity.potionEffects.add('kubejs:vulnerable', 20 * 15, 2)
        }
    },
    'kubejs:parasitic_elf': function (event, organ, data) {
        if (event.source.type != 'arrow') {
            return
        }
        if (Math.random() < Math.min(0.05 * event.source.player.getLuck(), 0.5)) {
            event.entity.potionEffects.map.forEach((effect, instance) => {
                if (!effect.isBeneficial()) {
                    instance.setDuration(instance.getDuration() + 20 * 2)
                }
            })
        }
    },
};