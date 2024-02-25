// priority: 10
/**
 * 造成伤害
 * @param {Internal.LivingHurtEvent} event
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
 * 造成伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageStrategies = {

};


/**
 * 造成伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageOnlyStrategies = {
    'kubejs:infinity_beats': function (event, organ, data) {
        let player = event.source.player;
        let attriMap = getPlayerAttributeMap(player);
        if (!player.hasItemInSlot('mainhand') && !player.hasItemInSlot('offhand')) {
            let value = 4;
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
        if (player.getMainHandItem() != 'kubejs:artist_wand' && player.getOffHandItem() != 'kubejs:artist_wand') {
            return
        }
        if (event.source.type == 'irons_spellbooks.firebolt' || event.source.type == 'irons_spellbooks.icicle' || event.source.type == 'irons_spellbooks.poison_arrow') {
            let amplify = 30
            if (player.hasEffect('kubejs:colorful')) {
                amplify = 20
            }
            event.amount = event.amount + getPlayerMagicData(player).getMana() / amplify
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
    'kubejs:bloody_bone_arrow': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        let player = event.source.player
        let item = player.mainHandItem
        if (item?.id == 'tetra:modular_bow' && item.nbt && item.nbt.contains('bow/long_stave_material')) {
            let dx = event.entity.getX() - player.getX()
            let dy = event.entity.getY() - player.getY()
            let dz = event.entity.getZ() - player.getZ()
            let distance = Math.floor(Math.sqrt(dx * dx + dy * dy + dz * dz))
            if (distance <= 20 && distance >= 0) {
                event.amount = event.amount * (1 - ((distance - 20) * (distance - 20) / 400))
            } else if (distance > 20) {
                event.amount = event.amount * Math.min((1 + ((distance - 20) * (distance - 20) / 400)), 5)
            }
        }
    },
    'kubejs:heavy_hammer_muscle': function (event, organ, data) {
        let player = event.source.player
        if (event.source.type != 'player') {
            return
        }
        if (Math.random() < Math.min(0.015 * player.getLuck(), 0.15)) {
            event.entity.potionEffects.add('tetra:stun', 20 * 2, 0)
        }
    },
    'kubejs:demon_eyeball': function (event, organ, data) {
        let player = event.source.player
        event.amount = event.amount * (player.pitch + 90) / 90
    },
    'kubejs:lost_paradise': function (event, organ, data) {
        let player = event.source.player
        let random = Math.random()
        if (random < 0.2) {
            event.entity.causeFallDamage(4, event.amount, DamageSource.FALL)
            event.amount = 0
            return
        }
        if (random < 0.4) {
            event.amount = event.amount + event.entity.maxHealth * 0.03
            return
        }
        if (random < 0.6) {
            event.amount = event.amount * 2
            return
        }
        if (random < 0.8) {
            event.amount = event.amount + 10
            return
        }
        if (random < 1) {
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
            event.amount = event.amount * 1.3
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
        if (Math.random() < Math.min(0.03 * event.source.player.getLuck(), 0.3)) {
            event.entity.potionEffects.map.forEach((effect, instance) => {
                if (!effect.isBeneficial()) {
                    instance.setDuration(instance.getDuration() + 20 * 2)
                }
            })
        }
    },
    'kubejs:lava_life_cycle_system': function (event, organ, data) {
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)
        let damageBonus = Math.floor(count / 10)
        if (damageBonus > 0) {
            event.amount = event.amount + damageBonus
            updateResourceCount(player, count - damageBonus)
        }
    },
    'kubejs:ancient_chip': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        let entityHeight = event.entity.bbHeight
        let arrowHeight = event.source.immediate.y - event.entity.y
        event.amount = event.amount * (Math.min(arrowHeight / entityHeight, 1.2) * 0.5 + 1)
    },
    'kubejs:the_third_eye': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        event.entity.invulnerableTime = event.entity.invulnerableTime * 1 / 2
        event.amount = event.amount * 0.75
    },
    'kubejs:enery_bottle_max': function (event, organ, data) {
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)
        let typeMap = getPlayerChestCavityTypeMap(player)
        let roseCount = 0
        let amplifier = 0.5
        if (typeMap.has('kubejs:rose')) {
            roseCount = roseCount + typeMap.get('kubejs:rose').length
        }
        if (player.hasEffect('kubejs:burning_heart') || player.hasEffect('kubejs:flaring_heart')) {
            amplifier = 2
        }
        updateResourceCount(player, count + Math.floor(roseCount * amplifier))
    },
    'kubejs:netherite_muscle': function (event, organ, data) {
        let entity = event.entity
        let entityList = getLivingWithinRadius(entity.getLevel(), entity.position(), 3)
        entityList.forEach(e => {
            if (!e.isPlayer() && e.stringUuid != entity.stringUuid) {
                e.attack(event.amount)
            }
        })
    },
    'kubejs:ender_guard_eyeball': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        let potionList = ['minecraft:slowness', 'minecraft:poison', 'cataclysm:abyssal_burn', 'minecraft:weakness', 'minecraft:wither', 'tetra:stun', 'tetra:bleeding', 'goety:cursed']
        event.entity.potionEffects.add(randomGet(potionList), 20 * 4, 0)
    },
    'kubejs:origin_knight_core': function (event, organ, data) {
        let player = event.source.player
        if (player.absorptionAmount > 0) {
            event.amount = event.amount + player.absorptionAmount / 2
        }
    },
};