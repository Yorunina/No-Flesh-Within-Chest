/**
 * 精英怪遭受伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function championEntityHurtByPlayer(event, data) {
    let entity = event.entity
    if (!entity || !entity.isLiving()) return
    if (!entity.persistentData.contains('champion')) return
    let typeList = entity.persistentData.get('champion')

    typeList.forEach(type => {
        let typeName = type.getAsString()
        if (typeName in championPlayerDamageStrategies) {
            championPlayerDamageStrategies[typeName](event, data)
        }
    });
}

/**
 * 玩家承受伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const championPlayerDamageStrategies = {
    'low_frequency': function (event, data) {
        let entity = event.entity
        entity.invulnerableTime = 100
    },
    'purity': function (event, data) {
        let entity = event.entity
        let harmfulEffects = []
        entity.potionEffects.active.forEach(ctx => {
            if (!ctx.effect.isBeneficial()) {
                harmfulEffects.push(ctx.effect)
            }
        })
        if (harmfulEffects.length > 0) {
            harmfulEffects.forEach(effect => {
                entity.removeEffect(effect)
            })
        }
    },
    'reflection': function (event, data) {
        let entity = event.entity
        data.returnDamage = Math.min(event.amount, entity.getMaxHealth() * 2)
        event.amount = Math.min(entity.getMaxHealth() * 0.5, event.amount)
    },
    'unbending': function (event, data) {
        let entity = event.entity
        event.amount = event.amount * (entity.getHealth() / entity.getMaxHealth())
    },
};