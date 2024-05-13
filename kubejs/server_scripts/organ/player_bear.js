// priority: 10
/**
 * 承受伤害
 * @param {Internal.LivingDamageEvent} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function organPlayerHurtByOthers(event, data) {
    let player = event.entity;
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

/**
 * 玩家承受伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingDamageEvent, organ, EntityHurtCustomModel):void>}
 */
const organPlayerBearStrategies = {
    'kubejs:red_ink': function (event, organ, data) {
        let player = event.entity
        getPlayerMagicData(player).addMana(30)
    },
};


/**
 * 玩家承受伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingDamageEvent, organ, EntityHurtCustomModel):void>}
 */
const organPlayerBearOnlyStrategies = {
    'kubejs:doppelganger': function (event, organ, data) {
        let player = event.entity
        if (event.amount < player.getHealth()) {
            return
        }
        let typeMap = getPlayerChestCavityTypeMap(player)
        if (typeMap.has('kubejs:legends')) {
            let amount = typeMap.get('kubejs:legends').length
            if (Math.random() < Math.min(0.25 + 0.1 * amount, 0.8)) {
                player.potionEffects.add('minecraft:absorption', 40, 2)
            }
        }
    },
    'kubejs:heart_of_blade': function (event, organ, data) {
        data.returnDamage = data.returnDamage + event.entity.getArmorValue()
    },
    'kubejs:harbinger_lung': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)
        if (count >= event.amount / 2) {
            event.amount = event.amount / 2
            updateResourceCount(event.entity, count - Math.floor(event.amount))
        }
    },
    'kubejs:freezing_intestine': function (event, organ, data) {
        if (event.source.actual && event.source.actual.isLiving()) {
            event.source.actual.potionEffects.add('goety:snow_skin', 20 * 10)
        }
    },
    'kubejs:mosquito_repellent': function (event, organ, data) {
        if (event.source?.actual?.type == 'alexsmobs:crimson_mosquito') {
            event.source.actual.kill()
        }
    },
    'kubejs:sarcasm': function (event, organ, data) {
        let player = event.entity
        let luckval = player.attributes.getValue('minecraft:generic.luck')
        if (luckval <= 0) return
        let randomval = Math.random() * Math.max(3 - luckval / 50, 1)
        event.amount = event.amount * randomval
    },
    'kubejs:cursed_soul': function (event, organ, data) {
        let player = event.entity
        let itemList = [player.getMainHandItem(), player.getOffHandItem(), player.getHeadArmorItem(),
        player.getChestArmorItem(), player.getLegsArmorItem(), player.getFeetArmorItem()]
        let curseType = 0
        let allCurseLevel = 0
        itemList.forEach(item => {
            item.enchantments.forEach((name, level) => {
                if (curseEnchantList.some(ele => ele == name)) {
                    curseType = curseType + 1
                    allCurseLevel = allCurseLevel + level
                }
            })
        })
        if (event.source.getType() == 'mob_attack' || event.source.isProjectile()) {
            event.amount = event.amount * Math.max(0.5, (1 - curseType * 0.01 - allCurseLevel * 0.02))
        }
        else {
            event.amount = event.amount * (1 + curseType * 0.1 + allCurseLevel * 0.1)
        }
    },
    'kubejs:weird_paperman': function (event, organ, data) {
        let player = event.entity
        let oldAirSupply = player.getAirSupply()
        if (oldAirSupply > 0) {
            let curAirSupply = Math.max(oldAirSupply - event.amount * 50, 0)
            let curAmount = Math.max(event.amount - oldAirSupply / 50, 0)
            player.setAirSupply(curAirSupply)
            event.amount = curAmount
            return
        }
    },
    'kubejs:warp_bubble': function (event, organ, data) {
        /** @type {Internal.ServerPlayer} */
        let player = event.entity
        if (player.cooldowns.isOnCooldown('kubejs:warp_bubble')) return
        let harmEffectInstances = []
        player.potionEffects.active.forEach(ctx => {
            if (ctx.effect.CC_IsHarmful()) {
                harmEffectInstances.push(ctx)
            }
        })
        let entityList = getLivingWithinRadius(player.getLevel(), new Vec3(player.x, player.y, player.z), 5)
        entityList.forEach(e => {
            if (!e.isPlayer()) {
                harmEffectInstances.forEach(ctx => {
                    e.addEffect(ctx)
                })
            }
        })
        player.addItemCooldown('kubejs:warp_bubble', 100)
    },
};
