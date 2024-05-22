/**
 * 精英怪造成伤害
 * @param {Internal.LivingDamageEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function championPlayerHurtByOthers(event, data) {
    let entity = event.source.actual
    if (!entity || !entity.isLiving()) return
    if (!entity.persistentData.contains('champion')) return
    let typeList = entity.persistentData.get('champion')

    typeList.forEach(type => {
        let typeName = type.getAsString()
        if (typeName in championPlayerBearStrategies) {
            championPlayerBearStrategies[typeName](event, data)
        }
    });
}


/**
 * 玩家承受伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const championPlayerBearStrategies = {
    'fight_for_death': function (event, data) {
        let player = event.entity
        let oldLevel = -1
        if (player.hasEffect('kubejs:declaration_of_death')) {
            oldLevel = player.getEffect('kubejs:declaration_of_death').getAmplifier()
        }
        let currectLevel = oldLevel + 1
        if (currectLevel > 9) {
            player.kill()
        } else {
            player.potionEffects.add('kubejs:declaration_of_death', 20 * 15, currectLevel, false, false)
        }
    },
    'purify': function (event, data) {
        let player = event.entity
        let beneficialEffects = []
        player.potionEffects.active.forEach(ctx => {
            if (ctx.effect.CC_IsBeneficial()) {
                beneficialEffects.push(ctx.effect)
            }
        })
        if (beneficialEffects.length > 0) {
            beneficialEffects.forEach(effect => {
                player.removeEffect(effect)
            })
        }
    },
    'fierce_battle': function (event, data) {
        let player = event.entity
        let entity = event.source.actual
        let amplifier = 0
        if (entity.hasEffect('minecraft:absorption')) {
            amplifier = entity.getEffect('minecraft:absorption').getAmplifier() + 1
        }
        player.potionEffects.add('goety:sapped', 20 * 10, 1, false, false)
        entity.potionEffects.add('minecraft:absorption', 20 * 10, amplifier, false, false)
    },
    'destruction': function (event, data) {
        let player = event.entity
        player.potionEffects.add('goety:busted', 20 * 10, 0, false, false)
    },
    'awed': function (event, data) {
        let player = event.entity
        let entity = event.source.actual
        player.potionEffects.add('unusualprehistory:prevent_click', 20 * 10, 0, false, false)
        entity.potionEffects.add('minecraft:regeneration', 20 * 10, 2, false, false)
    },
    'exhausted': function (event, data) {
        let player = event.entity
        player.potionEffects.add('kubejs:magic_forbiden', 20 * 30, 0, false, false)
    },
    'corrupt': function (event, data) {
        let player = event.entity
        player.damageEquipment("feet", 10)
        player.damageEquipment("head", 10)
        player.damageEquipment("legs", 10)
        player.damageEquipment("chest", 10)
        player.damageEquipment("mainhand", 10)
        player.damageEquipment("offhand", 10)
    },
    'grue': function (event, data) {
        let player = event.entity
        player.potionEffects.add('goety:nyctophobia', 20 * 8, 3, false, false)
        if (!player.hasEffect('minecraft:night_vision')) {
            player.potionEffects.add('minecraft:darkness', 20 * 5, 0, false, false)
        }
        /** @type {Internal.Explosion$BlockInteraction_} */
        let a = ''
    },
    'smash': function (event, data) {
        let player = event.entity
        if (player.getHealth() <= Math.ceil(player.getMaxHealth() * 0.1)) {
            player.setHealth(0)
        }
        else {
            player.setHealth(player.getHealth() - Math.ceil(player.getMaxHealth() * 0.1))
        }
        event.amount = 0
    },
    'grudge': function (event, data) {
        let player = event.entity
        if (Math.random() < 1) {
            let random = Math.ceil((Math.random() * grudgeCurseEnchantList.length))
            let armor = Item.of('minecraft:air')
            switch (Math.ceil((Math.random() * 4))) {
                case 1:
                    armor = player.getHeadArmorItem()
                    if (armor.id == 'minecraft:air') return
                    player.setHeadArmorItem(armor.enchant(curseEnchantList[random - 1], 1))
                    break
                case 2:
                    armor = player.getChestArmorItem()
                    if (armor.id == 'minecraft:air') return
                    player.setChestArmorItem(armor.enchant(curseEnchantList[random - 1], 1))
                    break
                case 3:
                    armor = player.getLegsArmorItem()
                    if (armor.id == 'minecraft:air') return
                    player.setLegsArmorItem(armor.enchant(curseEnchantList[random - 1], 1))
                    break
                case 4:
                    armor = player.getFeetArmorItem()
                    if (armor.id == 'minecraft:air') return
                    player.setFeetArmorItem(armor.enchant(curseEnchantList[random - 1], 1))
                    break
                default:
                    break
            }
        }
    },
};