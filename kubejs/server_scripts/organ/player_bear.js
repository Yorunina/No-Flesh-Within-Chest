// priority: 10
/**
 * 承受伤害
 * @param {Internal.LivingHurtEvent} event
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
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const organPlayerBearStrategies = {
    'kubejs:red_ink': function (event, organ, data) {
        getPlayerMagicData(event.entity).addMana(event.amount * 5)
    },
};


/**
 * 玩家承受伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
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
        if (count >= event.amount) {
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
};
